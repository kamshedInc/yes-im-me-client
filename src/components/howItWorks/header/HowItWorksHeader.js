import React, { useEffect } from "react"



import anime from 'animejs/lib/anime.es.js'



import "./HowItWorksHeader.css"


export default function HowItWorksHeader() {
    let headerDisplayed = false


    useEffect(() => {

    // header animation
    const textWrapper = document.querySelector('.ml14 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

    function animateHeader() {
        
        anime.timeline({loop: false})
        .add({
            targets: '.ml14 .line',
            scaleX: [0,1],
            opacity: [0.5,1],
            easing: "easeInOutExpo",
            duration: 300
        })
        .add({
            targets: '.ml14 .line',
            translateX: ['0%', '-100%'],
            opacity: [1,0.5],
            easing: "easeInOutExpo",
            duration: 300,
        })
        .add({
            targets: '.ml14 .letter',
            opacity: [0,1],
            translateY: [-40,0],
            translateZ: 0,
            scaleX: [0.3, 1],
            easing: "easeOutExpo",
            duration: 300,
            delay: (el, i) => 150 + 25 * i,
        }, '-=1000')
    }


    const headerToAnimate = document.querySelector("#header")

    const headerObserver = new IntersectionObserver((entry, observer) => {  // the observer
        if (!entry[0].isIntersecting && headerDisplayed) return
        //setHeaderDisplayed(true)
        else if (entry[0].isIntersecting && !headerDisplayed) {
            document.getElementById("how-it-works-header").style.opacity = 1
            animateHeader()
            headerDisplayed = true
        }
    }, { threshold: 1 })

    headerObserver.observe(headerToAnimate)

    })
    

    return (
        <div id="how-it-works-header" className="howItWorksHeader">
                {/* <Title id="features-title" className="featuresTitle"/> */}
                <h3 id="header" class="ml14">
                  <span className="text-wrapper" style={{overflow: "hidden"}}>
                    <span id="letters" className="letters">How does “Yes I’m Me” Work?</span>
                    <span className="line"></span>
                  </span>
                </h3>
            </div>
    )
}