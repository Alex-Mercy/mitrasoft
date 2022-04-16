import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import avatar from '../assets/images/avatar.png';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (


        <Navbar bg="dark" variant="dark" expand={false}>
            <Container>
                <Navbar.Brand href="/">
                    <Link style={{ textDecoration: 'none' }} to='/'>
                        <Image
                            src={avatar}
                            roundedCircle
                            height='40'
                        />

                        <Navbar.Text className='mx-3'
                        >Alex Mercy</Navbar.Text>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-nav-dropdown" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >
                        <Navbar.Text
                        >m-alex225@yandex.ru</Navbar.Text>
                        <LinkContainer to='/'>
                            <Nav.Link>
                                About
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/galery'>
                            <Nav.Link>
                                Galery
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header