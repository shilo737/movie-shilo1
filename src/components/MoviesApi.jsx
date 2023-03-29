import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const MoviesApi = () => {
const [movie, setMovie] = useState([]);
const [search,setSearch]=useState("bank")

  const movieData = async () => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${search}&apikey=1a336721`
    );
    console.log(data.Search);
    setMovie(data.Search);
  };

useEffect(() => {
    movieData();
},[search]);

 return(
<div className="">
<input type="text" onKeyDown={(e)=>{ if(e == "Enter")
setSearch(e.target.value) }}
 placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
<div className="flex flex-wrap grid grid-cols-3">
{movie.map((item,i) =>(
  <Link to="/search" key={i}><img className=" bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded bg-indigo-500  rounded-lg mt-4" src={item.Poster} alt="Movie"/>
  </Link>
 )

)}

</div>
</div>


 )  
};

export default MoviesApi;
