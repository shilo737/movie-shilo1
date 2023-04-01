import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Home = () => {

const[movie,setMovie]=useState([])
const {searchQ} =useParams()

  const doApi = async () =>{
    const {data} = await axios.get(` http://www.omdbapi.com/?s=bank&apikey=8434eb59`)
    console.log(data.Search);
    setMovie(data.Search)

  }
  useEffect(()=>{
    doApi()
  },[])


  return (
    <div>
      <div className="">hello</div>
      {movie.map((item,i)=>(
        <div key={i} className="">
          <img src={item.Poster} alt="" />
          <p>{item.Poster}</p>
         
        </div>
      ))}

        {/* <VodStrip/> */}
        {/* <VodInput/> */}
        {/* <VodList vod_arr={arr}/> */}
    </div>
  )
}

export default Home