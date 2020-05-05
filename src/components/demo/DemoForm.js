/* ------------ main imports ------------ */
import React, { useEffect } from 'react'


/* ------------ other imports ------------ */
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import OverlayTooltip from '../multiuse/OverlayTooltip'
//import {useSpring, animated} from 'react-spring'



/* ------------ styles ------------ */
import './DemoForm.css'


function serializeForm(form) {

    for(let i = 0; i < form.elements.length; i++) {
        let fieldName = form.elements[i]

        switch (fieldName) {
            case "id_front":

                fieldName.setAttribute("name", "id-front")
                break;
            case "id_back":
  
                fieldName.setAttribute("name", "id-back")
                break;
            default: break;
        }
    }
    
    return form
}


async function submitForm(e, props) {

    /* Note:
        currently working, just need to change request 
        field names on back-end from "idFront" to 
        "id-front" or "id_front"
    */

    e.preventDefault()
    const form = document.querySelector('form')
    const serializedForm = serializeForm(form)

    const formData = new FormData(form)

    /* fetch('https://kamshedtest.herokuapp.com/upload', {
        method: 'POST',
        body: formData
    })
    .then(res => {
        return res.json
    })
    .then(info => console.log(info))
    .catch(err => console.error(err)) */

    await props.props.showResults()
    await scrollToResults()
}

function upload(e) {
    let targetId = e.target.id.replace('-filename', '') || e.target.id

    const classname = targetId.replace('-', '_')
    document.getElementsByName(classname)[0].click()
}

function displayFilename(e) {
    const field = e.target.name.replace('_', '-') + '-filename' 
    const fileToUpload = e.target.value
    
    const filenameDisplayElement = document.getElementById(`${field}`)
    filenameDisplayElement.value = fileToUpload.replace("C:\\fakepath\\", "")
}


function scrollToResults() {
    // fullscreen modal with close button
}


function DemoForm(props) {

    useEffect(() => {
        const formInputs = document.querySelectorAll(".demoInput")
        const form = document.querySelector("#demo-form")

        
        formInputs.forEach(input => {
            
            /* if (form.classList.contains("active")) {
                console.log("clicked")
                return input.removeEventListener("click", activateForm)
            } */
            input.addEventListener("click", () => {
                form.className = ""
                form.classList.add("active")
            }, {
                once: true
            })
        })
        
    }, [])

    

    return (

            <Form id="demo-form" className="hidden" onSubmit={e => submitForm(e, props)} >
                <Form.Group className="formInput" controlId="formUsername">
                    <Form.Label><h5>Username</h5></Form.Label>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 400 }}
                        overlay={OverlayTooltip("Username here")}
                    >
                        <Form.Control className="demoInput" type="text" placeholder="Enter username" />
                    </OverlayTrigger>
                </Form.Group>

                <Form.Group className="formInput formInputFile" controlId="formIdFront">
                    <Form.Label><h5>Driver's License - <i>Front</i></h5></Form.Label>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 400 }}
                        overlay={OverlayTooltip("Front of id here")}
                    >
                        <div className="formInputFileUpload">
                            <Button id="id-front" onClick={e => upload(e)}>Upload</Button>
                            <input onClick={e => upload(e)} id="id-front-filename" placeholder="No file choosen"/>
                        </div>
                    </OverlayTrigger>
                    <Form.Control className="demoInput" style={{display: "none"}} onChange={e => displayFilename(e)} name="id_front" type="file" placeholder="Image of the front of driver's license" />
                </Form.Group>


                <Form.Group className="formInput formInputFile" controlId="formIdBack">
                    <Form.Label><h5>Driver's License - <i>Back</i></h5></Form.Label>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 400 }}
                        overlay={OverlayTooltip("Back of id here")}
                    >
                        <div className="formInputFileUpload">
                            <Button id="id-back" onClick={e => upload(e)}>Upload</Button>
                            <input onClick={e => upload(e)} id="id-back-filename" placeholder="No file choosen"/>
                        </div>
                    </OverlayTrigger>
                    <Form.Control className="demoInput" style={{display: "none"}} onChange={e => displayFilename(e)} name="id_back" type="file" placeholder="Image of the back of driver's license" />
                </Form.Group>



                <Form.Group className="formInput formInputFile" controlId="formSelfie">
                    <Form.Label><h5>Upload user Selfie</h5></Form.Label>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 400 }}
                        overlay={OverlayTooltip("Close up image of user here")}
                    >
                        <div className="formInputFileUpload">
                            <Button id="selfie" onClick={e => upload(e)}>Upload</Button>
                            <input onClick={e => displayFilename(e)} id="selfie-filename" placeholder="No file choosen"/>
                        </div>
                    </OverlayTrigger>
                    <Form.Control className="demoInput" style={{display: "none"}} onChange={e => displayFilename(e)} name="selfie" type="file" placeholder="Image of user face"/>
                </Form.Group>

                <Form.Group className="formSubmit" controlId="formSubmit">
                    <Button className="formInputSubmit" type="submit">Submit</Button>
                </Form.Group>


            </Form>

    )
        

}

export default DemoForm