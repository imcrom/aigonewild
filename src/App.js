import React from 'react'
import './App.css';
import { Navbar } from './pages/Navbar';
import { Gallery } from './pages/Gallery';
import { Tokenomics } from './pages/Tokenomics';
import { Routes, Route } from 'react-router-dom';
import {GoneWild} from './pages/GoneWild';

const App = () => {
  return (
        <Routes>
                  <Route path='/' element={<><Navbar/><Gallery/><Tokenomics/></>}/>
                  <Route path='/generate' element={<><GoneWild/></>}/>
        </Routes>
  )
}

export default App