const express = require('express');
const { signup, login, logout, getProfile } = require('../controllers/authController');
const { authenticate } = require('../services/authMiddleware');

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

// Protected routes
router.get('/profile', authenticate, getProfile);

module.exports = router;