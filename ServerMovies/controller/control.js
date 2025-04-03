const Movies = require("../models/MoviesSchema");

exports.getMovies = async (req, res) => {
  try {
    const MoviesFound = await Movies.find();
    if (!MoviesFound) {
      return res.status(500).send({ Msg: "Failed to Load" });
    } else {
      res
        .status(200)
        .send({ Msg: "Loaded Successfully", MoviesList: MoviesFound });
    }
  } catch (error) {
    res.status(500).send({ Msg: "Server Error", error });
  }
};

exports.addMovie = async (req, res) => {
  try {
    const MovieFound = req.body;
    const NewMovie = await Movies(MovieFound);
    await NewMovie.save();
    res.status(200).send({ Msg: "Movie added Successfully" });
  } catch (error) {
    res.status(500).send({ Msg: "Failed to add movie ", error: error.message });
  }
};

exports.getOneMovie = async (req, res) => {
  const ID = req.body.id;
  try {
    const MovieFound = await Movies.findById(ID);
    if (!MovieFound) {
      return res.status(500).send({ Msg: "Movie Not Found" });
    } else {
      res.status(200).send({ Msg: "Movie Found", Movie: MovieFound });
    }
  } catch (error) {
    res.status(500).send({ Msg: "Server Error", error });
  }
};

exports.deleteOneMovie = async (req, res) => {
  const ID = req.params.id;
  try {
    const MovieFound = await Movies.findByIdAndDelete(ID);
    res
      .status(200)
      .send({ Msg: "Movie Deleted Successfully", Movie: MovieFound });
  } catch (error) {
    res.status(500).send({ Msg: "Server Error", error });
  }
};

exports.editOneMovie = async (req,res) =>{
    const ID = req.params.id
    try {
        const MovieFound = await Movies.findByIdAndUpdate(ID , {...req.body} ,{new : true})
       res.status(200).send({ Msg: "Movie Updated Successfully", Movie: MovieFound });
    } catch (error) {
        res.status(500).send({ Msg: "Server Error",error : error.message});
    }
}