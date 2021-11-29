import Button from '@restart/ui/esm/Button';
import React from 'react'
import { Container } from 'react-bootstrap'
import { animateScroll as scroll } from "react-scroll";


const Footer = () => {

    const scrollToTop = (e) => {
        e.preventDefault()
        scroll.scrollToTop();
    };

    return (
        <Container id="footer" className="pb-2 pt-3">
            <p>Data Sourced from <a href="https://archive.org/" target="_black">Internet Archive.</a></p>
            <p>Made with ❤️ by <a href="https://twitter.com/Rahul_ion011" target="_black">Rahul.</a> <Button onClick={scrollToTop} style={{ border: 'none', background: 'transparent', color: '#f5af02', float: 'right', fontSize: 'large', fontWeight: '600' }}>⬆️ TOP</Button></p>


        </Container>
    )
}

export default Footer
