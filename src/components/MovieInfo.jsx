import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieInfo = () => {
  const params = useParams();
  const [item, setItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    doApi();
  }, []);
  const doApi = async () =>{
    const {data} = await axios.get(`http://www.omdbapi.com/?i=${params["id"]}&apikey=8434eb59`) 
    console.log(data);
    setItem(data)

}
  return( 
      <div>
    <div className='flex '>
        <div className='w-1/2 p-10 bg-gradient-to-r from-yellow-100'>
                 <h1 className="mb-16 text-2xl ">{item.Title}</h1>
                <p className='mb-5 text-5xl uppercase tracking-widest'> <span className="text-yellow-400">{item.Year}</span></p>
                <p className="mb-7 text-sm leading-snug text-yellow-400">{item.imdbRating}</p>
                <div>
                    <button onClick={()=>navigate(-1)} className="bg-gradient-to-r from-yellow-300 to-yellow-500 h-11 w-20 rounded-full text-white -m-12">Back</button>
                </div>
        </div>
        <div className="w-1/2">
            <img src={item.Poster} alt="Waiting Image" />
        </div>
    </div>

  </div>
  )
};

export default MovieInfo;
