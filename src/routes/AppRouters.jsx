import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import MovieInfo from '../components/MovieInfo';
import Layout from '../layout/Layout';
import NotFound40 from '../layout/NotFound404';



const AppRouters = () => {
  return (
   <Router>
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/search' element={<MovieInfo/>}/>
        
        </Route>
        <Route path='*' element={<NotFound40/>}/>
    </Routes>
   </Router>
  )
}

export default AppRouters