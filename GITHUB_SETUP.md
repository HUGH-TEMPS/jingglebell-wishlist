# GitHub Pages Setup Instructions

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `jingglebell-wishlist`)
5. Choose Public (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license
7. Click "Create repository"

## Step 2: Initialize Git and Upload Files

Open PowerShell or Command Prompt in your project folder (`C:\xampp\htdocs\jingglebell`) and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Jingle Bell Wishlist"

# Add your GitHub repository (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section (left sidebar)
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"
7. Wait a few minutes for GitHub to build your site
8. Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Step 4: Update File Paths (if needed)

If your repository name is different, you may need to update links in:

- `index.html` - video redirect to `wishlist.html`
- `add-wishlist.html` - link to `wishlist.html`
- `edit-wishlist.html` - link to `wishlist.html`

## Important Notes

- **Video File Size**: GitHub has a 100MB file limit. If your video is larger, consider:

  - Compressing the video
  - Hosting it on a CDN (like Cloudinary, Imgur, or YouTube)
  - Using a different hosting service

- **LocalStorage**: All wishlist data is stored in the browser's localStorage, so it's per-device/per-browser

- **No Server Required**: This is a fully static site that works on GitHub Pages!

## Troubleshooting

- If pages don't load, check that all file names match exactly (case-sensitive)
- Make sure `index.html` is in the root folder
- Check browser console for any JavaScript errors
- Clear browser cache if you see old versions

## Next Steps

After setup, you can:

- Share your GitHub Pages URL with others
- Continue to update files and push changes
- Customize the design and features
