/* ------------ main imports ------------ */
import React, { useEffect } from 'react'
import HowItWorksHeader from './header/HowItWorksHeader'



/* ------------ other imports ------------ */
import { TimelineLite } from "gsap"
import ScrollMagic from "scrollmagic"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"


/* ------------ styles ------------ */
import "./HowItWorks.css"


export default function HowItWorks() {
    
    ScrollMagicPluginGsap(ScrollMagic, TimelineLite)


    useEffect(() => {
        const headerTween = new TimelineLite()
        const section1Tween1 = new TimelineLite()
        const section1Tween2 = new TimelineLite()
        const section2Tween1 = new TimelineLite()
        const section2Tween2 = new TimelineLite()
        const section2Tween3 = new TimelineLite()



        headerTween
            .to(".ml14", { scale: 0.7, opacity: 0, ease: "power1.easeInOut" })
        

        section1Tween1
            .to(".contentContainer1 .content2", 100, { opacity: 1, ease: "power1.easeInOut"}, "+=10")
            .to(".contentContainer1 .content2", 100, { left: "50vw", ease: "power1.easeInOut"}, "5")
            .to(".contentContainer1 .content1", 100, { right: "-50vw", opacity: 1, ease: "power1.easeInOut"}, "5")
            .to(".contentContainer1 .content1", 100, { opacity: 1, ease: "power1.easeInOut", delay: 15 }, "+=50")
        
            
        section1Tween2
            .to(".socialMediaContainer", 3, { opacity: 1, ease: "power1.ease"})
            .to(".socialMediaContainer", 15, { top: "0vh", translateY: "-35%", ease: "power1.ease" }, "-2.5")

        
        section2Tween1
            .to(".wht", 1500, { width: "40vw", ease: "Power1.ease" }, "350")
            .to(".prime1", 500, { width: "60vw", ease: "Power1.easeOut" }, "-=350")
            .to(".prime1", 500, { boxShadow: "10px 0px 130px 200px #327796", ease: "Power1.easeOut" }, "-=1000")
            .to(".prime1", 500, { boxShadow: "0px 0px 0px 0px #327796", ease: "Power1.easeOut" }, "-=500")
            .to(".contentContainer1", 1, { opacity: 0 })


        section2Tween2
            .to(".contentContainer2 .content1", 250, { opacity: 1, bottom: "0vh", ease: "Power1.easeInOut", delay: 250 })
            .to(".imageContainer2", 2000, { top: "-280vh", delay: 100 })
            .to(".contentContainer2 .content2", 250, { opacity: 1, bottom: "0vh", ease: "Power1.easeInOut" }, "-=1200")
            .to(".prime1", 500, { width: "100vw", ease: "Power1.easeInOut" }, "-=800")
            .to(".contentContainer2", 500, { width: "100vw", ease: "Power1.easeInOut" }, "-=800")
            .to(".wht", 500, { width: "0vw", ease: "Power1.easeInOut" }, "-=800")
            .to(".contentContainer2", 500, { opacity: 0, top: "-30vh", scale: 0.5, ease: "Power1.easeInOut", delay: 500 }, "-=800")
            .to(".prime1", 500, { height: "0vh", ease: "Power1.easeInOut" }, "-=500")

    
        document.addEventListener("scroll", () => {
            const icons = document.querySelectorAll(".socialMediaIcon")
            const observer = new IntersectionObserver(entry => {
                for (let i = 0; i < entry.length; i++) {
                    if (entry[i].intersectionRatio === 1) { 
                        entry[i].target.classList.add("inView") 
                    }
                }
            })
            for (let i = 0; i < icons.length; i++) {
                observer.observe(icons[i])
            }
        })
            


        const controller = new ScrollMagic.Controller()


        // header
        new ScrollMagic.Scene({
            triggerElement: ".howItWorksHeader",
            triggerHook: 0,
            offset: 200,
            duration: "80%"
        })
        .setTween(headerTween)
        .addTo(controller)


        // section1Content
        new ScrollMagic.Scene({
            triggerElement: "#how-it-works-section",
            triggerHook: 0,
            offset: 700, //700
            duration: "200%"
        })
        .setTween(section1Tween1)
        .addTo(controller)
        

        // section1Images
        new ScrollMagic.Scene({
            triggerElement: "#how-it-works-section",
            triggerHook: 0,
            offset: 700,
            duration: "200%"
        })
        .setTween(section1Tween2)
        .addTo(controller)
        .on("end", toggleSection1Out)


        // section2Background
        new ScrollMagic.Scene({
            triggerElement: "#how-it-works-section",
            triggerHook: 0,
            offset: 1700,
            duration: "200%"
        })
        .setTween(section2Tween1)
        .addTo(controller)
        .on("start", toggleSection2In)
        

        // section2Content1
        new ScrollMagic.Scene({
            triggerElement: "#how-it-works-section",
            triggerHook: 0,
            offset: 2800,
            duration: "1000%"
        })
        .setTween(section2Tween2)
        .addTo(controller)

        // section2Icons
        new ScrollMagic.Scene({
            triggerElement: ".iconContainer",
            //triggerHook: 0,
            //offset: 0,
            duration: "100%"
        })
        .setTween(section2Tween3)
        .addTo(controller)


    })

    function toggleSection1Out() {
        document.querySelector(".socialMediaContainer").classList.toggle("transition")
        document.querySelector(".imageContainer").classList.toggle("transition")
    }

    function toggleSection2In() {
        document.querySelector(".contentContainer1").classList.toggle("transition")
    }

    return (
        <section id="how-it-works-section">
            <div className="how-it-works-container">
                
                {/* <HowItWorksHeader /> */}
                
                <div className="howItWorksBackground">

                    <div className="backgroundContainer">
                        <div className="background prime1"></div>
                        <div className="background wht"></div>
                    </div>

                    <div className="imageContainer">
                        <div className="socialMediaContainer">
                            <img className="howItWorksImage socialMedia"/>
                        </div>
                    </div>

                    <div className="contentContainer1">
                        <div className="contentWrapper">
                            <p className="content content1">You've created a website</p>
                            <p className="content content2">to connect people - for socializing, dating, or business. 
                            How do you run it without the usual headaches that cause drama and controversy?</p>
                        </div>
                    </div>
                    <div className="contentContainer2">
                        <div className="contentWrapper">
                            <p className="content content1"> Even the most popular and sophisticated 
                            social media apps and sites suffer from fake accounts and inappropriate behavior.</p>
                            <p className="content content2">Your solution is “Yes I’m Me!”</p>
                        </div>
                    </div>
                    <div className="imageContainer2">
                        <div className="iconContainer">
                            <div className="container twitterContainer">
                                <img alt="twitter icon" className="socialMediaIcon twitter" style={{ marginLeft: "20%" }} src="https://img.icons8.com/color/144/000000/twitter.png"/>
                                <p className="facts twitterFacts">
                                    <i>Between 9 percent and 15 percent of tweets come from fake accounts</i>
                                </p>
                            </div>
                            <div className="container instagramContainer" style={{ }}>
                                <p className="facts instagramFacts">
                                    <i>May have as many as 95 million bots posing as real accounts</i>
                                </p>
                                <img alt="instagram icon" className="socialMediaIcon instagram" style={{ marginLeft: "0%" }} src="https://img.icons8.com/color/144/000000/instagram-new.png"/>
                            </div>
                            <div className="container tinderContainer">
                                <img alt="tinder icon" className="socialMediaIcon tinder" style={{ marginLeft: "30%" }} src="https://img.icons8.com/color/144/000000/--tinder.png"/>
                                <p className="facts tinderFacts">
                                    <i>It's speculated that roughly 20% of Tinder profiles are fake</i>
                                </p>
                            </div>
                            <div className="container tiktokContainer">
                                <img alt="tiktok icon" className="socialMediaIcon tiktok" style={{ marginLeft: "10%" }} src="https://img.icons8.com/color/144/000000/tiktok.png"/>
                                <p className="facts tiktokFacts">
                                    <i>TikTok Platform Found to Be Full of Scams and Fake Accounts</i>
                                </p>
                            </div>
                            <img alt="yelp icon" className="socialMediaIcon yelp" style={{ marginLeft: "40%" }} src="https://img.icons8.com/color/144/000000/yelp.png"/>
                            <img alt="facebook icon" className="socialMediaIcon facebook" style={{ marginLeft: "70%" }} src="https://img.icons8.com/color/144/000000/facebook-new.png"/>
                            <img alt="snapchat icon" className="socialMediaIcon snapchat" style={{ marginLeft: "20%" }} src="https://img.icons8.com/plasticine/200/000000/snapchat.png"/>
                            <img alt="linkedin icon" className="socialMediaIcon linkedin" style={{ marginLeft: "60%" }} src="https://img.icons8.com/color/144/000000/linkedin.png"/>
                            <img alt="youtube icon" className="socialMediaIcon youtube" style={{ marginLeft: "20%" }} src="https://img.icons8.com/color/144/000000/youtube-play.png"/>
                            <img alt="wechat icon" className="socialMediaIcon wechat" style={{ marginLeft: "40%" }} src="https://img.icons8.com/color/128/000000/weixing.png"/>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}