import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Galery() {
  return (
    <Container>
        <Row>
            <Col md='2'>Logo</Col>
            <Col md='8'>Menu</Col>
        </Row>
    </Container>
  )
}

export default Galery