@echo off
chcp 65001 >nul
title MZL Auto Push

echo.
echo ============================================
echo   MZL Page Auto Push
echo ============================================
echo.

cd /d %~dp0

echo [Files Changed]
git status --porcelain
echo.

echo [Commit]
git add .
git commit -m "Update: auto push"
echo.

echo [Pushing...]
git push origin main

echo.
echo [Success!]
echo.
echo [Link] https://github.com/MziL-1/mzl-SelfPage
echo ============================================
echo.
pause