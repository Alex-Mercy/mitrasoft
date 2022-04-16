import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

function Galery() {
    return (
        <Container className="mt-3" >
            <Row xs={1} lg={3} md={2} className="g-4" mx='10' >
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/f7/0b/eb/f70beb9c247f61aa02be2f976a0c9cb0.jpg" /> 
                        </Card>
                    </Col>
                ))}
            </Row>
            </Container>
    )
}

export default Galery