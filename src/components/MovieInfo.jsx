import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TbArrowBack } from "react-icons/tb";
import { PacmanLoader } from "react-spinners";
const MovieInfo = () => {
  const params = useParams();
  const [item, setItem] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    doApi();
  }, []);
  const doApi = async () => {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?i=${params.id}&apikey=8434eb59`
    );
    setItem(data);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="">
      {isLoading ? (
        <div className="flex justify-center items-center my-60 ">
          <PacmanLoader color="#36d7b7" />
        </div>
      ) : (
        <div className="h-screen bg-gradient-to-br from-pink-300 to-indigo-700 flex justify-center items-center w-full">
          <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-indigo-500 shadow-3xl shadow-red-500/50 w-[90%]">
            <figure>
              <img src={item.Poster} alt="Album" />
            </figure>
            <div className="card-body italic font-serif font-bold">
              <h2 className="card-title text-4xl">{item.Title}</h2>
              <ul>
                <li className=" text-2xl">Year : {item.Year}</li>
                <li className="mt-3">{item.Plot}</li>
                <li className="mt-2">Genre : {item.Genre}</li>
                <li className="mt-2">Actors : {item.Actors}</li>
                <li className="mt-3">{item.imdbRating}</li>
                <li></li>
              </ul>
              <div className="card-actions justify-end">
                <button onClick={() => navigate(-1)} className=" mt-32">
                  <TbArrowBack className=" text-3xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieInfo;
