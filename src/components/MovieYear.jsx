import React, { useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import MovieItem from './MovieItem';

const MovieYear = ({item}) => {
   const navigate = useNavigate()
   const {y} = useParams()
   console.log(y);

   console.log(item);
  return (

    <div>
   <ul>
    <li>
       <button onClick={()=>navigate("/year/2020")}>2020</button> 
    </li>
    <li><button onClick={()=>navigate("/year/2021")}>2021</button> </li>
    <li>2022</li>
   </ul>
    </div>
  )
}

export default MovieYear