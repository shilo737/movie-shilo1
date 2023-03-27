import React from 'react'
import CarouselImg from './CarouselImg';
import MoviesApi from './MoviesApi';
import Years from './Years';

const Home = () => {
  return (
    <div>
    <div className="">
      <CarouselImg/>
        <Years/>
        <MoviesApi/>
   </div>
    </div>
  )
}

export default Home