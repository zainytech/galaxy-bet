import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Comp/Home';
// import Stake from './Comp/stake';
import Header from './Comp/Header';
import Footer from './Comp/Footer';
import Stake from './Comp/stake';

function RouteConfig() {
 
  return <>
	<div>
      <BrowserRouter>

        <Routes>
      
        <Route path="/" element={<Home/>} />
        <Route  path="/header" element={<Header/>} />
        <Route  path="/footer" element={<Footer/>} />
        <Route  path="/stake" element={<Stake/>} />

        </Routes>
            
    </BrowserRouter>
        
	</div>
  </>
  }
  
  export default RouteConfig;
