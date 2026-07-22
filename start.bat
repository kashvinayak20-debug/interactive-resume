@echo off
title AetherResume Launcher
echo Launching Interactive Portfolio Web App...
py run.py
if %ERRORLEVEL% NEQ 0 (
    python run.py
)
pause
