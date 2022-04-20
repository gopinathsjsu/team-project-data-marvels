import React from 'react';
import { Button } from '../../common/index';

function BookingMgmt() {
    return (
        <div className='container d-flex flex-column justify-content-center p-4'>
            <h2>Manage Reservations</h2>
            <ul className='list-group list-group-flush mt-2'>
                <li className='list-group-item d-flex flex-row justify-content-between mt-3' style={{ backgroundColor: '#E7E5EA', border: '1px solid rgba(0,0,0,.125)', borderWidth: '0 0 1px' }}>
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
                        <select className='form-select'>
                            <option selected>Change Status</option>
                            <option value='Checked In'>Checked In</option>
                            <option value='Checked Out'>Checked Out</option>
                        </select>
                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <Button id='save' text='Save' />
                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <Button id='cancel' color='danger' text='Cancel Reservation' />
                    </div>
                </li>
                <li className='list-group-item d-flex flex-row justify-content-between mt-3' style={{ backgroundColor: '#E7E5EA', border: '1px solid rgba(0,0,0,.125)', borderWidth: '0 0 1px' }}>
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
                        <select className='form-select'>
                            <option selected>Change Status</option>
                            <option value='Checked In'>Checked In</option>
                            <option value='Checked Out'>Checked Out</option>
                        </select>
                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <Button id='save' text='Save' />
                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <Button id='cancel' color='danger' text='Cancel Reservation' />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default BookingMgmt