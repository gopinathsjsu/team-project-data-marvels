import * as React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" className='d-flex flow-row justify-content-between'>
            <Nav className='d-flex flex-row ms-4'>
                <Navbar.Brand href='/home'>Marvel Hotels</Navbar.Brand>
                <Nav.Link href='/home'>Home</Nav.Link>
                <Nav.Link href='/manageBooking'>Manage Reservations</Nav.Link>
            </Nav>
            <Nav className='d-flex flex-row me-4'>
                <Nav.Link href='/reservations'>My Reservations</Nav.Link>
                <Nav.Link href='/cart'>Cart</Nav.Link>
                <Nav.Link href='/login'>Log out</Nav.Link>
                <Nav.Link href='/login'>Login</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header