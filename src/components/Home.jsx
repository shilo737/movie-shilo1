import React from 'react'
import MoviesApi from './MoviesApi';
import Years from './Years';

const Home = () => {
  return (
    <div className="bg-local">
      <div className="container mx-auto">
        <Years/>
        <MoviesApi/>
        </div>
   </div>
    
  )
}

export default Home

// style={{backgroundImage: `url("https://i.ytimg.com/vi/oeknLqxExk4/maxresdefault.jpg")`,}