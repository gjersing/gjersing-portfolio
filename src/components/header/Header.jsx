import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import MeTransparent from '../../assets/meTransparent.png'

const Header = () => {
  return(
    <header>
      <div className="container header__container">
        <h5>Hello! I am</h5>
        <h1>
        <img src={MeTransparent} alt="me" className='me' align='left'/>
        Christopher Gjersing
        </h1>
        <h4 className="text-bright">Fullstack Software Engineer and Accessibility Advocate</h4>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
