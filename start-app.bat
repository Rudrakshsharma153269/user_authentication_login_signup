@echo off
echo Starting User Authentication App...
echo.
echo Make sure MongoDB is running on port 27017
echo You can connect with MongoDB Compass using: mongodb://localhost:27017/user_authentication
echo.

echo Starting backend server...
start "Backend Server" cmd /k "cd /d server && npm run dev"

timeout /t 3 /nobreak > nul

echo Starting frontend client...
start "Frontend Client" cmd /k "cd /d client && npm run dev"

echo.
echo Both servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Press any key to close this window...
pause > nul