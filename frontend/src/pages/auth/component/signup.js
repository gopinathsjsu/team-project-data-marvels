import * as React from 'react';
import { useState } from 'react';
import { Container, Typography, Box, Grid, Button, CssBaseline, Card } from '@mui/material/';
import Elements from '../../../common/Element';
import { NavLink } from 'react-router-dom';

export default function SignUp() {

    const [val, setVal] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        showPassword: false,
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
        <Container component="main" maxWidth={false} sx={{
            bgcolor: '#E7E5EA', height: '100vh',
            display: 'flex', flexDirection: 'row',
            justifyContent: 'center'
        }}>
            <CssBaseline />
            <Card
                sx={{
                    maxWidth: 600,
                    height: 'fit-content',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: 6,
                    paddingBottom: 6,
                    paddingLeft: 15,
                    paddingRight: 15,
                    marginTop: 10
                }}
            >
                <Typography variant="h3">Sign up</Typography>
                <Box component="form" noValidate sx={{
                    mt: 3, display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center'
                }}
                    onSubmit={(e) => register(e)} id="register">
                    <Grid container spacing={2}>
                        <Elements
                            formField={[
                                {
                                    type: "text",
                                    id: "firstName",
                                    label: "First Name",
                                    value: val.firstName,
                                    autoFocus: true,
                                    required: true,
                                    fullWidth: true,
                                    onchange: onchange
                                },
                                {
                                    type: "text",
                                    id: "lastName",
                                    label: "Last Name",
                                    value: val.lastName,
                                    autoFocus: true,
                                    required: true,
                                    fullWidth: true,
                                    onchange: onchange
                                },
                                {
                                    type: "text",
                                    id: "email",
                                    label: "Email Address",
                                    value: val.email,
                                    autoFocus: true,
                                    required: true,
                                    fullWidth: true,
                                    onchange: onchange
                                },
                                {
                                    type: "password",
                                    id: "password",
                                    label: "Password",
                                    value: val.password,
                                    autoFocus: true,
                                    required: true,
                                    fullWidth: true,
                                    onchange: onchange
                                }
                            ]}
                        />
                    </Grid>
                    <Button
                        type="submit"
                        width="auto"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        form="register"
                    >
                        SIGN UP
                    </Button>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <NavLink to="/login">
                                Already have an account? Sign in
                            </NavLink>
                        </Grid>
                    </Grid>
                </Box>
            </Card>
        </Container>
    );
}