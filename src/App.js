import React from 'react';
import logo from './logo.svg';
import './App.css';
import One from './one';
import  GithubProfileFinder from './two';
import Three from './three';
import Home from './home';
import { Route, Link, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/one' element={<One/>} />
      <Route path='/two' element={< GithubProfileFinder/>}/>
      <Route path='/three' element={<Three/>}/>
      </Routes>
      </BrowserRouter>
    

    </div>
  );
}

export default App;


