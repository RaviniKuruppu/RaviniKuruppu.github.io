import React from 'react';
import './Header.css';
import RaviniImage from '../images/Ravini2.png';


function Header() {
  return (
    <header className="header">
      <nav className='nav' >
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#projects">Technologies</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <br></br>
      {/* Container for text and image */}
      <div className="header-content">
      <img src={RaviniImage} alt="Ravini Kuruppu" className="header-image" />
        <div className="header-text">
          <h1>RAVINI KURUPPU</h1>
          <h2>I'm a Full Stack Developer</h2>
          <h3>University of Moratuwa</h3>
        </div>
        
      </div>

    </header>
  );
}

export default Header;
