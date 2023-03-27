import axios from "axios";
import React, { useEffect, useState } from "react";

const MoviesApi = () => {
  const [movie, setMovie] = useState([]);

  const movieData = async () => {
    const { data } = await axios.get(
      "https://www.omdbapi.com/?s=bank&apikey=1a336721"
    );
    console.log(data.Search);
    setMovie(data.Search);
  };

  useEffect(() => {
    movieData();
}, []);

 return(

    <div className="">
    {movie.map((item,i) =>(
     <div className="" key={i}>
    <img src={item.Poster} alt="img" />
    <p>{item.Title}</p>
    <p>{item.Year}</p>
     </div>
    )
)}
    </div>



 )  
};

export default MoviesApi;
