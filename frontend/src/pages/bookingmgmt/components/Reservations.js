import React, { useState } from 'react';
import { Button, getLinks, API } from '../../../common';
import { roomType } from '../../../common/component/options';

function Reservations(props) {
    let links = getLinks();
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    function update(id, index, status) {
        let temp = [...props.data]
        API({
            callURL: links.book_room + '/update',
            callMethod: "POST",
            bodyData: { bookingid: id, status: status },
            callBack: (res) => {
                if (res.status) {
                    temp[index]['status'] = status
                    props.setReservations(temp);
                    setError(null)
                    setSuccess(res.data)
                }
                else {
                    setError(res.message)
                    setSuccess(null)
                }
            }
        })
    }

    return (<>
        {props.data.map((item, index) => (
            <li key={index} className='list-group-item d-flex flex-row justify-content-between mt-3 border-bottom-1' style={{ backgroundColor: '#E7E5EA' }}>
                <div className='col-4 d-flex flex-column justify-content-around'>
                    <h6>Reservation No.: {item.bookingid}</h6>
                    {error !== null && <p>
                        <font color='red'>{error}</font>
                    </p>}
                    {success !== null && <p>
                        <font color='success'>{success}</font>
                    </p>}
                    <div className='d-flex flex-row justify-content-between'>
                        <p className='col-6 mb-0'>{item.username}</p>
                        <p className=' col-6 mb-0'>{item.hotelname}</p>
                    </div>
                    <div className='d-flex flex-row justify-content-between'>
                        <p className='col-6 mb-0'>Room type <span>{roomType[item.roomtypeid]}</span></p>
                        <p className='col-6 mb-0'>Number of Rooms: <span>{item.numberofrooms}</span></p>
                        <p className='col-6 mb-0'>Number of Guests: <span>{item.numberofguests}</span></p>
                    </div>
                    <p className='mb-0'>Price: $<span>{item.roomprice}</span></p>
                    <p className='mb-0'>Status:<span>{item.status}</span></p>
                </div>
                <div className='d-flex flex-column justify-content-center'>
                    <Button id='cancel' text='Cancel' onClick={() => update(item.bookingid, index, 'Cancelled')} />
                    <Button id='checkin' text='Check In' onClick={() => update(item.bookingid, index, 'Checked in')} />
                    <Button id='checkout' text='Check Out' onClick={() => update(item.bookingid, index, 'Checked Out')} />
                </div>
            </li>
        ))}
    </>)
}

export default Reservations;