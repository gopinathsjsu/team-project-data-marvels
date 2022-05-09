import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import logo from '../../../assets/hotelroom.jpeg';
import { Elements, Button, API, getLinks } from '../../../common/index';
import { memberType } from '../../../common/component/options';

function Room(props) {
    const links = getLinks();
    let availableRooms = [];
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)

    for (let index = 1; index <= props.roomDetail.available; index++) {
        availableRooms.push({ label: index });
    }

    const [guestCap, setGuestCap] = useState([
        { label: 1 },
        { label: 2 },
        { label: 3 }
    ])

    const [val, setVal] = useState({
        hotelid: props.hotelDetail.hotelid,
        roomtypeid: props.roomDetail.roomtypeid,
        roomid: props.roomDetail.roomid,
        userid: props.profile.userid,
        startDate: props.date.startDate,
        endDate: props.date.endDate,
        roomprice: props.roomDetail.roomprice,
        paymenttype: 'card',
        status: 'booked',
        continentalbreakfast: false,
        swimmingpool: false,
        meals: false,
        parking: false,
        fitnessRoom: false,
        rewards: false,
        noOfGuests: { label: 2 },
        noOfRooms: { label: 1 },
        roomrewards: props.roomDetail.roomprice * memberType[props.profile.membertype],
    })

    useEffect(() => {
        setVal({
            hotelid: props.hotelDetail.hotelid,
            roomtypeid: props.roomDetail.roomtypeid,
            roomid: props.roomDetail.roomid,
            userid: props.profile.userid,
            startDate: props.date.startDate,
            endDate: props.date.endDate,
            roomprice: props.roomDetail.roomprice,
            paymenttype: 'card',
            status: 'booked',
            continentalbreakfast: false,
            swimmingpool: false,
            meals: false,
            parking: false,
            fitnessRoom: false,
            rewards: false,
            noOfGuests: { label: 2 },
            noOfRooms: { label: 1 },
            roomrewards: props.roomDetail.roomprice * memberType[props.profile.membertype],
        })
    }, [props])

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

        if (temp.continentalbreakfast)
            newPrice += 10

        if (temp.swimmingpool)
            newPrice += 5

        if (temp.meals)
            newPrice += 25

        if (temp.parking)
            newPrice += 15

        if (temp.fitnessRoom)
            newPrice += 5

        temp['roomprice'] = newPrice
        temp['roomrewards'] = newPrice * memberType[props.profile.membertype]
        setGuestCap(guestOptions);
        setVal(temp)
    }

    function submit(e) {
        setLoading(true)
        e.preventDefault();
        let data = { ...val }

        delete data['roomrewards']
        data['noOfGuests'] = data.noOfGuests.label
        data['noOfRooms'] = data.noOfRooms.label
        if (data['rewards']) {
            data['paymenttype'] = 'rewards'
            delete data['rewards']
        }

        API({
            callURL: links.book_room,
            callMethod: "POST",
            bodyData: data,
            callBack: (res) => {
                if (res.status) {
                    setSuccess("Booked Successfully")
                    setError(null)
                    window.bootstrap.Modal.getInstance(document.getElementById(props.modalId)).hide()
                }
                else {
                    setSuccess(null)
                    setError('Booking Unsuccessfully')
                }
            }
        })
        setLoading(false);
    }



    return (
        <div className='d-flex flex-row'>
            <div className='col-5 d-flex flex-column justify-content-start'>
                <div className='d-flex flex-row justify-content-center'>
                    <div className='d-flex flex-column justify-content-center'>
                        <h3> {props.hotelDetail.hotelname} </h3>
                        <h6> {props.hotelDetail.city} </h6>
                    </div>
                </div>
                <div className='d-flex flex-row justify-content-center mb-4'>
                    <img className='col-10' src={logo} alt='logo' />
                </div>
            </div>
            <div className='d-flex flex-column col-7 justify-content-center'>
                <form id='booking_form' onSubmit={(e) => submit(e)}>
                    <div className='mb-4'>
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
                            <div className='col-md-6 text-center'>
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
                            <div className='col-md-6 text-center'>
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
                        <div className='d-flex flex-start mt-2'>
                            <p>( * Note: 2 guests per room. Extra $10/guest )</p>
                        </div>
                        <div className='row'>
                            <h5> Amenities: </h5>
                            <div className='col-md-6'>
                                <Elements
                                    formField={[
                                        {
                                            id: 'continentalbreakfast',
                                            type: 'checkbox',
                                            form: 'booking_form',
                                            value: val.continentalbreakfast,
                                            label: ' Daily Continental Breakfast',
                                            onchange: onchange,
                                        },
                                        {
                                            id: 'swimmingpool',
                                            type: 'checkbox',
                                            form: 'booking_form',
                                            value: val.swimmingpool,
                                            label: ' Access to Swimming Pool/Jacuzzi',
                                            onchange: onchange,
                                        },
                                        {
                                            id: 'meals',
                                            type: 'checkbox',
                                            form: 'booking_form',
                                            value: val.meals,
                                            label: ' All Meals (Breakfast, Lunch, Dinner)',
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
                                            label: ' Access to Fitness Room',
                                            onchange: onchange,
                                        },
                                        {
                                            id: 'parking',
                                            type: 'checkbox',
                                            form: 'booking_form',
                                            value: val.parking,
                                            label: ' Parking',
                                            onchange: onchange,
                                        }
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <h6>Rewards requried {val.roomrewards}</h6>
                        <Elements
                            formField={[
                                {
                                    id: 'rewards',
                                    type: 'checkbox',
                                    form: 'booking_form',
                                    value: val.rewards,
                                    label: props.profile.rewards < val.roomrewards ? 'Not enough rewards' : 'Use rewards',
                                    onchange: onchange,
                                    disabled: props.profile.rewards < val.roomrewards
                                }
                            ]}
                        />
                    </div>
                    <div className='d-flex flex-row justify-content-start mt-4'>
                        <h5>Total Cost: ${val.roomprice}</h5>
                    </div>
                    <div className='d-flex flex-row justify-content-evenly mt-2'>
                        <Button
                            text='Book'
                            type='submit'
                            loading={loading}
                        />
                    </div>
                </form>
            </div >
        </div >
    );
}

const mapStateToProps = (state) => {
    return {
        profile: state.greduce.profile,
        date: state.greduce.date
    }
}

export default connect(mapStateToProps)(Room);