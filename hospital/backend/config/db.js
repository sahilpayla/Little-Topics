const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to the ${mongoose.connection.host}`.bgGreen.white)
    } catch (err) {
        console.log(`Mongo Db error = ${err.message}`.bgRed.white)
    }
}

module.exports = connectDB;