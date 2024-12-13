import React from 'react';

import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';

import { Navbar, Nav } from 'react-bootstrap';
import { Button } from '../index';

function Header(props) {
    return (
        <>
            <Navbar bg="dark" variant="dark" className='d-flex flow-row justify-content-between'>
                <Nav className='d-flex flex-row ms-4'>
                    <NavLink className='navbar-brand' to='/app/home'>Marvel Hotels</NavLink>
                    {/* <NavLink className='nav-link' to='/app'>Home</NavLink> */}
                    {/* <NavLink className='nav-link' to='/app/hotels'>Hotels</NavLink> */}
                    {props.profile.userrole !== 'Customer' && <NavLink className='nav-link' to='/app/manageBooking'>Manage Booking</NavLink>}
                </Nav>
                <Nav className='d-flex flex-row me-4'>
                    {props.profile.userrole !== 'Employee' && <NavLink className='nav-link' to='/app/reservations'>My Booking</NavLink>}
                    <p className='nav-item text-white-50 mb-0 mt-2'>Rewards: {props.profile.rewards}</p>
                    {/* <NavLink className='nav-link' to='/app/profile'>Profile</NavLink> */}

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