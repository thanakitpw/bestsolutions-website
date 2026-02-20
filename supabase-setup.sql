-- ============================================================
-- Supabase Storage & RLS Setup for Blog Images
-- Run this in Supabase Dashboard → SQL Editor
-- ============================================================

-- 1. Create storage bucket (if not exists)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'images', 
  'images', 
  true, 
  10485760, -- 10MB
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO NOTHING;

-- 2. Enable RLS on storage.objects if not already enabled
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- 3. Allow authenticated users to upload to images bucket
CREATE POLICY "Allow authenticated uploads to images bucket"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'images' 
  AND auth.role() = 'authenticated'
  AND (storage.foldername(name))[1] = 'blog'
);

-- 4. Allow public read access to images bucket
CREATE POLICY "Allow public read access to images bucket"
ON storage.objects FOR SELECT
USING (bucket_id = 'images');

-- 5. Allow users to update their own uploads
CREATE POLICY "Allow users to update their own images"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'images' 
  AND auth.role() = 'authenticated'
)
WITH CHECK (
  bucket_id = 'images' 
  AND auth.role() = 'authenticated'
);

-- 5. Allow users to delete their own uploads
CREATE POLICY "Allow users to delete their own images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'images' 
  AND auth.role() = 'authenticated'
);

-- ============================================================
-- Alternative: Allow service role to bypass RLS (recommended for admin uploads)
-- ============================================================

-- If you want to use service role (server-side) to upload without restrictions:
-- This policy allows the service role to do anything with the images bucket

CREATE POLICY "Allow service role full access to images bucket"
ON storage.objects FOR ALL
USING (bucket_id = 'images')
WITH CHECK (bucket_id = 'images');

-- ============================================================
-- Verify setup
-- ============================================================

-- Check bucket exists
SELECT * FROM storage.buckets WHERE name = 'images';

-- Check policies
SELECT * FROM pg_policies WHERE table_name = 'objects' AND schema_name = 'storage';
