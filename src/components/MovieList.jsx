import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({vod_movie}) => {
  return (
    <div className="bg-contain " style={{backgroundImage:"url(https://images.pexels.com/photos/4722571/pexels-photo-4722571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"}}>
    <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 ">
      {vod_movie.map((item) => (
        <MovieItem item={item} />
      ))}
    </div>
    </div>
  );
};

export default MovieList;
