import React from 'react'
import { Container, Stack, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { animateScroll as scroll } from "react-scroll";

import { contact } from '../data'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Contact = () => {

    const scrollToTop = (e) => {
        e.preventDefault()
        scroll.scrollToTop();
    };




    return (
        <Container fluid className="p-4" id="contact-container" style={{ height: '100vh', background: 'black', marginTop: '4rem' }}>

            <Container>
                <h1 style={{
                    textShadow: '6px 3px 2px rgba(207, 49, 89, 1)'
                }} className="lead display-1 mb-5">Get in Touch</h1>
                <Container data-aos="fade-right" data-aos-duration="1500">
                    <Stack gap={3}>
                        <div><h1 style={{ textDecoration: 'underline' }} id="email">{contact.email}</h1></div>
                        <div> <Row xs={2} md={2} lg={2}>
                            <Col className="w-auto"><a href={contact.twitter} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} size="3x" color="#b52b4d"></FontAwesomeIcon></a></Col>
                            <Col className="w-auto"><a href={contact.linkedin} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="3x" color="#b52b4d"></FontAwesomeIcon></a></Col>
                            <Col className="w-auto"><a href={contact.github} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithubSquare} size="3x" color="#b52b4d"></FontAwesomeIcon></a></Col>

                        </Row></div>
                        <div>
                            <Button onClick={scrollToTop} style={{ background: 'transparent', color: 'white', border: 'none', opacity: '0.5', float: 'right' }}><FontAwesomeIcon icon={faArrowUp} size="2x"></FontAwesomeIcon></Button>
                        </div>
                    </Stack>
                </Container>
            </Container>
        </Container>
    )
}

export default Contact
