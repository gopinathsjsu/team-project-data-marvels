import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import logo from '../../../assets/sample.jpg';
import { Elements, Button, API, getLinks } from '../../../common/index';
import { memberType } from '../../../common/component/options';

function Room(props) {
    let availableRooms = [];

    for (let index = 1; index <= props.roomDetail.available; index++) {
        availableRooms.push({ label: index });
    }

    const [guestCap, setGuestCap] = useState([
        { label: 1 },
        { label: 2 },
        { label: 3 }
    ])

    const [rewards, setRewards] = useState(props.roomDetail.roomprice * memberType[props.profile.data.data.membertype])
    // const links = getLinks();
    // let location = useLocation().pathname;

    // useEffect(() => {
    //     let hotelid = location.substring(location.lastIndexOf('/') + 1);

    //     API({
    //         callURL: links.hotel_detail + "{hotelid}?hotelid=" + hotelid,
    //         callMethod: "GET",
    //         callBack: (res) => {
    //             console.log(res);
    //         }
    //     })
    // }, [])

    const [price, setPrice] = useState(props.roomDetail.roomprice)

    const [val, setVal] = useState({
        startDate: '2022-05-05',
        endDate: '2022-05-06',
        noOfGuests: { label: 2 },
        noOfRooms: { label: 1 },
        ContinentalBreakfast: false,
        swimmingPool: false,
        meals: false,
        parking: false,
        fitnessRoom: false
    })

    function onchange(newval, id) {
        let temp = { ...val }
        temp[id] = newval
        let guests = temp.noOfRooms.label * 2 + temp.noOfRooms.label;
        let guestOptions = []
        for (let index = 1; index <= guests; index++) {
            guestOptions.push({ label: index })
        }

        if (id !== 'noOfGuests')
            temp.noOfGuests = { label: 2 * temp.noOfRooms.label }

        let newPrice = props.roomDetail.roomprice
        let extraGuests = temp.noOfGuests.label - (temp.noOfRooms.label * 2)

        if (extraGuests > 0)
            newPrice += (10 * extraGuests)

        if (temp.ContinentalBreakfast)
            newPrice += 10

        if (temp.swimmingPool)
            newPrice += 5

        if (temp.meals)
            newPrice += 25

        if (temp.parking)
            newPrice += 15

        if (temp.fitnessRoom)
            newPrice += 5

        setPrice(newPrice)
        setGuestCap(guestOptions);
        setVal(temp)
    }

    function submit(e) {
        e.preventDefault();
        let data = {
            ...val
        }
        console.log(data);
    }

    return (
        <div className='container-fluid h-100'>
            <div className='row' style={{ height: '100vh', maxHeight: '100vh' }}>
                <div
                    className='col-md-5 px-4 py-5'
                    style={{ height: '100vh', maxHeight: '100vh' }}
                >
                    <div className='d-flex flex-column justify-content-center h-100'>
                        <span>
                            <div className='text-center mb-4'>
                                <h4> {props.hotelDetail.hotelname} </h4>
                                <h5> {props.hotelDetail.city} </h5>
                            </div>
                            <div className='text-center mb-4'>
                                <img width='280' src={logo} alt='logo' />
                            </div>
                        </span>
                    </div>
                </div>
                <div
                    className='col-md-7 overflow-auto'
                    style={{ height: '100vh', maxHeight: '100vh', background: '#f7f7f7' }}
                >
                    <div className='d-flex flex-column justify-content-center h-100'>
                        <form id='booking_form' onSubmit={(e) => submit(e)}>
                            <div className='text-center mb-4'>
                                <h2> Room Type </h2>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <Elements formField={[{
                                            id: 'startDate',
                                            type: 'date',
                                            label: 'Check In',
                                            requiredFlag: true,
                                            autoFocus: true,
                                            value: val.startDate,
                                            disabled: true,
                                            onchange: onchange
                                        }]} />
                                    </div>
                                    <div className='col-md-6'>
                                        <Elements formField={[{
                                            id: 'endDate',
                                            type: 'date',
                                            label: 'Check Out',
                                            requiredFlag: true,
                                            autoFocus: true,
                                            value: val.endDate,
                                            disabled: true,
                                            onchange: onchange
                                        }]} />
                                    </div>
                                </div>
                                <div className='row flex'>
                                    <div className='col-md-6'>
                                        <Elements formField={[
                                            {
                                                id: 'noOfRooms',
                                                label: 'Number of Rooms',
                                                type: 'react_select',
                                                autoFocus: true,
                                                requiredFlag: true,
                                                value: val.noOfRooms,
                                                options: availableRooms,
                                                valueKey: 'label',
                                                onchange: onchange
                                            }
                                        ]} />
                                    </div>
                                    <div className='col-md-6'>
                                        <Elements formField={[
                                            {
                                                id: 'noOfGuests',
                                                label: 'Number of Guests',
                                                type: 'react_select',
                                                autoFocus: true,
                                                requiredFlag: true,
                                                value: val.noOfGuests,
                                                options: guestCap,
                                                valueKey: 'label',
                                                onchange: onchange
                                            }
                                        ]} />
                                    </div>
                                </div>
                                <div>
                                    2 guests per room
                                </div>
                                <div>extra guests $10</div>
                                <div className='row'>
                                    <h2> Amenities </h2>
                                    <div className='col-md-6'>
                                        <Elements
                                            formField={[
                                                {
                                                    id: 'ContinentalBreakfast',
                                                    type: 'checkbox',
                                                    form: 'booking_form',
                                                    value: val.ContinentalBreakfast,
                                                    label: 'Daily Continental Breakfast',
                                                    onchange: onchange,
                                                },
                                                {
                                                    id: 'swimmingPool',
                                                    type: 'checkbox',
                                                    form: 'booking_form',
                                                    value: val.swimmingPool,
                                                    label: 'Access to Swimming Pool/Jacuzzi',
                                                    onchange: onchange,
                                                },
                                                {
                                                    id: 'meals',
                                                    type: 'checkbox',
                                                    form: 'booking_form',
                                                    value: val.meals,
                                                    label: 'All Meals (Breakfast, Lunch, Dinner)',
                                                    onchange: onchange,
                                                }
                                            ]}
                                        />
                                    </div>
                                    <div className='col-md-6'>
                                        <Elements
                                            formField={[
                                                {
                                                    id: 'fitnessRoom',
                                                    type: 'checkbox',
                                                    form: 'booking_form',
                                                    value: val.fitnessRoom,
                                                    label: 'Access to Fitness Room',
                                                    onchange: onchange,
                                                },
                                                {
                                                    id: 'parking',
                                                    type: 'checkbox',
                                                    form: 'booking_form',
                                                    value: val.parking,
                                                    label: 'Parking',
                                                    onchange: onchange,
                                                }
                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                Total Cost ${price}
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Button
                                    text='Book'
                                    type='submit'
                                // loading={loading}
                                />
                                <Button
                                    text={rewards + ' rewards required'}
                                    disabled={props.profile.data.data.rewards < rewards}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        profile: state.greduce.profile
    }
}

export default connect(mapStateToProps)(Room);