import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './About';
import Writeup from './Writeup';
import Video from './Video';
import Gallery from './Gallery';

export default function Main(prop) {
  return (
    <Routes>
      <Route exact path='/' element={<About mode={prop.mode}/>}></Route>
      <Route exact path='/Writeup' element={<Writeup/>}></Route>
      <Route exact path='/Video' element={<Video/>}></Route>
      <Route exact path='/Gallery' element={<Gallery/>}></Route>
    </Routes>
  );
}
