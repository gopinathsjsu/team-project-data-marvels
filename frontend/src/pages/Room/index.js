import React, { useState } from 'react';
// import { TextField, Grid, Box } from '@mui/material';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import Elements from '../../common/Element';

function Room() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [val, setVal] = useState({
        noOfGuests: 0,
        noOfRooms: 0
    })

    function onchange(newval, id) {
        let temp = { ...val }
        temp[id] = newval
        setVal(temp)
    }

    return (
        <p>Room Page</p>
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