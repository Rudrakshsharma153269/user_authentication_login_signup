# User Authentication App Setup Guide

## Prerequisites
1. **Node.js** (v16 or higher)
2. **MongoDB** installed and running locally
3. **MongoDB Compass** (optional, for database visualization)

## Quick Start

### 1. Install Dependencies
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 2. Start MongoDB
Make sure MongoDB is running on port 27017 (default port)

### 3. Run the Application
From the root directory, run:
```bash
start-app.bat
```

This will start both:
- Backend server on http://localhost:5000
- Frontend client on http://localhost:3000

### 4. Access the Application
Open your browser and go to: **http://localhost:3000**

## MongoDB Connection
- **Connection String**: `mongodb://localhost:27017/user_authentication`
- **Database Name**: `user_authentication`
- **Collection**: `users` (created automatically)

## MongoDB Compass Setup
1. Open MongoDB Compass
2. Use connection string: `mongodb://localhost:27017/user_authentication`
3. Connect to view your data

## Features
- ✅ User Registration (Signup)
- ✅ User Login
- ✅ JWT Authentication
- ✅ Password Hashing (bcrypt)
- ✅ MongoDB Integration
- ✅ React Frontend with Material-UI
- ✅ Protected Routes

## API Endpoints
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/profile` - Get user profile

## Troubleshooting
1. **MongoDB not connecting**: Ensure MongoDB service is running
2. **Port conflicts**: Check if ports 3000 and 5000 are available
3. **CORS errors**: Make sure both servers are running

## Data Storage
All user signup and login data will be automatically stored in your local MongoDB database and visible in MongoDB Compass.