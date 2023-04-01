import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Home = () => {
  const[movie,setMovie]=useState([])
  
  const doApi = async (searchQ) =>{
    let {data} = await axios.get(`https://www.omdbapi.com/?s=${searchQ}&apikey=f2ef2741`)
    console.log(data.Search);
    setMovie(data.Search)
  }
  useEffect(()=>{
    doApi()
  },[])
  
  return (
    <div>   
{movie.map((val,i)=>{
  <div className="">
    <p>{val.Title}</p>
  </div>
})}
    


   </div> 
  )
}

export default Home

