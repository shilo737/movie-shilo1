import React from 'react'
import { Outlet } from 'react-router-dom';
import CarouselImg from '../components/CarouselImg';
import Header from '../components/Header';

const Layout = () => {
  return (
    <div>
        <CarouselImg/>
        <Outlet/>
    </div>
  )
}

export default Layout