import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from './MovieList';
import CarouselImg from './CarouselImg';



const Home = () => {
  const [movie, setMovie] = useState([]);
  const [query] = useSearchParams();

  
  
  const doApi = async (searchQ) => {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?s=${searchQ}&apikey=8434eb59`
    );
    setMovie(data.Search);
  };
  useEffect(() => {
    let searchQ = query.get("s") || "bank";
    doApi(searchQ);
  },[query]);

  return (
    <div className=''>
     
      <CarouselImg/>
      
      <MovieList vod_movie={movie}/>
      
      
    </div>
  );
};

export default Home;

