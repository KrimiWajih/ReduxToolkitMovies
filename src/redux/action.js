// action.js
import axios from "axios";
import { ADDMOVIE, DELETEMOVIE, EDITMOVIE, GETMOVIES } from "./actiotype";

// Get all movies
export const getmovies = () => async (dispatch) => {
    // console.log("Fetching movies...");
    try {
      const response = await axios.get("http://localhost:5000/movieslist");
      console.log("Movies fetched:", response.data);
      dispatch({ type: GETMOVIES, payload: response.data });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

// Add a new movie
export const addmovie = (newmovie) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/addmovie", newmovie);
    console.log("Movie added:", response.data);
    // Dispatch getmovies to refresh the list
    dispatch(getmovies());
  } catch (error) {
    console.error("Error adding movie:", error);
  }
};

// Delete a movie
export const deletemovie = (id) => async (dispatch) => {
    try {
      const response = await axios.delete(`http://localhost:5000/deleteonemovie/${id}`);
      console.log("Movie deleted:", response.data);
   
      dispatch({ type: DELETEMOVIE, payload: id });
    } catch (error) {
      console.error("Error deleting movie:", error);
    
      dispatch(getmovies());
    }
  };

// Edit a movie (synchronous action)
export const editmovie = (id, data) => async (dispatch) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/editmovie/${id}`,
      data
    );
    console.log(response);
    dispatch(getmovies());
  } catch (error) {
    console.log(error);
  }
};