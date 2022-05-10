import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import HotelCards from './components/hotelCard';
import { Elements, Button, API, getLinks } from '../../common/index';

function Home() {
    const links = getLinks();
    const [loading, setLoading] = useState(false);
    const [pageLoader, setPageLoader] = useState(false);

    const [val, setVal] = useState({
        city: 'Chennai',
        startdate: '2022-05-09',
        enddate: '2022-05-10',
    })

    const [hotelResult, setHotelResult] = useState([])

    useEffect(() => {
        setPageLoader(true);
        API({
            callURL: links.hotel,
            callMethod: "GET",
            callBack: (res) => {
                if (res.status) {
                    setHotelResult(res.data);
                }
                else {
                    setHotelResult([]);
                }
            }
        })
        setPageLoader(false);
    }, [])

    function onchange(newval, id) {
        let temp = { ...val }
        temp[id] = newval
        setVal(temp)
    }

    function search(e) {
        e.preventDefault();
        setLoading(true);
        setPageLoader(true);

        let data = { ...val }

        API({
            callURL: links.hotel,
            callMethod: "GET",
            urlParams: data,
            callBack: (res) => {
                if (res.status) {
                    setHotelResult(res.data);
                }
                else {
                    setHotelResult([]);
                }
            }
        })

        setLoading(false);
        setPageLoader(false);
    }
    return (
        <div className='container d-flex flex-column justify-content-center p-4'>
            <div className='card d-flex shadow-sm flex-row justify-content-around p-3 pb-0' style={{ borderRadius: '20px', marginBottom: '40px' }}>
                <form id='search_hotel' onSubmit={(e) => search(e)} className='col-12 d-flex flex-row justify-content-around'>
                    <Elements
                        formField={[
                            {
                                id: 'city',
                                type: 'text',
                                label: 'Destination City',
                                placeholder: 'Destination City',
                                className: 'col-4',
                                requiredFlag: true,
                                value: val.city,
                                onchange: onchange
                            },
                            {
                                id: 'startdate',
                                type: 'date',
                                label: 'Check In',
                                requiredFlag: true,
                                className: 'col-2',
                                value: val.startdate,
                                onchange: onchange
                            },
                            {
                                id: 'enddate',
                                type: 'date',
                                label: 'Check Out',
                                requiredFlag: true,
                                className: 'col-2',
                                value: val.enddate,
                                onchange: onchange
                            }
                        ]}
                    />
                    <div className='d-flex align-items-center mb-3'>
                        <Button id='search' loading={loading} type='submit' text='Search Hotels' style={{ height: '40px' }} form='search_hotel' />
                    </div>
                </form>
            </div>
            {
                pageLoader ? (
                    <div className='d-flex justify-content-center'>
                        <div className="spinner-border text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>

                ) :
                    <div className='d-flex flex-row flex-wrap'>
                        {
                            hotelResult.length > 0 ?
                                <HotelCards data={hotelResult} /> :
                                <> NO RESULTS</>
                        }
                    </div>
            }
        </div>
    )
}

export default Home