
import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import OurFleet from './pages/OurFleet'
import Services from './pages/Services';
import Auction from './pages/Auction';
import Contact from './pages/Contact';
import Reserve from './pages/Reserve';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/OurFleet' element={<OurFleet />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Auction' element={<Auction />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Reserve' element={<Reserve />} />
      </Routes>
    </>
  );
}

export default App;
