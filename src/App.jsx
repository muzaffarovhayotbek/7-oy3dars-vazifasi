// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CountdownTimer from './pages/CountdownTimer';
import Home from './pages/Home';
import Local from './pages/Local';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countdown" element={<CountdownTimer />} />
          <Route path="/local" element={<Local />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
