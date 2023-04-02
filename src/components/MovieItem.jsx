import React from 'react'
import { useNavigate } from 'react-router-dom';

const MovieItem = ({item}) => {
    const navigate = useNavigate()
    
  return (
    <div className='shadow-2xl'>
        <img src={item.Poster} alt=""/>
        <p>{item.Title}</p>
        <button className='btn shadow-lg shadow-indigo-500/40' onClick={()=> navigate(`/info/${item.imdbID}`)}>Mote info</button>


    </div>
  )
}

export default MovieItem