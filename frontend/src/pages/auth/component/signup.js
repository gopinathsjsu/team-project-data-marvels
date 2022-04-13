import * as React from 'react';
import { useState } from 'react';
import { Container, Typography, Box, Grid, Link, TextField, Button, CssBaseline } from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Elements from '../../../common/Element';
import { NavLink } from 'react-router-dom';

const theme = createTheme();

export default function SignUp() {

    const [val, setVal] = useState({
        name: "",
        email: "",
        phoneNumber: ""
    })

    function onchange(newval, id) {
        let temp = { ...val }
        temp[id] = newval
        setVal(temp)
    }

    function register(e) {
        e.preventDefault();
        let data = {
            ...val
        }
        console.log(data);
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={(e) => register(e)} id="register">
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <Elements
                                    formField={[
                                        {
                                            type: "text",
                                            id: "name",
                                            required: true,
                                            label: "Full Name",
                                            value: val.name,
                                            onchange: onchange,
                                        },
                                        {
                                            type: "text",
                                            id: "email",
                                            required: true,
                                            label: "Email Address",
                                            value: val.email,
                                            onchange: onchange,
                                        }
                                    ]}
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={val.email}
                                    onChange={(e) => onchange(e.target.value, "email")}
                                />
                            </Grid> */}
                            <Grid item xs={12}>
                                <TextField
                                    name="Phone Number"
                                    required
                                    fullWidth
                                    id="phoneNumber"
                                    label="Phone Number"
                                    autoFocus
                                    value={val.phoneNumber}
                                    onChange={(e) => onchange(e.target.value, "phoneNumber")}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            form="register"
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <NavLink to="/" variant="body2">
                                    Already have an account? Sign in
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}