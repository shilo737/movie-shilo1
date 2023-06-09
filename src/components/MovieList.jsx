import React from "react";
import MovieItem from "./MovieItem";
import MovieYear from "./MovieYear";
import {FaRegSadCry} from 'react-icons/fa'

const MovieList = ({ vod_movie,Year }) => {
  return (
    <div
      className="bg-contain "
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/4722571/pexels-photo-4722571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="container flex justify-center mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 ">
        {vod_movie ? (
          vod_movie.map((item, i) => (
            <div key={i}>
              <MovieItem item={item} />
            </div>
          ))
        ) : (
          <h1 className="text-5xl mb-48">No results...<FaRegSadCry/></h1>
        )}
      </div>
    </div>
  );
};

export default MovieList;
