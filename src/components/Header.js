import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Your Name</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;