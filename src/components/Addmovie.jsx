import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ADDMOVIE } from '../redux/actiotype';
import { addmovie } from '../redux/action';
import { addMovie } from '../redux/MoviesSlice';

export const Addmovie = () => {

    const formStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        background: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      };
    
      const labelStyle = {
        fontWeight: "bold",
        marginBottom: "5px",
      };
    
      const inputStyle = {
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "14px",
        transition: "border-color 0.3s ease-in-out",
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



    const nameRef = useRef("");
    const descriptionRef = useRef("");
    const posterRef = useRef("");
    const ratingRef = useRef("");
    const trailerRef = useRef("");
    const releasedateRef = useRef("")
    


const dispatch = useDispatch()
const {Loading } = useSelector(state => state.moviesdata)
 
    const handleadd =(e) =>{
        e.preventDefault()
        const movie = {
            id : Math.random(),
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            poster: posterRef.current.value,
            rating: ratingRef.current.value,
            trailer: trailerRef.current.value,
            releaseDate : releasedateRef.current.value
        }
        console.log(movie)
        dispatch(addMovie(movie))
    }

   
  return (
    <div>
    <form  style={formStyle} onSubmit={handleadd}>
      <div>
        <label style={labelStyle}>Name:</label>
        <input type="text" ref={nameRef} placeholder="Enter name" style={inputStyle} required />
      </div>
      <div>
        <label style={labelStyle}>Description:</label>
        <input type="text" ref={descriptionRef} placeholder="Enter description" style={inputStyle} required />
      </div>
      <div>
        <label style={labelStyle}>Poster:</label>
        <input type="text" ref={posterRef} placeholder="Enter poster URL" style={inputStyle} required />
      </div>
      <div>
        <label style={labelStyle}>Rating:</label>
        <input type="text" ref={ratingRef} placeholder="Enter rating" style={inputStyle} required />
      </div>
      <div>
        <label style={labelStyle}>Trailer URL:</label>
        <input type="text" ref={trailerRef} placeholder="Enter trailer URL" style={inputStyle} required />
      </div>
      <div>
        <label style={labelStyle}>Release Date</label>
        <input type="text" ref={releasedateRef} placeholder="Enter trailer URL" style={inputStyle} required />
      </div>
     {Loading===true ? <button type="submit" disabled style={buttonStyle}>Add Movie</button> : <button type="submit"  style={buttonStyle}>Add Movie</button>} 
    </form>
  </div>
  )
}
