import axios from 'axios';
import React, { useEffect, useState } from "react";
import {useSearchParams } from "react-router-dom";
import MovieList from './MovieList';
import MovieInput from './MovieInput';
import CarouselImg from './CarouselImg';
import Exsemple from '../../Exsemple';

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [query] = useSearchParams();

  const doApi = async (searchQ) => {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?s=${searchQ}&apikey=8434eb59`
    );
    console.log(data.Search);
    setMovie(data.Search);
  };
  useEffect(() => {
    let searchQ = query.get("s") || "bank";
    doApi(searchQ);
  },[query]);

  return (
    <div className=''>
      <Exsemple/>
      <CarouselImg/>
      
      <MovieList vod_movie={movie}/>
    </div>
  );
};

export default Home;

