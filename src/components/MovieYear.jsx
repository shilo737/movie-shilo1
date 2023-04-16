import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";


const MovieYear = () => {
  const [item, setItem] = useState([]);
  const {year} = useParams()

  const doApi = async () => {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?s=bank&y=2021&apikey=8434eb59`
    );
    setItem(data);
    console.log(data);
    const filters = () =>{
      const mewP = data.filter((items)=> items.Year === year)
      console.log(mewP);
    }
   
  };

  useEffect(() => {
    doApi();
  }, []);
  return (
    <div className="">
      <img src={item.Poster} alt="" />
     <p>{item.Year}</p>
     <p>{item.Title}</p>
    </div>
  );
};

export default MovieYear;
