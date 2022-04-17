import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

function Galery() {
    return (
        <Container className="mt-3" >
            <div className="my-3 px-2">
            <Button className="mx-2" variant="outline-success">Animals</Button>
            <Button className="mx-2" variant="outline-success">Animals</Button>
            <Button className="mx-2" variant="outline-success">Animals</Button>
            <Button className="mx-2" variant="outline-success">Animals</Button>
            </div>
            {/* <Row >
                <Col xs lg="2"><Button>Animals</Button></Col>
                <Col md="auto"><Button>Animals</Button></Col>
                <Col><Button>Animals</Button></Col>
                <Col><Button>Animals</Button></Col>
                
            </Row> */}
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