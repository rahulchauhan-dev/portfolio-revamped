import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { resumeLink } from '../data'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const About = () => {
    return (
        <Container id="about-container" fluid style={{ height: '100vh', background: 'black', display: 'flex', marginTop: '4rem' }}>

            <Container data-aos="fade-up" data-aos-duration="1500">
                <h1 style={{
                    textShadow: '6px 3px 2px rgba(207, 49, 89, 1)'
                }} className="lead display-1 mb-3">About</h1>

                <p id="about" className="lead display-6" style={{ lineHeight: '1.5' }}>A Self-Motivated Full Stack Web Developer<br />
                    Passionate and Interested in exploring and learning new things. I create lighting fast WebApps and Websites using MERN Stack<br />
                    A Java Programming Enthusiast too!
                </p>
                <a
                    href={resumeLink.link} rel="noreferrer" target="_blank"
                    download
                >
                    <Button id="gradbuttons" style={{ background: 'linear-gradient(to right, #30CFD0 0%, #330867 100%)', border: 'none', borderRadius: 'unset', fontWeight: '400', letterSpacing: '3px', float: 'right' }} className="btn rounded">Resume</Button></a>

            </Container>

        </Container>
    )
}

export default About
