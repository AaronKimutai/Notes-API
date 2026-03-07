require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const userRoutes = require('./routes/userRoutes');
const notesRoutes = require('./routes/notesRoutes');
const morgan =require('morgan');
const logger = require('./utils/logger');
const PORT = process.env.PORT || 5000;
const app = express();
connectDB();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/users', userRoutes);
app.use('/api/notes', notesRoutes);
app.get('/', (req, res)=>{
    res.send('Server running');
})

app.use(errorHandler);

app.listen(PORT, ()=>{
    logger.info(`Server running on port ${PORT}`);
    // console.log(`Server running on port ${PORT}`);
});