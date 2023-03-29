import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Years = () => {
  const [searchInput, setSearchInput] = useState("");
  const [movie, setMovie] = useState([]);
  const{imdbID}= useParams()
  const movieInput = async () => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${searchInput}&apikey=1a336721`
    );
    setMovie(data.Search);
  };

  useEffect(() => {
    movieInput();
  }, [searchInput]);

  return (
    <div>
      <input
        value={searchInput}
        type="search"
        placeholder="Type here"
        className="input input-bordered input-error w-full max-w-xs"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {movie &&
        movie.map((m) => (
          <div key={m.imdbID}>
            <h3>{m.Title}</h3>
            <img src={m.Poster} alt={m.Title} />
          </div>
        ))}
    </div>
  );
};

export default Years;
