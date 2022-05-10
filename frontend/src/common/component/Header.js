import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';

import { Navbar, Nav } from 'react-bootstrap';
import { Button } from '../index';

function Header() {

    return (
        <>
            <Navbar bg="dark" variant="dark" className='d-flex flow-row justify-content-between'>
                <Nav className='d-flex flex-row ms-4'>
                    <NavLink className='navbar-brand' to='/app/home'>Marvel Hotels</NavLink>
                    {/* <NavLink className='nav-link' to='/app'>Home</NavLink> */}
                    {/* <NavLink className='nav-link' to='/app/hotels'>Hotels</NavLink> */}
                    <NavLink className='nav-link' to='/app/manageBooking'>Manage Reservations</NavLink>
                </Nav>
                <Nav className='d-flex flex-row me-4'>
                    <NavLink className='nav-link' to='/app/reservations'>My Reservations</NavLink>
                    <NavLink className='nav-link' to='/app/profile'>Profile</NavLink>

                    <Button
                        text='Logout'
                        variant='header-link'
                        onClick={() => {
                            localStorage.clear()
                            window.location.href = '/'
                        }}
                    />
                </Nav>
            </Navbar>
        </>
    )
}

const mapStateToProps = (state) => { return { profile: state.greduce.profile } }

export default connect(mapStateToProps)(Header);