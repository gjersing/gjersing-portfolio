import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import MeTransparent from '../../assets/meTransparent.png'
import Clover from '../../assets/cloverTransparent.png'

const Header = () => {
  return(
    <header>
      <div className="container header__container">
        <h5>Hello! I am</h5>
        <h1>
        <img src={MeTransparent} alt="me" className='me portrait' align='left'/>
        Christopher Gjersing
        <img src={Clover} alt="Clover" className='clover portrait' align='right'/>
        </h1>
        <h5 className="text-bright">Fullstack Software Engineer</h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll-down">Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
