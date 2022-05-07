import React, { useState } from 'react';

import { connect } from 'react-redux';

import { Navbar, Nav } from 'react-bootstrap';
import { Button, Modal } from '../index';
import Login from '../../pages/auth/component/login';
import Signup from '../../pages/auth/component/signup';

function Header(props) {
    console.log(props.profile.data);
    const [modalData, setModalData] = useState({ title: '', body: '', footer: '' })
    const modalId = 'auth-modal';

    return (
        <>
            <Navbar bg="dark" variant="dark" className='d-flex flow-row justify-content-between'>
                <Nav className='d-flex flex-row ms-4'>
                    <Navbar.Brand href='/home'>Marvel Hotels</Navbar.Brand>
                    <Nav.Link href='/home'>Home</Nav.Link>
                    <Nav.Link href='/app/hotels'>Hotels</Nav.Link>
                    <Nav.Link href='/app/manageBooking'>Manage Reservations</Nav.Link>
                </Nav>
                <Nav className='d-flex flex-row me-4'>
                    <Nav.Link href='/app/reservations'>My Reservations</Nav.Link>
                    <Nav.Link href='/app/cart'>Cart</Nav.Link>

                    {
                        props.profile.data !== undefined ? <Button
                            text='Logout'
                            variant='header-link'
                            onClick={() => {
                                localStorage.clear()
                                window.location.href = '/'
                            }}
                        /> : <Button
                            text='Login / Sign up'
                            variant='header-link'
                            target={modalId}
                            onClick={() => {
                                let temp = {
                                    title: '',
                                    body: (
                                        <Login modalId={modalId} setModalData={setModalData} />
                                    ),
                                }
                                setModalData(temp)
                            }}
                        />
                    }
                    {/* <Button
                        text='Sign up'
                        variant='header-link'
                        target={modalId}
                        onClick={() => {
                            let temp = {
                                title: '',
                                body: (
                                    <Signup modalId={modalId} setModalData={setModalData} />
                                ),
                            }
                            setModalData(temp)
                        }}
                    /> */}
                </Nav>
            </Navbar>
            <Modal
                modalId={modalId}
                title={modalData.title}
                body={modalData.body}
                footer={modalData.footer}
            />
        </>
    )
}

const mapStateToProps = (state) => { return { profile: state.greduce.profile } }

export default connect(mapStateToProps)(Header);