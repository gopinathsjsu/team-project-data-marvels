import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Modal, API, getLinks } from '../../common';
import Rooms from './component/Hotel.rooms';


function Hotel(props) {
    const links = getLinks();
    let modalId = 'room-modal'
    const [hotelDetail, setHotelDetails] = useState({
        hotelname: '',
        address: '',
        city: '',
        country: '',
        stars: 0
    })
    const [rooms, setRooms] = useState([])
    const [modalData, setModalData] = useState({
        title: '',
        body: '',
        footer: '',
    })

    useEffect(() => {
        setHotelDetails(props.hotel);

        API({
            callURL: links.hotel_rooms,
            callMethod: "GET",
            urlParams: { hotelid: props.hotel.hotelid, startdate: props.date.startDate, enddate: props.date.endDate },
            callBack: (res) => {
                if (res.status) {
                    setRooms(res.data);
                }
                else {
                    setRooms([]);
                }

            }
        })
    }, [])

    return (
        <>
            <div className='container d-flex flex-column justify-content-center p-4'>
                <h1>{hotelDetail.hotelname}</h1>
                <h3>{hotelDetail.address}</h3>
                <h4>{hotelDetail.city}</h4>
                <h4>{hotelDetail.country}</h4>
                <h5>Rating {hotelDetail.stars}</h5>
                <Rooms
                    hotelDetail={hotelDetail}
                    data={rooms}
                    modalId={modalId}
                    setModalData={setModalData}
                    set_hotelData={props.set_hotelData}
                />
            </div>
            <Modal
                title={modalData.title}
                body={modalData.body}
                footer={modalData.footer}
                modalId={modalId}
            />
        </>
    )
}

const mapStateToProps = (state) => { return { hotel: state.greduce.hotel, date: state.greduce.date } }

export default connect(mapStateToProps, null)(Hotel);