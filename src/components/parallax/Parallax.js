/* ------------ main imports ------------ */
import React, { Component } from 'react'
import DemoArea from '../demo/DemoArea'
import About from '../about/About'


/* ------------ other imports ------------ */
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import BlurImage from './ParallaxBlurImage'

/* ------------ styles ------------ */


class Parallaxed extends Component {
    state = {
        blurEarth: false
    }
    

  render() {


    return (
      <Parallax id="parallax" ref={ref => (this.parallax = ref)} pages={5.5}>


        {/*---------- parallaxed items ----------*/}

        <ParallaxLayer offset={0.85} speed={ window.innerWidth >= 500 ? -1.75 : -2 } 
        /* astronaut */
            style={{ 
                zIndex: 1, 
                top: "-150vh", 
                backgroundImage: "url(https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png)"
            }}
        />

        <ParallaxLayer offset={0} speed={-0.3} factor={2} 
        /* stars */
            style={{ 
                backgroundImage: "url(https://awv3node-homepage.surge.sh/build/assets/stars.svg)", 
                backgroundSize: 'cover' 
            }} /> 


        <ParallaxLayer offset={0} speed={0.5} 
        /* earth */
            style={{ 
                top: window.innerWidth >= 500 ? "150vh" : "100vh", 
                left: window.innerWidth >= 500 ? "0" : "-50%", 
                pointerEvents: 'none' 
            }}>
            <BlurImage props={this.state.blurEarth}/>
        </ParallaxLayer>



        {/*---------- routes ----------*/}

        <ParallaxLayer offset={ window.innerWidth >= 500 ? 2.5 : 1.5 } speed={0} factor={5} 
            style={{
                zIndex: 1, 
                backgroundColor: 'white' 
            }}>
            <DemoArea />
            <About />
        </ParallaxLayer> 

        
      </Parallax>
    )
  }
}

export default Parallaxed
