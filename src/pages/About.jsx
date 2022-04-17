import React from 'react'
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'

function About() {
    return (
        <Container className='mt-4 px-5'>
            <h2>Web Developer.</h2>
            <p>Hello. My name is Alexey. 
                I am a junior frontend developer with 1 year of frontend experience.
                You can get acquainted with my projects on the GitHub.
            </p>
            <h5>Technical skills:</h5>
            <ul>
                <li>Web Development languages: JavaScript, HTML5, CSS3</li>
                <li>JavaScript framework: React </li>
                <li>State manager: Redux </li>
                <li>UI frameworks: Material UI, Bootstrap</li>
                <li>Side Effect managers: Redux Thunk, Redux Saga</li>
                <li>Forms managers: Redux-form, Formik</li>
                <li>Version control: Redux-form, Formik</li>
            </ul>
            <p>
                I'm currently available for freelance work.
                If you have a project that you want to get started, 
                think you need my help with something or just fancy saying hey, 
                then get in touch.
            </p>

        </Container>
    )
}



export default About