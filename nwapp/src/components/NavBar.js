import React from 'react'
import { Link } from "react-router-dom"
import './NavBar.css'
import image from '../img/nwlogo1.jpg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return (

        <Navbar bg="rgb(81, 70, 138)" variant="dark" className='navbar'>
            <Container className='header'>
                <Navbar.Brand href="#home" >
                    <img
                        src={image}
                        width="170"
                        height="30"
                        className="d-inline-block align-top"
                        alt=''
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/create">page2</Nav.Link>
                    <Nav.Link href="/Address">page3</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    

    )
}
