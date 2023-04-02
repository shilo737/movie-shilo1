import React from 'react'
import { useNavigate } from 'react-router-dom';

const MovieItem = ({item}) => {
    const navigate = useNavigate()
    
  return (
    <div className='shadow-2xlg py-6 '>
      <div className="card w-[250px] shadow-xl shadow-red-500/50 ">
  <figure><img className='rounded-lg transition hover hover:scale-125' src={item.Poster} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title italic">{item.Title}</h2>
    <div className="card-actions justify-end">
      <button onClick={()=> navigate(`/info/${item.imdbID}`)}  className="btn btn-primary shadow-lg shadow-indigo-500/40 opacity-75 transition duration-700 ease-in-out">More</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default MovieItem