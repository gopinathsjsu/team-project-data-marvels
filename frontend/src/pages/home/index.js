import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Elements from '../../common/component/Element';
import Button from '../../common/component/Button';
import logo from '../../assets/sample.jpg'
import HotelCards from './components/hotelCard';

function Home() {
    const [val, setVal] = useState({
        destination: '',
        startDate: '2022-05-10',
        endDate: '2022-05-15',
    })

    function onchange(newval, id) {
        let temp = { ...val }
        temp[id] = newval
        setVal(temp)
    }

    function search(e) {
        e.preventDefault();
        let data = {
            ...val
        }
        console.log(data);
    }
    return (
        <div className='container d-flex flex-column justify-content-center p-4'>
            <div className='card d-flex shadow-sm flex-row justify-content-around p-3 pb-0' style={{ borderRadius: '20px', marginBottom: '40px' }}>
                <form className='col-12 d-flex flex-row justify-content-around'>
                    <Elements
                        formField={[
                            {
                                id: 'destination',
                                type: 'text',
                                label: 'Destination',
                                placeholder: 'Destination',
                                className: 'col-4',
                                requiredFlag: true,
                                value: val.destination,
                                onchange: onchange
                            },
                            {
                                id: 'startDate',
                                type: 'date',
                                label: 'Check In',
                                requiredFlag: true,
                                className: 'col-2',
                                value: val.startDate,
                                onchange: onchange
                            },
                            {
                                id: 'endDate',
                                type: 'date',
                                label: 'Check Out',
                                requiredFlag: true,
                                className: 'col-2',
                                value: val.endDate,
                                onchange: onchange
                            }
                        ]}
                    />
                    <div className='d-flex align-items-center mb-3'>
                        <Button id='search' type='submit' text='Search Hotels' style={{ height: '40px' }} />
                    </div>
                </form>
            </div>
            <div className='d-flex flex-row flex-wrap'>
                <HotelCards
                    data={[{
                        hotelName: 'Hotel Name',
                        city: 'City',
                        roomType: 'Room Type',
                        roomNumbers: '2',
                        bathroomNumbers: '1',
                        price: 'Price'
                    },
                    {
                        hotelName: 'Hotel Name',
                        city: 'City',
                        roomType: 'Room Type',
                        roomNumbers: '2',
                        bathroomNumbers: '1',
                        price: 'Price'
                    },
                    {
                        hotelName: 'Hotel Name',
                        city: 'City',
                        roomType: 'Room Type',
                        roomNumbers: '2',
                        bathroomNumbers: '1',
                        price: 'Price'
                    },
                    {
                        hotelName: 'Hotel Name',
                        city: 'City',
                        roomType: 'Room Type',
                        roomNumbers: '2',
                        bathroomNumbers: '1',
                        price: 'Price'
                    }]}
                />
            </div>
        </div>
    )
}

export default Home