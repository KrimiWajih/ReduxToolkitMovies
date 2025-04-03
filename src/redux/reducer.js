import { ADDMOVIE, DELETEMOVIE, GETMOVIES } from "./actiotype";

const initialState = {
  movies: [],
  load:true
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETMOVIES:
      return { ...state, movies: payload.MoviesList,load:false}
 
      // case ADDMOVIE:
      //   return { ...state, movies: [...state.movies, payload] };
  
      // case DELETEMOVIE:
      //   return {
      //     ...state,
      //     movies: state.movies.filter((movie) => movie._id !== payload)
      //   };

    default:
      return state;
  }
};
