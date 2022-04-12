import React from 'react'
import './navbar.css'
import {FiHome} from 'react-icons/fi'
import {BiMessageDetail, BiBook} from 'react-icons/bi'
import {RiComputerLine} from 'react-icons/ri'
import {useState} from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');
  const sections = document.querySelectorAll("section");

  window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop-150) {
        current = section.getAttribute("id"); }
    });
    setActiveNav('#' + current);
  };

  return(
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FiHome /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#portfolio"  onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiComputerLine /></a>
      <a href="#contact"  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail /></a>
    </nav>
  );
}

export default Navbar;
