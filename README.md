# E-commerce Authentication System

A full-stack e-commerce application with user authentication, built with Node.js, Express, MongoDB, React, and TypeScript.

## Features

### Backend
- User registration and login with JWT authentication
- Password confirmation validation
- Secure password hashing with bcrypt
- MongoDB database integration
- RESTful API endpoints
- Cookie-based authentication

### Frontend
- React with TypeScript and Material-UI
- Protected routes for authenticated users
- Product catalog with wishlist functionality
- Shopping cart interface
- Responsive design
- Local storage for user session persistence

## Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing

**Frontend:**
- React 18
- TypeScript
- Material-UI (MUI)
- React Router
- Axios for API calls
- Vite for development

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/user-authentication-ecommerce.git
cd user-authentication-ecommerce
```

2. Install backend dependencies
```bash
cd server
npm install
```

3. Install frontend dependencies
```bash
cd ../client
npm install
```

4. Set up environment variables
Create a `.env` file in the server directory:
```
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

5. Start the development servers

Backend:
```bash
cd server
npm start
```

Frontend:
```bash
cd client
npm run dev
```

## API Endpoints

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile (protected)

## Project Structure

```
├── server/                 # Backend application
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── dao/           # Data access objects
│   │   ├── services/      # Business logic
│   │   └── config/        # Database configuration
│   └── package.json
├── client/                # Frontend application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context
│   │   └── api/          # API service functions
│   └── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.