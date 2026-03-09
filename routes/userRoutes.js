const { registerUser, loginUser, getUsers, getUser } = require('../controllers/userController');
const express = require('express');
const router = express.Router();

// register a new user
router.post('/register', registerUser);
// login user
router.post('/login', loginUser);
// get all users
router.get('/', getUsers);
// get user by id
router.get('/:id', getUser);

module.exports = router;
