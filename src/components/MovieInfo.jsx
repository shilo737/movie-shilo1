import axios from "axios";
import { RatingStar } from "flowbite-react/lib/esm/components/Rating/RatingStar";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useNavigate, useParams } from "react-router-dom";

const MovieInfo = () => {
  const params = useParams();
  const [item, setItem] = useState([]);
  const navigate = useNavigate();
  const[rating, setRating]=useState()

  useEffect(() => {
    doApi();
  }, []);
  const doApi = async () =>{
    const {data} = await axios.get(`http://www.omdbapi.com/?i=${params["id"]}&apikey=8434eb59`) 
    console.log(data);
    setItem(data)

}
  return( 
    <div className="bg-repeat"  style={{backgroundImage:"url(https://img.favpng.com/9/4/7/popcorn-discount-theater-film-cinema-png-favpng-q7dPketq8ekzYwnZ9Txc9hNpX.jpg)"}}>
      <div className="flex justify-center py-64">
        <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-indigo-500 shadow-3xl shadow-red-500/50">
  <figure><img src={item.Poster} alt="Album"/></figure>
  <div className="card-body italic">
    <h2 className="card-title text-4xl">{item.Title}</h2>
    <ul>
      <li className=" text-2xl">Year : {item.Year}</li>
      <li className="mt-3">{item.Plot}</li>
      <li className="mt-3">{item.imdbRating}</li>
    </ul>
    <div className="card-actions justify-end">
      <button  onClick={()=>navigate(-1)} className="btn btn-primary">Back</button>
    </div>
  </div>
</div>
  </div>
  </div>
  )
};

export default MovieInfo;
