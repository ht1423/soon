import React from 'react';
import Landing from './pages/Landing';
import CreateNFT from './pages/CreateNFT';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/create' element={<CreateNFT/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
