import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { API, getLinks } from '../../common';
import Reservations from './components/Reservations';

function BookingMgmt(props) {
    let links = getLinks();
    const [reservations, setReservations] = useState([])

    useEffect(() => {
        API({
            callURL: links.hotel_booking,
            callMethod: "GET",
            urlParams: { userid: props.profile.userid },
            callBack: (res) => {
                if (res.status) {
                    setReservations(res.data);
                }
                else {
                    setReservations([]);
                }
            }
        })
    }, [])

    return (
        <div className='container d-flex flex-column justify-content-center p-4'>
            <h2>Manage Reservations</h2>
            <ul className='list-group list-group-flush mt-2'>
                <Reservations data={reservations} setReservations={setReservations} />
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.greduce.profile
    }
}

export default connect(mapStateToProps)(BookingMgmt);