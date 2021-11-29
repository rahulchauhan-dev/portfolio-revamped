import React, { useState } from 'react'
import Vanta from './Vanta'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '@restart/ui/esm/Button'
AOS.init();



const LandingPage = () => {

    const [show, setShow] = useState(true);

    const onClickHandler = (e) => {
        e.preventDefault()
        setShow(false)
    }

    return (
        <>
            <Vanta>
                <Navbar>
                    <Container>
                        <Navbar.Brand style={{ color: 'white', userSelect: 'none', fontSize: 'xx-large', fontWeight: '100' }}>RC.</Navbar.Brand>
                    </Container>
                </Navbar>
                <Container style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
                    <Container data-aos="fade-in" data-aos-duration="2000" data-aos-delay="2500" style={{ textAlign: 'center' }} >
                        <h1 className="display-5 mb-5">Hello!</h1> <p className="display-5 mb-5"> <b>I'm</b> Rahul Chauhan <br></br>
                            MERN Stack Web Dev<br></br>
                            Java Programmer</p>
                        {show && <Link
                            activeClass="active"
                            to="about-container"
                            spy={true}
                            smooth={true}
                            offset={-10}
                            duration={500}
                        ><Button onClick={onClickHandler} style={{ background: 'transparent', color: 'white', border: 'none', opacity: '0.5' }}><FontAwesomeIcon icon={faArrowDown} id="arrow-down"></FontAwesomeIcon></Button></Link>}

                    </Container>
                </Container>

            </Vanta >
        </>
    )
}

export default LandingPage
