# GitHub Upload Script
# Before running this, create a repository on GitHub.com

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "GitHub Upload Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Get repository details
$username = Read-Host "Enter your GitHub username"
$repoName = Read-Host "Enter your repository name (e.g., jingglebell-wishlist)"

if ([string]::IsNullOrWhiteSpace($username) -or [string]::IsNullOrWhiteSpace($repoName)) {
    Write-Host "Error: Username and repository name are required!" -ForegroundColor Red
    exit
}

$remoteUrl = "https://github.com/$username/$repoName.git"

Write-Host ""
Write-Host "Repository URL: $remoteUrl" -ForegroundColor Yellow
Write-Host ""
Write-Host "Make sure you have:" -ForegroundColor Yellow
Write-Host "1. Created the repository on GitHub.com" -ForegroundColor Yellow
Write-Host "2. Made it PUBLIC (required for free GitHub Pages)" -ForegroundColor Yellow
Write-Host ""
$confirm = Read-Host "Have you created the repository? (yes/no)"

if ($confirm -ne "yes") {
    Write-Host ""
    Write-Host "Please create the repository first:" -ForegroundColor Red
    Write-Host "1. Go to https://github.com/new" -ForegroundColor Yellow
    Write-Host "2. Enter repository name: $repoName" -ForegroundColor Yellow
    Write-Host "3. Make it PUBLIC" -ForegroundColor Yellow
    Write-Host "4. DO NOT initialize with README" -ForegroundColor Yellow
    Write-Host "5. Click 'Create repository'" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Then run this script again." -ForegroundColor Yellow
    exit
}

Write-Host ""
Write-Host "Adding remote and pushing to GitHub..." -ForegroundColor Green

# Add remote
git remote add origin $remoteUrl 2>$null
if ($LASTEXITCODE -ne 0) {
    # Remote might already exist, try to set URL
    git remote set-url origin $remoteUrl
}

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "SUCCESS! Files uploaded to GitHub!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. Go to: https://github.com/$username/$repoName/settings/pages" -ForegroundColor Yellow
    Write-Host "2. Under 'Source', select 'Deploy from a branch'" -ForegroundColor Yellow
    Write-Host "3. Choose 'main' branch and '/ (root)' folder" -ForegroundColor Yellow
    Write-Host "4. Click 'Save'" -ForegroundColor Yellow
    Write-Host "5. Wait 2-3 minutes for GitHub to build your site" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Your site will be available at:" -ForegroundColor Cyan
    Write-Host "https://$username.github.io/$repoName/" -ForegroundColor Green
    Write-Host ""
}
else {
    Write-Host ""
    Write-Host "Error pushing to GitHub!" -ForegroundColor Red
    Write-Host "Make sure:" -ForegroundColor Yellow
    Write-Host "1. The repository exists on GitHub" -ForegroundColor Yellow
    Write-Host "2. You have access to push to it" -ForegroundColor Yellow
    Write-Host "3. You're authenticated (may need to use GitHub CLI or Personal Access Token)" -ForegroundColor Yellow
    Write-Host ""
}

