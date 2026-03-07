const logger = require('../utils/logger');


const errorHandler = async(error, req, res, next)=>{
    const statusCode = error.statusCode || 500;
    logger.error(error.message);
    res.status(statusCode).json({message: error.message || 'Internal server error'})
}

module.exports = errorHandler;