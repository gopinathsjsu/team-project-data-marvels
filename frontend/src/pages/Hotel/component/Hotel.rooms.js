import React from 'react';

import { Button } from '../../../common/index';
import { roomType } from '../../../common/component/options';

import room_image from '../../../assets/hotelroom.jpeg'
import Room from './RoomModal';

function Rooms(props) {

    return (
        <>
            {
                props.data.map((item, index) => (

                    <div key={index} className='card shadow-sm m-4 p-4 col-5'>
                        <img src={room_image} className='card-img' />
                        <div className='d-flex flex-row justify-content-between mt-1'>
                            <div>
                                <h4 className='mb-2'>{roomType[item.roomtypeid]}</h4>
                                <h6>Available: {item.available}</h6>
                            </div>
                            <div className='d-flex align-self-center'>
                                <h4>Starts with ${item.roomprice}</h4>
                            </div>
                        </div>
                        <div className='d-flex flex-row justify-content-center'>
                            <Button
                                target={props.modalId}
                                variant='outline'
                                id='details'
                                text='See Details'
                                onClick={() => {
                                    let temp = {
                                        ...{
                                            title: 'Book Room',
                                            body: (
                                                <Room
                                                    hotelDetail={props.hotelDetail}
                                                    roomDetail={item}
                                                    modalId={props.modalId}
                                                />
                                            ),
                                        },
                                    }
                                    props.setModalData(temp)
                                }}
                            />
                        </div>
                    </div>

                ))
            }

        </>
    )
}
export default Rooms;