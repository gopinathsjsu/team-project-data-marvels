import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, API, getLinks } from '../../common/index';
import Bookings from './components/BookingDetail';

function Reservations(props) {
    let links = getLinks();
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        API({
            callURL: links.book_room,
            callMethod: "GET",
            urlParams: { userid: props.profile.userid },
            callBack: (res) => {
                if (res.status) {
                    setBookings(res.data);
                }
                else {
                    setBookings([]);
                }

            }
        })
    }, [])

    return (
        <div className='container d-flex flex-column justify-content-center p-4'>
            <h2>My Reservations</h2>

            {bookings.length === 0 ? <>No Bookings</> :
                <ul className='list-group list-group-flush mt-2'>
                    <Bookings data={bookings} />
                </ul>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.greduce.profile
    }
}

export default connect(mapStateToProps)(Reservations);