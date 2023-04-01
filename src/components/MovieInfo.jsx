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
  return <div>
     <img src={item.Poster} alt="" />
     <button onClick={()=>navigate(-1)}>Back</button>
  </div>;
};

export default MovieInfo;
