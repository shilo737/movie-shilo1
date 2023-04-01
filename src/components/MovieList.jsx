import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({vod_movie}) => {
  return (
    <div>
      {vod_movie.map((item) => (
        <MovieItem item={item} />
      ))}
    </div>
  );
};

export default MovieList;
