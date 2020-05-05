/* ------------ main imports ------------ */
import React, { Component } from 'react'
import DemoForm from './DemoForm'
import DemoResults from './DemoResults'


/* ------------ other imports ------------ */
import { Spring } from 'react-spring/renderprops'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


/* ------------ styles ------------ */
import './DemoArea.css'


class DemoArea extends Component {
    state = {
        displayResults: false
    }

    showResults() {

        if(!this.state.displayResults) { 
            this.setState({
                displayResults: true
            })
        }
    }


    componentDidMount() {

        /* ------------ lazyloading ------------ */
        const form = document.querySelector("form")
        const demoSection = document.getElementById("demo-section")

        const demoSectionObserver = new IntersectionObserver((entries, observer) => {
            for (let i = 0; i < entries.length; i++) {
                if(!entries[i].isIntersecting) form.classList.add("hidden")
                else { form.classList.remove("hidden") }
            }
        }, {})

        demoSectionObserver.observe(demoSection)
    }

    

    render () {

        /* ------------ props for form ------------ */
        const demoFormProps = {
            displayResults: this.state.displayResults,
            showResults: () => this.showResults()
        }

        const handleClose = () => {
            this.setState({
                displayResults: false
            })
        }

        const demoResults = () => {
            //console.log(window.screen.width)
            //if(window.screen.width <= 1030) { 
               return (
                <Modal show={this.state.displayResults} onHide={handleClose}>
                    {/* <DemoResults id="demo-results" props={this.state.displayResults}/> */}
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><b>FirstName:</b>Eric</p>
                        <p><b>LastName:</b>Smith</p>
                        <p><b>DOB:</b>2/16/1992</p>
                        <p><b>Address:</b>3312 Main Street, San Diego, CA 92001</p>
                        <p><b>Gender:</b>Male</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Retry
                        </Button>
                    </Modal.Footer>
                </Modal>
            )//}
            /* else {
                return (
                    <DemoResults id="demo-results" props={this.state.displayResults}/>
                )
            } */
        }

        return (
            <section id="demo-section" className="demoSection" name="DemoSection">
                <div className="demoContainer">
                
                {/* Form and results */}
                <Spring
                 from={{ opacity: 0 }}
                 to={{ opacity: 1 }}>
                    {props => <DemoForm style={props} props={demoFormProps} />}
                </Spring>

                {demoResults()}
                </div>
            </section>
        )
    }
}

export default DemoArea