import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Contact';
import Service from './components/Service';

function App() {

  return (
    <>
 
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/service' element={<Service/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;