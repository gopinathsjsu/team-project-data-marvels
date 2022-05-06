import React from 'react';
import Button from '../../common/component/Button';

function Reservations() {
    return (
        <div className='container d-flex flex-column justify-content-center p-4'>
            <h2>My Reservations</h2>
            <ul className='list-group list-group-flush mt-2'>
                <li className='list-group-item d-flex flex-row justify-content-between mt-3' style={{ backgroundColor: '#E7E5EA', border: '1px solid rgba(0,0,0,.125)', borderWidth: '0 0 1px' }}>
                    <div className='d-flex flex-column justify-content-around'>
                        <h6>Reservation No.:#</h6>
                        <p className='mb-0'>Hotel Name</p>
                        <p className='mb-0'>Room Type</p>
                        <p className='mb-0'>Price: $<span>100</span></p>
                    </div>
                    <div className='d-flex flex-column justify-content-around'>
                        <Button id='cancel' color='danger' text='Cancel Reservation' />
                    </div>
                </li>
                <li className='list-group-item d-flex flex-row justify-content-between mt-3' style={{ backgroundColor: '#E7E5EA', border: '1px solid rgba(0,0,0,.125)', borderWidth: '0 0 1px' }}>
                    <div className='d-flex flex-column justify-content-around'>
                        <h6>Reservation No.:#</h6>
                        <p className='mb-0'>Hotel Name</p>
                        <p className='mb-0'>Room Type</p>
                        <p className='mb-0'>Price: $<span>100</span></p>
                    </div>
                    <div className='d-flex flex-column justify-content-around'>
                        <Button id='cancel' color='danger' text='Cancel Reservation' />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Reservations