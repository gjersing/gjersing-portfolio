import React from 'react'
import Header from './components/header/Header.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Experience from './components/experience/Experience.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App
