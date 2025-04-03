const mongoose = require("mongoose")
const Movies = new mongoose.Schema({
    name : {type : String },
    description :{type : String},
    poster :{type : String},
    trailer :{type : String},
    rating :{type : String},
    releaseDate :{type : String}
})

const Collection = mongoose.model("Movies",Movies)
module.exports= Collection;