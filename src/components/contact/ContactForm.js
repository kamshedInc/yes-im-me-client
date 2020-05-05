import React from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import './Contact.css'

export default function Contact() {

    return (
        <section 
            id="contact-section"
            data-IO="nav" // intersection observer for navbar
        >
            
            <Form id="contact-form" action="mailto:joshrlear@gmail.com" method="post" enctype="text/plain">
                <Col style={{padding: "0px"}}>
                <header>
                    <h3>Contact</h3>
                </header>
                </Col>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="from-name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Erin" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="from-email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Erin@email.com" />
                        </Form.Group>
                    </Col>
                </Form.Row>
            

                <Form.Row>
                    <Col>
                        <Form.Group controlId="from-company">
                            <Form.Label>Company</Form.Label>
                            <Form.Control placeholder="Erin Inc." />
                        </Form.Group>
                    </Col>
                </Form.Row>

                <Form.Group controlId="from-message" >
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="5" placeholder="Message here..." />
                </Form.Group>
                <Form.Group>
                    <Button type="submit">Submit</Button>
                </Form.Group>
            </Form>
        </section>
    )
}