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
                    <div key={index} className='card shadow-sm m-3 p-3'>
                        <img src={room_image} className='card-img' />
                        <h4 className='mb-0'>{roomType[item.roomtypeid]}</h4>
                        <div className='d-flex flex-row justify-content-between mt-2 mb-3'>
                            <div className='col-8 d-flex flex-column'>
                                <h5>Number of rooms available: {item.available}</h5>
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
                                text='Book room'
                                onClick={() => {
                                    let temp = {
                                        ...{
                                            title: 'Book Room',
                                            body: (
                                                <Room />
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