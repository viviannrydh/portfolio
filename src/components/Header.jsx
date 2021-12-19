import React from 'react';
import logo from '../images/selfie.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-wrapper">
      <img src={logo} alt="logo" className="logo"/>
      <div className="links-wrapper">
        <a href="#aboutme" className="link">About me</a>
        <a href="#projects" className="link">Projects</a>
        <span className="link">Education</span>
      </div>
    </div>
  )
}

export default Header
