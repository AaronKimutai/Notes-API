const User = require('../models/users');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');

// user registration
const registerUser = async(req, res, next)=>{
    try {
        const {userName, email, password} = req.body;
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({messsage: "User already exists"})
        }
        const user = await User.create({userName, email, password});
        const hash = await bcrypt.hash(password, 10);
        user.password = hash;
        await user.save();
        res.status(201).json({message: "User created successfully"});
    } catch (error) {
        next(error);
    }
}

// user login
const loginUser = async(req, res, next)=>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "Invalid email. If you don't have an account, please register first"});
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            return res.status(400).json({message: "Invalid password. Please try again!"});
        }
        const token = JWT.sign({userID: user._id}, process.env.JWT_SECRETKEY, {expiresIn: '1h'});
        res.status(200).json({message: 'Login successful', token});
    } catch (error) {
        next(error);
    }
}

const getUsers = async(req, res, next)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

// get user
const getUser = async(req, res, next)=>{
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    registerUser, 
    loginUser, 
    getUsers,
    getUser
};
