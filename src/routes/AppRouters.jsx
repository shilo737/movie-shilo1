import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Layout from '../layout/Layout';
import NotFound40 from '../layout/NotFound404';
import MovieInfo from '../components/MovieInfo';
import Footer from '../components/Footer';
import MovieItem from '../components/MovieItem';
import MovieYear from '../components/MovieYear';

const AppRouters = () => {
  return (
   <Router>
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/info/:id" element={<MovieInfo/>}/>
        <Route path='/info/:id/year/:Year' element={<Home/>}/>
        
        </Route>
        <Route path='/*' element={<NotFound40/>}/>
    </Routes>
    <Footer/> 
   </Router>
  )
}
export default AppRouters