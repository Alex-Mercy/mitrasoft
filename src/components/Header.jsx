import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Nav, Navbar} from 'react-bootstrap'
import avatar from '../assets/images/avatar.png';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (

        <Container >
            <Navbar bg="dark" variant="dark" expand={false}>
                <Navbar.Brand>
                    <Link style={{ textDecoration: 'none' }} to='/'>
                        <Image
                            src={avatar}
                            roundedCircle
                            height='40'
                            className='mx-3'
                        />
                        <Navbar.Text 
                        >Alex Mercy</Navbar.Text>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-nav-dropdown" className='mx-3'/>
                <Navbar.Collapse id="basic-navbar-nav" className='mx-3'>
                    <Nav >
                        <Navbar.Text
                        >m-alex225@yandex.ru</Navbar.Text>
                        <LinkContainer to='/'>
                            <Nav.Link>
                                Galery
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                            <Nav.Link>
                                About
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </Container>
    )
}

export default Header