"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useRef } from "react";
import {
    Bold, Italic, List, ListOrdered,
    Heading2, Heading3, Pilcrow, Undo, Redo, Code
} from "lucide-react";

interface Props {
    value: string;
    onChange: (html: string) => void;
}

export default function RichTextEditor({ value, onChange }: Props) {
    const isSyncing = useRef(false);

    const editor = useEditor({
        extensions: [StarterKit],
        content: value,
        editorProps: {
            attributes: {
                class: "min-h-[400px] px-5 py-4 focus:outline-none text-sm leading-relaxed text-white",
            },
        },
        onUpdate({ editor }) {
            if (!isSyncing.current) {
                onChange(editor.getHTML());
            }
        },
        immediatelyRender: false,
        shouldRerenderOnTransaction: true,
    });

    // Sync external value changes (e.g. when a new file is parsed)
    useEffect(() => {
        if (!editor) return;
        const current = editor.getHTML();
        if (current !== value) {
            isSyncing.current = true;
            editor.commands.setContent(value);
            isSyncing.current = false;
        }
    }, [value, editor]);

    if (!editor) return (
        <div className="rounded-2xl border border-white/10 bg-white/5 min-h-[460px] flex items-center justify-center">
            <span className="text-slate-600 text-sm">กำลังโหลด editor...</span>
        </div>
    );

    const btn = (active: boolean) =>
        `p-1.5 rounded transition-colors ${
            active
                ? "bg-white/20 text-white"
                : "text-slate-400 hover:text-white hover:bg-white/10"
        }`;

    return (
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-0.5 px-3 py-2 border-b border-white/10 bg-white/5">
                <button type="button" title="Bold" onClick={() => editor.chain().focus().toggleBold().run()} className={btn(editor.isActive("bold"))}>
                    <Bold className="w-3.5 h-3.5" />
                </button>
                <button type="button" title="Italic" onClick={() => editor.chain().focus().toggleItalic().run()} className={btn(editor.isActive("italic"))}>
                    <Italic className="w-3.5 h-3.5" />
                </button>
                <button type="button" title="Code" onClick={() => editor.chain().focus().toggleCode().run()} className={btn(editor.isActive("code"))}>
                    <Code className="w-3.5 h-3.5" />
                </button>

                <div className="w-px h-4 bg-white/10 mx-1" />

                <button type="button" title="Heading 2" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={btn(editor.isActive("heading", { level: 2 }))}>
                    <Heading2 className="w-3.5 h-3.5" />
                </button>
                <button type="button" title="Heading 3" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={btn(editor.isActive("heading", { level: 3 }))}>
                    <Heading3 className="w-3.5 h-3.5" />
                </button>
                <button type="button" title="Paragraph" onClick={() => editor.chain().focus().setParagraph().run()} className={btn(editor.isActive("paragraph"))}>
                    <Pilcrow className="w-3.5 h-3.5" />
                </button>

                <div className="w-px h-4 bg-white/10 mx-1" />

                <button type="button" title="Bullet List" onClick={() => editor.chain().focus().toggleBulletList().run()} className={btn(editor.isActive("bulletList"))}>
                    <List className="w-3.5 h-3.5" />
                </button>
                <button type="button" title="Numbered List" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={btn(editor.isActive("orderedList"))}>
                    <ListOrdered className="w-3.5 h-3.5" />
                </button>

                <div className="w-px h-4 bg-white/10 mx-1" />

                <button type="button" title="Undo" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} className={btn(false) + " disabled:opacity-30"}>
                    <Undo className="w-3.5 h-3.5" />
                </button>
                <button type="button" title="Redo" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} className={btn(false) + " disabled:opacity-30"}>
                    <Redo className="w-3.5 h-3.5" />
                </button>
            </div>

            {/* Editor area */}
            <EditorContent
                editor={editor}
                className="
                    [&_.ProseMirror]:min-h-[400px] [&_.ProseMirror]:px-5 [&_.ProseMirror]:py-4 [&_.ProseMirror]:focus:outline-none
                    [&_.ProseMirror]:text-sm [&_.ProseMirror]:leading-relaxed [&_.ProseMirror]:text-slate-200
                    [&_.ProseMirror_h2]:text-lg [&_.ProseMirror_h2]:font-bold [&_.ProseMirror_h2]:text-white [&_.ProseMirror_h2]:mt-5 [&_.ProseMirror_h2]:mb-2 [&_.ProseMirror_h2]:border-b [&_.ProseMirror_h2]:border-white/10 [&_.ProseMirror_h2]:pb-1
                    [&_.ProseMirror_h3]:text-base [&_.ProseMirror_h3]:font-semibold [&_.ProseMirror_h3]:text-white [&_.ProseMirror_h3]:mt-4 [&_.ProseMirror_h3]:mb-1.5 [&_.ProseMirror_h3]:pl-2 [&_.ProseMirror_h3]:border-l-2 [&_.ProseMirror_h3]:border-[#F51036]
                    [&_.ProseMirror_p]:mb-3 [&_.ProseMirror_p]:text-slate-300
                    [&_.ProseMirror_ul]:list-disc [&_.ProseMirror_ul]:pl-5 [&_.ProseMirror_ul]:my-3 [&_.ProseMirror_ul]:space-y-1
                    [&_.ProseMirror_ol]:list-decimal [&_.ProseMirror_ol]:pl-5 [&_.ProseMirror_ol]:my-3 [&_.ProseMirror_ol]:space-y-1
                    [&_.ProseMirror_li]:text-slate-300
                    [&_.ProseMirror_strong]:text-white [&_.ProseMirror_strong]:font-bold
                    [&_.ProseMirror_em]:text-slate-400 [&_.ProseMirror_em]:italic
                    [&_.ProseMirror_code]:bg-white/10 [&_.ProseMirror_code]:px-1 [&_.ProseMirror_code]:rounded [&_.ProseMirror_code]:text-xs [&_.ProseMirror_code]:font-mono [&_.ProseMirror_code]:text-blue-300
                    [&_.ProseMirror_.is-editor-empty:first-child::before]:content-['เนื้อหาบทความ...'] [&_.ProseMirror_.is-editor-empty:first-child::before]:text-slate-600 [&_.ProseMirror_.is-editor-empty:first-child::before]:float-left [&_.ProseMirror_.is-editor-empty:first-child::before]:pointer-events-none
                "
            />
        </div>
    );
}
