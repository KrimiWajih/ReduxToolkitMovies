const express = require("express")
const Movies = require("../models/MoviesSchema")
const { getMovies, addMovie, getOneMovie, deleteOneMovie, editOneMovie } = require("../controller/control")
const MRouter = express.Router()

MRouter.get("/movieslist" , getMovies)
MRouter.post("/addmovie",addMovie)
MRouter.get("/getonemovie",getOneMovie)
MRouter.delete("/deleteonemovie/:id",deleteOneMovie)
MRouter.put("/editmovie/:id" ,editOneMovie)
module.exports = MRouter