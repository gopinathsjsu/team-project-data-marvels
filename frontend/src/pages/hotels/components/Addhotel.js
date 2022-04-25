import React, { useState } from 'react';
import { Elements, Button, Modal, API, getLinks } from '../../../common/index';

function Hotelmodal() {
    const links = getLinks()
    const [loading, setLoading] = useState(false);
    const [val, setVal] = useState({
        hotelname: 'XYZ',
        address: 'Tardeo',
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India',
        stars: 5
    });

    function onchange(newval, id) {
        let temp = { ...val }
        temp[id] = newval
        setVal(temp)
    }

    function addHotel(e) {
        e.preventDefault();

        let data = { ...val };

        API({
            callURL: links.get_hotels,
            callMethod: "POST",
            bodyData: data,
            callBack: (res) => {
                console.log(res);
            }
        })
    }

    return (
        <div className='container d-flex flex-row justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div className='p-3' id='add_hotel_container'>
                <form onSubmit={(e) => addHotel(e)}>
                    <h1 className='d-flex flex-row justify-content-center mb-4'> Hotel Details</h1>
                    <div className='row justify-content-center'>
                        <Elements
                            formField={[
                                {
                                    id: 'hotelname',
                                    label: 'Hotel Name *',
                                    type: 'text',
                                    placeholder: 'Enter Hotel Name',
                                    requiredFlag: true,
                                    value: val.hotelname,
                                    onchange: onchange,
                                },
                                {
                                    id: 'address',
                                    label: 'Address *',
                                    type: 'text',
                                    placeholder: 'Enter Address',
                                    requiredFlag: true,
                                    value: val.address,
                                    onchange: onchange,
                                },
                                {
                                    id: 'city',
                                    label: 'City *',
                                    type: 'text',
                                    placeholder: 'Enter City',
                                    requiredFlag: true,
                                    value: val.city,
                                    onchange: onchange,
                                },
                                {
                                    id: 'state',
                                    label: 'State *',
                                    type: 'text',
                                    placeholder: 'Enter State',
                                    requiredFlag: true,
                                    value: val.state,
                                    onchange: onchange,
                                },
                                {
                                    id: 'country',
                                    label: 'Country *',
                                    type: 'text',
                                    placeholder: 'Enter Country',
                                    requiredFlag: true,
                                    value: val.country,
                                    onchange: onchange,
                                },
                                {
                                    id: 'rating',
                                    type: 'number',
                                    placeholder: 'Rating *',
                                    label: 'Rating *',
                                    requiredFlag: true,
                                    value: val.stars,
                                    onchange: onchange
                                },
                            ]} />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Button
                            text='Add'
                            type='submit'
                            loading={loading}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hotelmodal;