import React, { Component } from 'react'
import { InView } from "react-intersection-observer";
import { Spring, animated } from 'react-spring/renderprops'

import './ParallaxBlurImage.css'


class BlurImage extends Component {

    state = {
        blur: false
    }
    
    /* 

        Rather than blurring image (b/c gpu intensive and Spring isn't receptive to it)
        just switch image for a blurred version and do a opacity switch.
    
    */

    onInViewChange = inview => {
        console.log(inview)
        if (!this.state.blur && inview) this.setState({ blur: !this.state.blur })
      }

    render() {
        
        return (
            <InView tag="div" onChange={this.onInViewChange}>
                <Spring to={{ x: this.state.blur ? 2 : 0 }}>
                    {props => (
                        <animated.div
                            style={{ filter: `blur(${props.x})` }}
                            className="earth"
                        />
                    )}
                </Spring>
            </InView>
        )
    }
}

export default BlurImage