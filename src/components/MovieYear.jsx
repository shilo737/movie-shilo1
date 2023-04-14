import React, { useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import MovieItem from './MovieItem';

const MovieYear = ({item}) => {
   const navigate = useNavigate()
   const years =()=>{
    let val_but = button.value

   }
   console.log(item);
  return (

    <div>
   <ul>
    <li>
       <button value={2020}>2020</button> 
    </li>
    <li>2021</li>
    <li>2022</li>
   </ul>
    </div>
  )
}

export default MovieYear