import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { editmovie } from '../redux/action';
import { editMovie } from '../redux/MoviesSlice';

export const Modal = ({movie}) => {
      const [editstate , setedit] = useState(false)
const dispatch = useDispatch()
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

   
  const handleedit = (e,id) =>{
    e.preventDefault()
    const data = {
        id : id,
        name: nameRef.current.value,
        description: descriptionRef.current.value,
        poster: posterRef.current.value,
        rating: ratingRef.current.value,
        trailer: trailerRef.current.value,
        releaseDate : releasedateRef.current.value
    }
    dispatch(editMovie({id, newmovie: data}))
   setedit(false)
  }


 

  return (
    <div>
        <button onClick={()=>setedit(!editstate)}  style={{...buttonStyle,backgroundColor : "grey"}}>Edit</button>
        
     { editstate &&  <form  style={formStyle} onSubmit={(e)=>handleedit(e,movie._id)} >
    <div>
      <label style={labelStyle}>Name:</label>
      <input type="text" ref={nameRef} defaultValue={movie.name} placeholder="Enter name" style={inputStyle} required />
    </div>
    <div>
      <label style={labelStyle}>Description:</label>
      <input type="text" ref={descriptionRef} defaultValue={movie.description} placeholder="Enter description" style={inputStyle} required />
    </div>
    <div>
      <label style={labelStyle}>Poster:</label>
      <input type="text" ref={posterRef} defaultValue={movie.poster} placeholder="Enter poster URL" style={inputStyle} required />
    </div>
    <div>
      <label style={labelStyle}>Rating:</label>
      <input type="text" ref={ratingRef} defaultValue={movie.rating} placeholder="Enter rating" style={inputStyle} required />
    </div>
    <div>
      <label style={labelStyle}>Trailer URL:</label>
      <input type="text" ref={trailerRef}  defaultValue={movie.trailer} placeholder="Enter trailer URL" style={inputStyle} required />
    </div>
    <div>
      <label style={labelStyle}>Release Date</label>
      <input type="text" ref={releasedateRef}  defaultValue={movie.releaseDate} placeholder="Enter trailer URL" style={inputStyle} required />
    </div>
    <button type="submit" style={buttonStyle}>Edit Movie</button>
  </form>}</div>
  )
}
