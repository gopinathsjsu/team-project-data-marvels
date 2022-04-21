import React, { useState, useEffect } from 'react';
import logo from './img/ActivityDiagram.jpeg';
import { useLocation } from 'react-router-dom';
import { Elements, Button, API, getLinks } from '../../common/index';
import { Numbers } from '../../common/component/options';

function Room() {
    const links = getLinks();
    let location = useLocation().pathname;

    useEffect(() => {
        let hotelid = location.substring(location.lastIndexOf('/') + 1);

        API({
            callURL: links.hotel_detail + "{hotelid}?hotelid=" + hotelid,
            callMethod: "GET",
            callBack: (res) => {
                console.log(res);
            }
        })
    }, [])

    const [val, setVal] = useState({
        startDate: '2022-05-05',
        endDate: '2022-05-06',
        noOfGuests: { label: 2 },
        noOfRooms: { label: 1 },
        ContinentalBreakfast: false,
        swimmingPool: false,
        meals: false,
        rewards: false,
        parking: false,
        fitnessRoom: false
    })

    function onchange(newval, id) {
        let temp = { ...val }
        temp[id] = newval
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
                                <h4> Hotel Name </h4>
                                <h5> city </h5>
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
                                            onchange: onchange
                                        }]} />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <Elements formField={[
                                            {
                                                id: 'noOfRooms',
                                                label: 'Number of Rooms',
                                                type: 'react_select',
                                                autoFocus: true,
                                                requiredFlag: true,
                                                value: val.noOfRooms,
                                                options: Numbers,
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
                                                options: Numbers,
                                                valueKey: 'label',
                                                onchange: onchange
                                            }
                                        ]} />
                                    </div>
                                </div>
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
                                                },
                                                {
                                                    id: 'rewards',
                                                    type: 'checkbox',
                                                    form: 'booking_form',
                                                    value: val.rewards,
                                                    label: 'Use Rewards',
                                                    onchange: onchange,
                                                }
                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Button
                                    text='Book'
                                    type='submit'
                                // loading={loading}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        // <Box
        //     sx={{
        //         display: 'flex',
        //         flexDirection: { xs: 'row' },
        //         alignItems: 'center',
        //         bgcolor: 'background.paper',
        //         overflow: 'hidden',
        //         borderRadius: '12px',
        //         boxShadow: 1,
        //         fontWeight: 'bold',
        //         height: '100vh',
        //         justifyContent: "center"
        //     }}
        // >
        //     <Box
        //         component="img"
        //         sx={{
        //             height: 233,
        //             width: 350,
        //         }}
        //         alt="The house from the offer."
        //         src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        //     />
        //     <Box
        //         sx={{
        //             display: 'flex',
        //             flexDirection: 'column',
        //             alignItems: { xs: 'center', md: 'flex-start' },
        //             m: 3,
        //             minWidth: { md: 350 },
        //         }}
        //     >
        //         <h1>
        //             Room Type
        //         </h1>
        //         <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
        //             <LocalizationProvider dateAdapter={AdapterDateFns}>
        //                 <DesktopDatePicker
        //                     label="Check In Date"
        //                     value={startDate}
        //                     minDate={new Date()}
        //                     onChange={(newValue) => {
        //                         setStartDate(newValue);
        //                     }}
        //                     renderInput={(params) => <TextField {...params} />}
        //                 />
        //                 <DesktopDatePicker
        //                     label="Check Out Date"
        //                     value={endDate}
        //                     minDate={new Date()}
        //                     onChange={(newValue) => {
        //                         setEndDate(newValue);
        //                     }}
        //                     renderInput={(params) => <TextField {...params} />}
        //                 />
        //             </LocalizationProvider>
        //         </Box>
        //         <Box
        //             sx={{
        //                 mt: 1.5,
        //                 p: 0.5,
        //                 borderRadius: '5px',
        //                 color: 'primary.main',
        //                 fontWeight: 'medium',
        //                 display: 'flex',
        //                 fontSize: 12,
        //                 alignItems: 'center',
        //                 '& svg': {
        //                     fontSize: 21,
        //                     mr: 0.5,
        //                 },
        //             }}
        //         >
        //             <Grid container spacing={2}>
        //                 {/* <Elements 
        //                     formFeild={[
        //                         {
        //                             type: "number",
        //                             id: "noOfGuests",
        //                             label: "Number of Guests",
        //                             value: val.noOfGuests,
        //                             autoFocus: true,
        //                             required: true,
        //                             fullWidth: false,
        //                             onchange: onchange
        //                           },
        //                           {
        //                             type: "number",
        //                             id: "noOfRooms",
        //                             label: "Number of Rooms",
        //                             value: val.noOfRooms,
        //                             autoFocus: true,
        //                             required: true,
        //                             fullWidth: false,
        //                             onchange: onchange
        //                           }
        //                     ]}
        //                 /> */}
        //                 <Grid item xs={6}>
        //                     <TextField
        //                         id="noOfGuests"
        //                         label="Number of Guests"
        //                         type="number"
        //                         InputProps={{
        //                             inputProps: {
        //                                 max: 10, min: 0
        //                             }
        //                         }}
        //                         value={val.noOfGuests}
        //                         onChange={(e) => {
        //                             var value = parseInt(e.target.value, 10);

        //                             if (value > 10) value = 10;
        //                             if (value < 0) value = 0;

        //                             console.log(value);
        //                         }}
        //                     />
        //                 </Grid>
        //                 <Grid item xs={6}>
        //                     <TextField
        //                         id="noOfRooms"
        //                         label="Number of Rooms"
        //                         type="number"
        //                         InputProps={{
        //                             inputProps: {
        //                                 max: 10, min: 0
        //                             }
        //                         }}
        //                     />
        //                 </Grid>
        //             </Grid>

        //         </Box>
        //     </Box>
        // </Box>
    );
}

export default Room;