@echo off
echo Setting up your portfolio for GitHub...
echo.

REM Check if Git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Git is not installed. Please install Git first:
    echo https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)

echo Step 1: Initializing Git repository...
git init

echo Step 2: Adding all files...
git add .

echo Step 3: Creating initial commit...
git commit -m "Initial commit: Complete portfolio website with React, Tailwind CSS, and Framer Motion"

echo.
echo ======================================
echo Your project is ready for GitHub!
echo ======================================
echo.
echo Next steps:
echo 1. Go to https://github.com and create a new repository
echo 2. Copy the repository URL
echo 3. Run these commands:
echo.
echo    git remote add origin YOUR_REPOSITORY_URL
echo    git branch -M main
echo    git push -u origin main
echo.
echo Replace YOUR_REPOSITORY_URL with your actual GitHub repository URL
echo.
pause
