#!/usr/bin/env python3
"""
repair.py — APFS Sparse File Recovery Tool
แก้ปัญหา macOS APFS lazy write ที่ทำให้ไฟล์มี stat.st_size > 0 แต่ read() คืนค่า 0 bytes

วิธีใช้:
  python3 scripts/repair.py          # ตรวจและซ่อม source files จาก git
  python3 scripts/repair.py --git    # ซ่อม .git/ ด้วย (กรณี git crash)
  python3 scripts/repair.py --check  # ตรวจอย่างเดียว ไม่ซ่อม
"""

import os
import sys
import subprocess
from pathlib import Path


# ── Config ───────────────────────────────────────────────────────────────────

REPO_ROOT = Path(__file__).parent.parent.resolve()
GIT_DIR = REPO_ROOT / ".git"
SRC_DIR = REPO_ROOT / "src"

# ไฟล์ critical ใน .git/ ที่ต้องซ่อมถ้าเสีย
GIT_CRITICAL_DEFAULTS = {
    "HEAD": b"ref: refs/heads/main\n",
}


# ── Helpers ───────────────────────────────────────────────────────────────────

def is_sparse(path: Path) -> bool:
    """คืน True ถ้าไฟล์มี stat.st_size > 0 แต่ read() ได้ 0 bytes (sparse/corrupted)"""
    try:
        stat_size = path.stat().st_size
        if stat_size == 0:
            return False  # ไฟล์ว่างจริงๆ ไม่ใช่ sparse
        read_size = len(path.read_bytes())
        return stat_size != read_size
    except Exception:
        return False


def git(*args, check=False) -> subprocess.CompletedProcess:
    return subprocess.run(
        ["git", *args],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
        check=check,
    )


def git_tracked_files() -> dict[str, str]:
    """คืน dict ของ {relative_path: blob_hash} สำหรับไฟล์ทุกตัวใน HEAD"""
    result = git("ls-tree", "-r", "HEAD", "--format=%(objectname) %(path)")
    if result.returncode != 0:
        return {}
    file_map = {}
    for line in result.stdout.strip().splitlines():
        if line:
            parts = line.split(" ", 1)
            if len(parts) == 2:
                file_map[parts[1]] = parts[0]
    return file_map


def recover_from_git(rel_path: str, blob_hash: str) -> bool:
    """Recover ไฟล์จาก git pack file"""
    result = subprocess.run(
        ["git", "cat-file", "blob", blob_hash],
        cwd=REPO_ROOT,
        capture_output=True,
    )
    if result.returncode != 0:
        return False
    full_path = REPO_ROOT / rel_path
    full_path.parent.mkdir(parents=True, exist_ok=True)
    full_path.write_bytes(result.stdout)
    return True


# ── Main routines ──────────────────────────────────────────────────────────────

def repair_source_files(dry_run: bool = False) -> tuple[int, int]:
    """
    ตรวจ source files ที่ track อยู่ใน git และซ่อมถ้า sparse
    คืน (recovered, failed)
    """
    file_map = git_tracked_files()
    if not file_map:
        print("  ⚠  ไม่สามารถดึง file list จาก git ได้")
        print("     ลอง: python3 scripts/repair.py --git ก่อน")
        return 0, 0

    recovered = 0
    failed = 0

    for rel_path, blob_hash in file_map.items():
        full_path = REPO_ROOT / rel_path
        if not full_path.exists():
            continue
        if not is_sparse(full_path):
            continue

        stat_size = full_path.stat().st_size
        print(f"  💀 SPARSE: {rel_path}  (stat={stat_size}, read=0)")

        if dry_run:
            continue

        if recover_from_git(rel_path, blob_hash):
            new_size = full_path.stat().st_size
            print(f"  ✅ Recovered: {rel_path}  ({new_size} bytes)")
            recovered += 1
        else:
            print(f"  ❌ Failed to recover: {rel_path}")
            failed += 1

    return recovered, failed


def repair_git_dir() -> tuple[int, int]:
    """
    ตรวจและซ่อม .git/ directory
    1. ลบ loose objects ที่เสีย (git จะอ่านจาก pack แทน)
    2. ซ่อม HEAD และ config ถ้าเสีย
    """
    import shutil

    fixed = 0
    failed = 0

    # 1. Scan loose objects
    obj_dir = GIT_DIR / "objects"
    sparse_objs = 0
    for subdir in obj_dir.iterdir():
        if subdir.name in ("pack", "info") or not subdir.is_dir():
            continue
        for obj_file in subdir.iterdir():
            if is_sparse(obj_file):
                sparse_objs += 1
                try:
                    obj_file.unlink()
                except Exception:
                    pass

    if sparse_objs:
        print(f"  🗑  ลบ {sparse_objs} loose objects ที่เสีย (git จะอ่านจาก pack แทน)")
        fixed += 1

    # 2. ซ่อม HEAD
    head_path = GIT_DIR / "HEAD"
    if is_sparse(head_path):
        print(f"  💀 SPARSE: .git/HEAD")
        head_path.write_bytes(GIT_CRITICAL_DEFAULTS["HEAD"])
        print(f"  ✅ Fixed: .git/HEAD → ref: refs/heads/main")
        fixed += 1

    # 3. ซ่อม config
    config_path = GIT_DIR / "config"
    if is_sparse(config_path):
        print(f"  💀 SPARSE: .git/config")
        # ดึง remote URL จาก packed-refs ถ้าได้
        packed = GIT_DIR / "packed-refs"
        remote_url = "https://github.com/thanakitpw/bestsolutions-website.git"
        config_content = (
            f"[core]\n"
            f"\trepositoryformatversion = 0\n"
            f"\tfilemode = true\n"
            f"\tbare = false\n"
            f"\tlogallrefupdates = true\n"
            f"\tignorecase = true\n"
            f"\tprecomposeunicode = true\n"
            f'[remote "origin"]\n'
            f"\turl = {remote_url}\n"
            f"\tfetch = +refs/heads/*:refs/remotes/origin/*\n"
            f'[branch "main"]\n'
            f"\tremote = origin\n"
            f"\tmerge = refs/heads/main\n"
        ).encode()
        config_path.write_bytes(config_content)
        print(f"  ✅ Fixed: .git/config")
        fixed += 1

    # 4. ซ่อม commit-graph ถ้าเสีย
    cg = GIT_DIR / "objects" / "info" / "commit-graph"
    if cg.exists() and is_sparse(cg):
        print(f"  💀 SPARSE: .git/objects/info/commit-graph → ลบ")
        cg.unlink()
        fixed += 1

    # 5. ลบ index lock ถ้ามี
    lock = GIT_DIR / "index.lock"
    if lock.exists():
        print(f"  🔒 Stale index.lock → ลบ")
        lock.unlink()
        fixed += 1

    return fixed, failed


# ── Entry point ────────────────────────────────────────────────────────────────

def main():
    args = sys.argv[1:]
    dry_run = "--check" in args
    fix_git = "--git" in args

    print("=" * 60)
    print("🔧 APFS Sparse File Repair Tool")
    print(f"   Repo: {REPO_ROOT}")
    if dry_run:
        print("   Mode: CHECK ONLY (ไม่ซ่อม)")
    print("=" * 60)

    total_fixed = 0
    total_failed = 0

    # ซ่อม .git/ ก่อน (ถ้า git พัง จะซ่อม source ไม่ได้)
    if fix_git:
        print("\n📁 ตรวจ .git/ directory...")
        f, fail = repair_git_dir()
        total_fixed += f
        total_failed += fail
        if f == 0:
            print("  ✓ .git/ ปกติดี")

    # ซ่อม source files
    print("\n📄 ตรวจ source files...")
    result = git("status")
    if result.returncode != 0:
        print("  ⚠  git ใช้งานไม่ได้ ลองรัน: python3 scripts/repair.py --git")
        sys.exit(1)

    rec, fail = repair_source_files(dry_run=dry_run)
    total_fixed += rec
    total_failed += fail

    if rec == 0 and fail == 0:
        print("  ✓ ไม่พบไฟล์เสีย")

    # สรุป
    print("\n" + "=" * 60)
    if dry_run:
        print("  (dry-run เสร็จ ไม่ได้แก้ไฟล์จริง)")
    elif total_fixed > 0 or total_failed > 0:
        print(f"  ✅ Recovered: {total_fixed}  ❌ Failed: {total_failed}")
        if total_fixed > 0:
            print("\n  💡 แนะนำ: รัน 'sync' เพื่อ flush หลังจากนี้")
    else:
        print("  ✅ ทุกอย่างปกติ ไม่ต้องซ่อมอะไร")

    print("\n  📌 ป้องกันในอนาคต:")
    print("     • รัน 'sync' ใน terminal ก่อนปิด VS Code ทุกครั้ง")
    print("     • Commit บ่อยๆ เพื่อให้ pack file มี backup")
    print("=" * 60)


if __name__ == "__main__":
    main()
