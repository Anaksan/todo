import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav>
      <ul className="nav">
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to='/todolist'>Todolist</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
