import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';

import MoviesApi from '../components/MoviesApi';
import SearchYear from '../components/SearchYear';
import Layout from '../layout/Layout';
import NotFound40 from '../layout/NotFound404';



const AppRouters = () => {
  return (
   <Router>
    <Routes>

        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/Search/:searchQ' element={<MoviesApi/>}/>
        <Route path='/Search/:searchQ/:yearQ' element={<SearchYear/>}/>
  
        </Route>

        <Route path='*' element={<NotFound40/>}/>
    </Routes>
   </Router>
  )
}

export default AppRouters