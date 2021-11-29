import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Cards = ({ data }) => {
    return (

        <Card className='w-75 rounded m-4 shadow-lg' id="card" style={{ background: 'transparent', border: '1px solid #982945' }}>
            <Card.Img variant="top" src={data.thumbnail} />
            <Card.Body>
                <Card.Title><h5 id="project-title">{data.title}</h5></Card.Title>
                <Card.Text>
                    <p className='lead' style={{ fontWeight: '400' }} id="project-desc"> {data.desc} </p>
                </Card.Text>
                <Card.Text className='lead'>
                    {data.tech}
                </Card.Text>
                <Button id="gradbuttons" href={data.link} target="_blank" style={{ background: 'linear-gradient(to right, #30CFD0 0%, #330867 100%)', border: 'none', borderRadius: 'unset', fontWeight: '500', letterSpacing: '3px' }} className="btn rounded m-4">Explore</Button>
            </Card.Body>
        </Card>

    )
}

export default Cards
