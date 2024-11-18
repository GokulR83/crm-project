const mongoose = require("mongoose");


const connectDB = async(database_url) =>{
    try {
        await mongoose.connect(database_url);
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;