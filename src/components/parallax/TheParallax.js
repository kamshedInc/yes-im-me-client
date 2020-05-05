import React, { useEffect } from 'react'


import './TheParallax.css'

export default function TheParallax() {

    useEffect(() => {
        //const header = document.querySelector('#hero-header')
        
        window.addEventListener('scroll', e => {
            const [ backImage, frontImage ] = document.querySelectorAll('#parallax-image-container img')
            //const header = document.querySelector('#hero-header')

    
            const scrolled = window.pageYOffset
            const slowRate = scrolled * -0.25
            const fastRate = scrolled * 1.5
            //const headerRate = scrolled * 0.5
            backImage.style.transform = `translate3d(0px, ${ slowRate }px, 0px)`
            frontImage.style.transform = `translate3d(0px, ${ fastRate }px, 0px)`
            frontImage.style.opacity = 400 / scrolled
            backImage.style.opacity = 100 / scrolled
            
            //header.style.transform = `translate3d(${centerInScreen}px, ${ headerRate }px, 0px)`
        })
        
    })



    return(
        <section style={{ height: "175vh" }} id="parallax-section">

            <div id="parallax-image-container">
                <img id="back-img" style={{ width: "100%" }} src="https://awv3node-homepage.surge.sh/build/assets/stars.svg"/>
                <img id="front-img" style={{ top: "-460px" }} src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"/>
            </div>

            <div id="hero-header">
                <header>
                    <h1>YesImMe</h1>
                    <h5>Some official tagline goes here.</h5>
                </header>
            </div>

        </section>
    )
}