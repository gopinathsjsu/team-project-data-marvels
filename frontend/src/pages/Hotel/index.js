import React, { useEffect, useState } from 'react';

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
        let hotelId = props.history.location.pathname;
        let id = hotelId.substring(hotelId.lastIndexOf('/') + 1)

        API({
            callURL: links.hotel + "/" + id,
            callMethod: "GET",
            callBack: (res) => {
                if (res.status) {
                    setHotelDetails(res.data);
                }
                else {
                    setHotelDetails(null);
                }

            }
        })

        API({
            callURL: links.hotel_rooms,
            callMethod: "GET",
            urlParams: { hotelid: id },
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

export default Hotel