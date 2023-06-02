const express = require("express");
const app = express();
const testApi = require('./routes/testRoutes.js')
const dotenv = require('dotenv').config();
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require("./config/db.js");
const register = require("./routes/authRoutes.js")
const authRoutes = require("./routes/authRoutes")

// mongo database
connectDB();

// middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// routes
const PORT = process.env.PORT || 4001;
app.use('/', testApi)
app.use('/api/v1/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} in ${process.env.MODE}`.bgCyan.white)
})