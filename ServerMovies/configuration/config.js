const mongoose = require("mongoose");
exports.config = async () => {
    try {
        await mongoose.connect("mongodb+srv://Krimiwajih:Krimiwajih1990@softdev.ou3v7.mongodb.net/Movies_DB")
        console.log("Connected to Database Movies_DB")
    } catch (error) {
        console.log("Failed to Connect to Database")
    } 
}