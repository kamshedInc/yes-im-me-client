/* ------------ main imports ------------ */
import React, { useEffect, useState } from 'react'
import Header from '../howItWorks/header/HowItWorksHeader'


/* ------------ other imports ------------ */
import { uesSpring , animated } from 'react-spring/renderprops'
import Face from './faceIcon'
import DL from './driverLicense'
import AgeEstimation from './ageEstimation'


/* ------------ styles ------------ */
import './Features.css'

const features = [
    {
        src: <Face />,
        title: "Facial Verification",
        info:   `Enim eu ea occaecat reprehenderit officia do quis 
                cupidatat commodo duis. Reprehenderit consequat 
                minim ut aliqua exercitation elit consequat 
                voluptate ipsum consequat.`
    },
    {
        src:    <DL />,
        title: "Drivers License Verification",
        info:   `Ad velit ad velit elit irure deserunt duis 
                Lorem do officia tempor. Occaecat culpa 
                pariatur dolore cupidatat aliqua aliqua 
                amet labore esse esse.`
    },
    {
        src: <AgeEstimation />,
        title: "Age Estimation",
        info:   `Minim ea non dolor proident mollit ea ad 
                veniam excepteur officia. Aute exercitation 
                consectetur sunt deserunt aliqua amet 
                veniam quis consectetur id.`
    }
]


export default function Features() {

    const [ feature, setFeature ] = useState(features[0])

    
    
    /* ---------- intersection observer ---------- */
    useEffect(() => {
        

        /* ---------- observer variables and options ---------- */

        const articlesToAnimate = document.querySelectorAll(".featureArticle")  // to be animated
        const aritcleOptions = { threshold: 0.3 }                               // options


        /* ---------- observers ---------- */                                                
        
        const articleObserver = new IntersectionObserver((entry, observer) => {  // the observer
            for(let i = 0; i < entry.length; ++i) {                              // loop through all observed
                if (!entry[i].isIntersecting) return
                entry[i].target.classList.add("show")                            // will trigger fade animation   
            }
        }, aritcleOptions)






        /* ---------- observer triggers ---------- */ 

        for(let i = 0; i < articlesToAnimate.length; ++i) {
            articleObserver.observe(articlesToAnimate[i])
        }

        
    })

    function displayFeature(e) {
        setFeature(features[e.currentTarget.dataset.index])
    }


    return (
        <section id="features-section">
            <div style={{ position: "relative", height: "60vh" }}>
                <img className="featureImage faceRecognition"/>
            </div>
            <div className="featuresContainer">
                <Header />
                <div className="floatingFeaturesContainer">
                
                    {features.map((feauture, i) => (

                        <animated.div key={i} data-index={i} onClick={e => displayFeature(e)} className="featureArticle">
                            <div className="featureImgContainer">
                                {feauture.src}
                            </div>
                            <div id="feature-info" className="featureInfoContainer">
                                <div className="featureTitleContainer">
                                  <header className="featureInfoTitle">{feauture.title}</header>
                                </div>
                                <article>
                                    <p className="featureInfoText">
                                        {feature.info}
                                    </p>
                                </article>
                            </div>
                            <div className="featureShadow"></div>
                        </animated.div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}


/* 
<header className="featuresHeader">Features</header>
                <section className="featureInfoSection">
                    <article className="featureInfo">
                        <h3>{feature.title}</h3>
                        <p>{feature.info}</p>
                    </article>
                </section>
                <div className="floatingFeaturesContainer">
                    
                    {features.map((feauture, i) => (

                        <animated.div key={i} data-index={i} onClick={e => displayFeature(e)} className="featureArticle">
                            <div className="featureImgContainer">
                                <img className="featureImg" src={feauture.src} />
                            </div>
                            <div id="feature-info" className="featureInfoContainer">
                                <div className="featureTitleContainer">
                                  <header className="featureInfoTitle">{feauture.title}</header>
                                </div>
                            </div>
                        </animated.div>
                        ))
                    }
                </div>
*/