import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:5000/";

const initialState = {
  Movies: [],
  Loading: false,
  error: null,
};

export const getMovies = createAsyncThunk("Movies/getAll", async () => {
  const response = await axios.get(apiUrl+"movieslist");
  console.log(response.data);
  return response.data.MoviesList;
});

export const addMovie = createAsyncThunk("Movies/addNew", async (Movie,thunkAPI) => {
  const response = await axios.post(apiUrl+"addmovie", Movie);
  thunkAPI.dispatch(getMovies());
  console.log(response);
});

export const deleteMovie = createAsyncThunk("Movies/delete" , async (id,thunkAPI) =>{
    const response = await axios.delete(`${apiUrl}deleteonemovie/${id}`)
    thunkAPI.dispatch(getMovies())
    console.log(response);
})

export const editMovie = createAsyncThunk("Movies/editMovie",async ({id,newmovie},thunkAPI)=>{ 
    try {
        const response = await axios.put(`${apiUrl}editmovie/${id}`,newmovie)
        thunkAPI.dispatch(getMovies())
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error.response.data.Msg)

    }
})


export const MoviesSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state, action) => {
        state.Loading = true;
        console.log(action);
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.Loading = false;
        state.error = null;
        state.Movies = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.Loading = false;
        state.error = action.error.message;
      })
      .addCase(addMovie.pending, (state, action) => {
        state.Loading = true;
        console.log(action);
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.Loading = true;
        console.log(action);
      })
      .addCase(addMovie.rejected, (state, action) => {
        state.Loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteMovie.pending, (state, action) => {
        state.Loading = true;
        console.log(action);
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.Loading = true;
        console.log(action);
      })
      .addCase(deleteMovie.rejected, (state, action) => {
        state.Loading = false;
        state.error = action.error.message;
      })
  },
});

export const MoviesReducer = MoviesSlice.reducer;
