import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Acceuil from './pages/Acceuil';
import Favoris from './pages/Favoris';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="*" element={<h1>Not found</h1>} />
        <Route path='/favoris' element={<Favoris />} />
      </Routes>
    </Router>
  );
}

export default App;