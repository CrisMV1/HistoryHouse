
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './principal/Footer';
import Navbar from './principal/Navbar';
import Inicio from './principal/Inicio';
import Apages from './Apages'


import { useState } from 'react';





function App() {

  
 

  return (
    <Router>
      <div className="App-container">
        <Navbar />
        
      
        <div class="content">
          
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Apages" element={<Apages />} />
            <Route path="*" element={<Inicio />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
