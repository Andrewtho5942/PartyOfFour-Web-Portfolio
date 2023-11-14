import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './About';


const Main = () => {
  return (
    <Routes>
      <Route exact path='/' element={<About/>}></Route>
      
    </Routes>
  );
}

export default Main;

/*
<Route exact path='/Conclusion' element={<Conclusion/>}></Route>
<Route exact path='/Insights' element={<Insights/>}></Route>
<Route exact path='/Process' element={<Process/>}></Route>
*/