const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();

// register a new user
router.post('/register', userController.registerUser);
// login user
router.post('/login', userController.loginUser);

module.exports = router;
