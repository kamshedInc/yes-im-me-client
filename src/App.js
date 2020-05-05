/* ------------ main imports ------------ */
import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'


/* ------------ route imports ------------ */
import TheNavbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import DemoArea from './components/demo/DemoArea'
import Features from './components/features/Features'
import Contact from './components/contact/ContactForm'
import Footer from './components/footer/Footer'
import HowItWorks from './components/howItWorks/HowItWorks'



/* ------------ style ------------ */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


export default function App() {

 
  useEffect(() => { 
    

  })

    return (
      <div>  
        <Route
          id="navbar"
          path="/"
          component={ TheNavbar }
          />
        <div id="expanding-background" className="expandingBackground">
          <Route
            id="parallax"
            path="/"
            component={ Home }
            />
          {/* <Route
            id="demo"
            path="/"
            component={ DemoArea }
            /> */}
        </div>
        <Route
          id="how-it-works"
          path="/"
          component={ HowItWorks }
          />
        <Route
          id="features"
          path="/"
          component={ Features }
          />
        <Route
          id="contact"
          path="/"
          component={ Contact }
          />
        <Route
          id="footer"
          path="/"
          component={ Footer }
        />
      </div>
    )
}
