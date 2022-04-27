import React, { useState } from 'react';
import { Elements, Button } from '../../common';
import { Modal } from 'react-bootstrap';

function Hotels() {
    const [show, setShow] = useState(false);
    const [val, setVal] = useState({
        hotelname: '',
        address: '',
        city: '',
        state: '',
        country: '',
        rating: null
    })

    function onchange(newval, id) {
        let temp = { ...val }
        temp[id] = newval
        setVal(temp)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='container d-flex flex-column justify-content-center p-4'>
                <div className='d-flex flex-row justify-content-between'>
                    <h2>Hotels</h2>
                    <div className='d-flex flex-column justify-content-center'>
                        <Button id='addHotel' text='Add Hotel' onClick={handleShow} />
                    </div>
                </div>
                <ul className='list-group list-group-flush mt-2'>
                    <li className='list-group-item d-flex flex-row justify-content-between mt-3 border-bottom-1' style={{ backgroundColor: '#E7E5EA' }}>
                        <div className='col-4 d-flex flex-column justify-content-around'>
                            <h6>Hotel Name</h6>
                            <p className='mb-0'>Address</p>
                            <p className='mb-0'>City <span>, State</span><span>, Country</span></p>
                        </div>
                        <div className='d-flex flex-column justify-content-center'>
                            <p>Rating</p>
                        </div>
                    </li>
                    <li className='list-group-item d-flex flex-row justify-content-between mt-3 border-bottom-1' style={{ backgroundColor: '#E7E5EA' }}>
                        <div className='col-4 d-flex flex-column justify-content-around'>
                            <h6>Hotel Name</h6>
                            <p className='mb-0'>Address</p>
                            <p className='mb-0'>City <span>, State</span><span>, Country</span></p>
                        </div>
                        <div className='d-flex flex-column justify-content-center'>
                            <p>Rating</p>
                        </div>
                    </li>
                </ul>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Hotel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex flex-row justify-content-center flex-wrap'>
                        <Elements
                            formField={[
                                {
                                    id: 'hotelname',
                                    label: 'Hotel Name *',
                                    type: 'text',
                                    placeholder: 'Enter Hotel Name',
                                    className: 'col-7',
                                    requiredFlag: true,
                                    value: val.hotelname,
                                    onchange: onchange,
                                },
                                {
                                    id: 'address',
                                    label: 'Address *',
                                    type: 'text',
                                    placeholder: 'Enter Address',
                                    className: 'col-7',
                                    requiredFlag: true,
                                    value: val.address,
                                    onchange: onchange,
                                },
                                {
                                    id: 'city',
                                    label: 'City *',
                                    type: 'text',
                                    placeholder: 'Enter City',
                                    className: 'col-7',
                                    requiredFlag: true,
                                    value: val.city,
                                    onchange: onchange,
                                },
                                {
                                    id: 'state',
                                    label: 'State *',
                                    type: 'text',
                                    placeholder: 'Enter State',
                                    className: 'col-7',
                                    requiredFlag: true,
                                    value: val.state,
                                    onchange: onchange,
                                },
                                {
                                    id: 'country',
                                    label: 'Country *',
                                    type: 'text',
                                    placeholder: 'Enter Country',
                                    className: 'col-7',
                                    requiredFlag: true,
                                    value: val.country,
                                    onchange: onchange,
                                },
                                {
                                    id: 'rating',
                                    type: 'number',
                                    placeholder: 'Rating *',
                                    className: 'col-7',
                                    label: 'Rating *',
                                    requiredFlag: true,
                                    value: val.rating,
                                    onchange: onchange
                                },
                            ]} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button color='secondary' text='Close' onClick={handleClose} />
                    <Button text='Add Hotel' onClick={handleClose} />
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Hotels
