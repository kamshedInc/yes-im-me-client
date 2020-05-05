import React, { useEffect } from 'react'


import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


import './Navbar.css'


export default function TheNavbar(){

  useEffect(() => {
    const homeSection = document.querySelector('#expanding-background')
    const navbar = document.querySelector('#nav')
    const options = { threshold: 0.1 }
    const showNav = new IntersectionObserver((entry, observer) => {
      if (entry[0].isIntersecting && !navbar.classList.contains('clear')) navbar.classList.add('clear')
      else if (!entry[0].isIntersecting) navbar.classList.remove('clear')
    }, options)
  
    showNav.observe(homeSection)
    
    function hideNavOnScroll(e) {
      if (e.wheelDelta > 0 && !navbar.classList.contains("hide")) return
      else if (e.wheelDelta < 0 && navbar.classList.contains("hide")) return
      else if (e.wheelDelta > 0 && navbar.classList.contains("hide")) navbar.classList.remove("hide")
      else if (e.wheelDelta < 0 && !navbar.classList.contains("hide")) navbar.classList.add("hide")
    }

    window.addEventListener("mousewheel", e => hideNavOnScroll(e))
  })

  

  

    return (
        <>
          <Navbar id="nav" className="clear" style={{ position: "fixed", width: "100%", zIndex: "2000" }}>
            <Navbar.Brand href="#home-section">Navbar</Navbar.Brand>
            <Nav className="nav-links">
              <Nav.Link href="#demo-section"><span>Demo</span></Nav.Link>
              <Nav.Link href="#features-section"><span>Features</span></Nav.Link>
              <Nav.Link href="#contact-form"><span>Contact</span></Nav.Link>
            </Nav>
          </Navbar>
        </>
    )
}