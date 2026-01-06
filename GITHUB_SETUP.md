# How to Push to GitHub

## Step 1: Create a .gitignore file (if needed)
Make sure you have a `.gitignore` file that excludes:
- `node_modules/`
- `.env.local`
- `.next/`
- `.vercel/`
- etc.

## Step 2: Stage and commit all files

```bash
# Add all files
git add .

# Commit with a message
git commit -m "Initial commit: 222 Fit website with Next.js, TypeScript, and Tailwind CSS"
```

## Step 3: Create a new repository on GitHub

1. Go to https://github.com/new
2. Repository name: `222-fit` (or your preferred name)
3. Description: "Premium fitness training website for 222 Fit in Carol Stream, IL"
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (you already have these)
6. Click **"Create repository"**

## Step 4: Connect and push to GitHub

After creating the repo, GitHub will show you commands. Use these:

```bash
# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/222-fit.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Alternative: Using SSH

If you prefer SSH:

```bash
git remote add origin git@github.com:YOUR_USERNAME/222-fit.git
git branch -M main
git push -u origin main
```

## Step 5: Verify

Go to your GitHub repository and verify all files are there.

## Troubleshooting

### If you get "remote origin already exists":
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/222-fit.git
```

### If you need to force push (not recommended unless necessary):
```bash
git push -u origin main --force
```

### If you have authentication issues:
- Use GitHub CLI: `gh auth login`
- Or use a Personal Access Token instead of password
- Or set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

