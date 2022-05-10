import React from 'react';
import { Button } from '../../../common/index';
import logo from '../../../assets/sample.jpg';
import { useHistory } from 'react-router-dom';

function HotelCards(props) {
    let history = useHistory();

    function findHotel(hotelid) {

        history.push({pathname: '/app/room/' + hotelid});

    }

    return (
        <>
            {
                props.data.map((item, index) => (
                    // <div id={index} className='card shadow-sm m-3' style={{ padding: '15px', width: '330px' }}>
                    <div key={index} className='card shadow-sm m-3 p-3'>
                        <h4 className='mb-0'>{item.hotelname}</h4>
                        <p text='City'>{item.city}</p>
                        <img src={logo} className='card-img' />
                        <div className='d-flex flex-row justify-content-between mt-2 mb-3'>
                            <div className='col-8 d-flex flex-column'>
                                <h5>{item.address}</h5>
                            </div>
                            <div className='d-flex align-self-center'>
                                {/* <h4>price</h4> */}
                                <i className='font-22 flex-grow-1 bi bi-star-fill'>{item.stars} </i>
                            </div>
                        </div>
                        <div className='d-flex flex-row justify-content-center'>
                            <Button variant='outline' id='details' text='Search Hotels' onClick={() => findHotel(item.hotelid)} />
                        </div>
                    </div>
                ))
            }

        </>
    )
}
export default HotelCards;