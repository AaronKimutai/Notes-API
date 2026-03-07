const jwt = require('jsonwebtoken');
const User = require('../models/users');

const authMiddleware = async(req, res, next)=>{
    try {
        let token;
        const authHeader = req.headers.authorization;
        if(authHeader && authHeader.startsWith('Bearer')){
            token = authHeader.split(' ')[1];
        }
        else{
            return res.status(401).json({message: 'unauthorized, no token provided'});
        }
        // verify the token
        const verifyToken = jwt.verify(token, process.env.JWT_SECRETKEY);
        // get the user from the token
        req.userID =  verifyToken.userID;
        if(!req.userID){
            return res.status(404).json({message: 'User not found'});
        }
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = authMiddleware;