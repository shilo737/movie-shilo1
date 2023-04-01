import React from 'react'
import { useNavigate } from 'react-router-dom';

const MovieItem = ({item}) => {
    const navigate = useNavigate()
    
  return (
    <div>
        <img src={item.Poster} alt=""/>
        <p>{item.Title}</p>
        <button onClick={()=> navigate(`/info/${item.imdbID}`)}>Mote info</button>


    </div>
  )
}

export default MovieItem