import React from 'react';
import { useState } from 'react';
import Hamburger from './Hamburger';
import './Header.css';
import Summary from './Summary';

function Header() {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => { 
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <div className='header'>
      <div className="header__logo">Megha</div>
      <div className="header__navbar">
        <div className={hamburgerOpen ? 'header__hamburgeropen':'header__hamburger'} onClick={toggleHamburger}>
        < Hamburger />
      </div>
      <div className="header__nav" id='navigation'>
          {window.innerWidth > 940 || hamburgerOpen? < Summary />:''}    
      </div>
      </div>
    </div>
  )
}

export default Header
