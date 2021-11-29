import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Cards from './Cards'
import { data } from '../data'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Projects = () => {
    return (
        <Container fluid className="p-4" id="project-container" style={{ background: 'black' }}>

            <Container>
                <h1 style={{
                    textShadow: '6px 3px 2px rgba(207, 49, 89, 1)'
                }} className="lead display-1 mb-5">Projects</h1>

                <Row xs={1} md={2} lg={2} >

                    {data.map(post => (
                        <Col data-aos="zoom-in" data-aos-duration="1000" key={post.title}>
                            <Cards data={post} />
                        </Col>

                    ))}

                </Row>
            </Container>
        </Container>
    )
}

export default Projects
