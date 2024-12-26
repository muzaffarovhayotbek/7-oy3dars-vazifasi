// Home.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <h1 className="title">Welcome to the Home Page</h1>
      <ul>
        <li className="li">
          <NavLink to="/countdown">2 -masalaga o'tish</NavLink>
        </li>
        <li>
          <NavLink to="/local">3-masalaga o'tish</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Home;
