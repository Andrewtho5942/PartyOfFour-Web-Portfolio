import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Paper from './Paper';
import Video from './Video';
import Gallery from './Gallery';
import AboutUs from './AboutUs';

export default function Main(prop) {
  return (
    <Routes>
      <Route exact path='/' element={<Home mode={prop.mode}/>}></Route>
      <Route exact path='/Paper' element={<Paper/>}></Route>
      <Route exact path='/Video' element={<Video/>}></Route>
      <Route exact path='/Gallery' element={<Gallery mode={prop.mode}/>}></Route>
      <Route exact path='/AboutUs' element={<AboutUs/>}></Route>
    </Routes>
  );
}
