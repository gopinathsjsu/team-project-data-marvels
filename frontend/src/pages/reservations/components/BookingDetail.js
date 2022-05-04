import React from 'react';
import { Button } from '../../../common';
import { roomType } from '../../../common/component/options';

function Bookings(props) {

    function deleteBooking(bookingId) {
        console.log(bookingId);
    }

    return (
        <>
            {
                props.data.map((item, index) => (
                    <li className='list-group-item d-flex flex-row justify-content-between mt-3' style={{ backgroundColor: '#E7E5EA', border: '1px solid rgba(0,0,0,.125)', borderWidth: '0 0 1px' }}>
                        <div className='d-flex flex-column justify-content-around'>
                            <h6>Reservation No {item.bookingid}</h6>
                            <p className='mb-0'>Hotel Name</p>
                            <p className='mb-0'>Room Type {roomType[item.roomtypeid]}</p>
                            <p className='mb-0'>Price: $<span>100</span></p>
                        </div>
                        <div className='d-flex flex-column justify-content-around'>
                            <Button id='cancel' color='danger' text='Cancel Reservation' onClick={() => deleteBooking(item.bookingid)} />
                        </div>
                    </li>
                ))
            }
        </>
    )
}

export default Bookings;