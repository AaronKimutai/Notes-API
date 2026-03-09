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
        const user = await User.findById(verifyToken.userID);
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        req.userID = user._id;
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = authMiddleware;