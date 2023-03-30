import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchMovie from "./SearchMovie";
import SearchYear from "./SearchYear";

const MoviesApi = () => {
  const [movie, setMovie] = useState([]);
  const { searchQ } = useParams();

  const movieData = async () => {
    const URL = searchQ
      ? `https://www.omdbapi.com/?s=${searchQ}&apikey=1a336721`
      : `https://www.omdbapi.com/?s=bank&apikey=1a336721`;
    const { data } = await axios.get(URL);
    console.log(data.Search);
    setMovie(data.Search);
  };

  useEffect(() => {
    movieData();
  }, [searchQ]);

  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="flex-1 mt-5">
        <SearchYear/>
        </div>

        <div className="flex-none w-80 mt-5">
          <SearchMovie/>
          </div>
        
        
        </div>

      <div className="grid grid-cols-4">
        
        {movie.map((item, i) => (
          <div key={i}>
            <img
              className="scale-75 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded bg-indigo-500  rounded-lg mt-4 hover:scale-90"
              src={item.Poster}
              alt="Movie"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesApi;
