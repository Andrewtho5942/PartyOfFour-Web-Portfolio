import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './About';
import Writeup from './Writeup';
import Video from './Video';
import Gallery from './Gallery';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/' element={<About/>}></Route>
      <Route exact path='/Writeup' element={<Writeup/>}></Route>
      <Route exact path='/Video' element={<Video/>}></Route>
      <Route exact path='/Gallery' element={<Gallery/>}></Route>
    </Routes>
  );
}

export default Main;

/*
<Route exact path='/Conclusion' element={<Conclusion/>}></Route>
<Route exact path='/Insights' element={<Insights/>}></Route>
<Route exact path='/Process' element={<Process/>}></Route>
*/