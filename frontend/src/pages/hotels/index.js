import React, { useState, useEffect } from 'react';
import { Button, Modal, API, getLinks } from '../../common';
import Hotelmodal from './components/Addhotel';

function Hotels() {
    const links = getLinks();
    const [modalData, setModalData] = useState({ title: '', body: '', footer: '' })
    const modalId = 'hotel-modal';

    const [hotelResult, setHotelResult] = useState([]);

    useEffect(() => {
        API({
            callURL: links.get_hotels,
            callMethod: "GET",
            callBack: (res) => {
                setHotelResult(res);
            }
        })
    }, [])

    return (
        <>
            <div className='container d-flex flex-column justify-content-center p-4'>
                <div className='d-flex flex-row justify-content-between'>
                    <h2>Hotels</h2>
                    <div className='d-flex flex-column justify-content-center'>
                        {/* <Button id='addHotel' text='Add Hotel' />
                         */}
                        <Button
                            text='Add Hotel'
                            target={modalId}
                            onClick={() => {
                                let temp = {
                                    title: 'Add Hotel',
                                    body: (
                                        <Hotelmodal modalId={modalId} setModalData={setModalData} />
                                    ),
                                }
                                setModalData(temp)
                            }}
                        />
                    </div>
                </div>
                <ul className='list-group list-group-flush mt-2'>
                    {hotelResult.map((item, index) => (
                        <li key={index} className='list-group-item d-flex flex-row justify-content-between mt-3 border-bottom-1' style={{ backgroundColor: '#E7E5EA' }}>
                            <div className='col-4 d-flex flex-column justify-content-around'>
                                <h6>{item.hotelname}</h6>
                                <p className='mb-0'>{item.address}</p>
                                <p className='mb-0'>{item.city} <span>, {item.state}</span><span>, {item.country}</span></p>
                            </div>
                            <div className='d-flex flex-column justify-content-center'>
                                <p>{item.stars}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <Modal
                modalId={modalId}
                title={modalData.title}
                body={modalData.body}
                footer={modalData.footer}
            />
        </>
    )
}
export default Hotels
