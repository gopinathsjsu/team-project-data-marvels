import React, { useState } from 'react';
import { Button, Elements } from '../../common/index';
import { roomStatus } from './../../common/component/options';

function BookingMgmt() {
    const [val, setVal] = useState({
        reservationNumber: '',
        customerName: '',
        hotelName: '',
        roomType: '',
        quantity: '',
        price: '',
        roomStatus: { label: 'Change Status', value: '0' },
    })
    function onchange(newval, id) {
        let temp = { ...val }
        temp[id] = newval
        setVal(temp)
    }
    return (
        <div className='container d-flex flex-column justify-content-center p-4'>
            <h2>Manage Reservations</h2>
            <ul className='list-group list-group-flush mt-2'>
                <li className='list-group-item d-flex flex-row justify-content-between mt-3 border-bottom-1' style={{ backgroundColor: '#E7E5EA' }}>
                    <div className='col-4 d-flex flex-column justify-content-around'>
                        <h6>Reservation No.:#</h6>
                        <div className='d-flex flex-row justify-content-between'>
                            <p className='col-6 mb-0'>Customer Name</p>
                            <p className=' col-6 mb-0'>Hotel Name</p>
                        </div>
                        <div className='d-flex flex-row justify-content-between'>
                            <p className='col-6 mb-0'>Room Type</p>
                            <p className='col-6 mb-0'>Quantity: <span>#</span></p>
                        </div>
                        <p className='mb-0'>Price: $<span>100</span></p>
                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <Elements formField={[
                            {
                                id: 'roomStatus',
                                type: 'react_select',
                                autoFocus: true,
                                requiredFlag: true,
                                value: val.roomStatus,
                                options: roomStatus,
                                onchange: onchange
                            }
                        ]} />
                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <Button id='save' text='Save' />
                    </div>
                </li>
                <li className='list-group-item d-flex flex-row justify-content-between mt-3 border-bottom-1' style={{ backgroundColor: '#E7E5EA' }}>
                    <div className='col-4 d-flex flex-column justify-content-around'>
                        <h6>Reservation No.:#</h6>
                        <div className='d-flex flex-row justify-content-between'>
                            <p className='col-6 mb-0'>Customer Name</p>
                            <p className=' col-6 mb-0'>Hotel Name</p>
                        </div>
                        <div className='d-flex flex-row justify-content-between'>
                            <p className='col-6 mb-0'>Room Type</p>
                            <p className='col-6 mb-0'>Quantity: <span>#</span></p>
                        </div>
                        <p className='mb-0'>Price: $<span>100</span></p>
                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <Elements formField={[
                            {
                                id: 'roomStatus',
                                type: 'react_select',
                                autoFocus: true,
                                requiredFlag: true,
                                value: val.roomStatus,
                                options: roomStatus,
                                onchange: onchange
                            }
                        ]} />
                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <Button id='save' text='Save' />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default BookingMgmt