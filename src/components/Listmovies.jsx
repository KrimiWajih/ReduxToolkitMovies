import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletemovie } from "../redux/action";
import { Modal } from "./Modal";
import { deleteMovie, getMovies } from "../redux/MoviesSlice";

export const Listmovies = () => {
  const dispatch = useDispatch();
  
  // Use Redux state directly instead of using useState
  const { Movies, Loading , error } = useSelector((state) => state.moviesdata);

  useEffect(() => {
    // Fetch movies when component mounts
    dispatch(getMovies());
  }, [dispatch]);

  const handledelete = (id) => {
    console.log(id);
    dispatch(deleteMovie(id));
  };

  const buttonStyle = {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "450px",
    width: "30%",
    margin: "20px auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "#007bff" }}>Movies List</h2>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {Loading ? (
          <p>Loading movies...</p>
        ) : (
          Movies.map((el) => (
            <div key={el._id} style={containerStyle}>
              <img
                src={el.poster}
                alt=""
                style={{ width: "100%", height: "30%" }}
              />
              <p style={{ width: "100%", height: "1%" }}>{el.name} </p>
              <p style={{ width: "100%", height: "10%" }}>{el.description}</p>
              <p style={{ width: "100%", height: "1%" }}> {el.releaseDate}</p>
              <p style={{ width: "100%", height: "1%" }}>{el.rating}</p>
              <iframe
                title="movie"
                style={{
                  width: "100%",
                  height: "40%",
                }}
                src={el.trailer}
                allowFullScreen
              ></iframe>
              <div>
                <Modal movie={el} />
                <button
                  style={{ ...buttonStyle, backgroundColor: "red" }}
                  onClick={() => handledelete(el._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
