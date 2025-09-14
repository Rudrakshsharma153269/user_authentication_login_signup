@echo off
echo Starting MongoDB locally...
echo Make sure MongoDB is installed and running on port 27017
echo.
echo To connect with MongoDB Compass:
echo Connection String: mongodb://localhost:27017/user_authentication
echo.
cd /d "%~dp0"
npm run dev