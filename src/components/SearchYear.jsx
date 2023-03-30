import React, { useState } from "react";
import { useParams } from "react-router-dom";

const SearchYear = () => {
const{years}=useParams()
const[year,setYear]= useState([])

const movieYear = async () => {
    const URL = years
      ? `https://www.omdbapi.com/?s=bank&y=${years}apikey=1a336721`
      : `https://www.omdbapi.com/?s=bank&apikey=1a336721`;
    const { data } = await axios.get(URL);
    console.log(data.Search.year);
}
const handelYear =(e)=>{
if (option.value == value) {
    
}
}
  return (
    <div>
      <select className="select w-full max-w-xs">
        <font></font>
        <option disabled selected>
        Search movie by year</option>
        <option option="2020">2020</option>
        <option option="2010">2010</option>
        <option option="2000">2000</option>
        <option option="1990">1990</option>
        <option option="1980">1980</option>
        <option value="1970">1970</option>
        <option value="1960">1960</option>
        <option value="1950">1950</option>
      </select>
    </div>
  );
};

export default SearchYear;
