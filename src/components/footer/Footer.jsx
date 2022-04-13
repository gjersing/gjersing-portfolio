import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return(
    <footer>
      <a href="#" className='footer__logo'>GJERSING</a>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/gjersing/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/gjersing' target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href='https://twitter.com/csgjersing' target="_blank" rel="noreferrer"><FaTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small className='text-bright'>&copy; Christopher Gjersing 2022</small>
      </div>
    </footer>
  );
}

export default Footer;
