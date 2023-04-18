import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import MovieList from './MovieList';
import CarouselImg from './CarouselImg';
import MovieYear from './MovieYear';
import Select from './Select';



const Home = () => {
  const [movie, setMovie] = useState([]);
  const [query] = useSearchParams();
  const {Year} = useParams()

  const doApi = async (searchQ) => {
    const { data } = await axios.get(
      !Year ?`http://www.omdbapi.com/?s=${searchQ}&apikey=8434eb59`
      :`http://www.omdbapi.com/?s=${searchQ}&y=${Year}apikey=8434eb59`
      
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
      <div className="">
        <Select query={query}/>
      </div>
      {/* <MovieYear searchQ={searchQ}/> */}
      <MovieList vod_movie={movie} idYear={Year}/>
      
      
    </div>
  );
};

export default Home;

