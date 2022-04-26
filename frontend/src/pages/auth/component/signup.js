import * as React from 'react';
import { useState } from 'react';
import { Container, Typography, Box, Grid, Link, 
    TextField, Button, CssBaseline, Card,
    InputAdornment, IconButton } from '@mui/material/';
import {Visibility, VisibilityOff} from '@mui/icons-material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Elements from '../../../common/Element';
import { NavLink } from 'react-router-dom';

const theme = createTheme();

export default function SignUp() {

    const [val, setVal] = useState({
        firstName: "",
        lastName:"",
        email: "",
        password:"",
        showPassword: false,
    })

    function onChange(newval, id) {
        let temp = { ...val }
        temp[id] = newval
        setVal(temp)
    }
    const handleClickShowPassword = () => {
        setVal({
          ...val,
          showPassword: !val.showPassword,
        });
      };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    function register(e) {
        e.preventDefault();
        let data = {
            ...val
        }
        console.log(data);
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth={false} sx={{ bgcolor: '#E7E5EA', height: '100vh', 
                                                                display: 'flex', flexDirection: 'row',
                                                                justifyContent: 'center'}}>
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
                    <Typography variant="h3">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3, display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center', justifyContent: 'center' }} 
                                                            onSubmit={(e) => register(e)} id="register">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField 
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                autoComplete="given-name"
                                value={val.firstName}
                                onChange={(e) => onChange(e.target.value, "firstName")}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                name="lastName"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                autoFocus
                                autoComplete="family-name"
                                value={val.lastName}
                                onChange={(e) => onChange(e.target.value, "lastName")}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                name="email"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                autoFocus
                                autoComplete="email"
                                value={val.email}
                                onChange={(e) => onChange(e.target.value, "email")}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                name="password"
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                autoFocus
                                autoComplete="new-password"
                                type={val.showPassword ? 'text' : 'password'}
                                value={val.password}
                                onChange={(e) => onChange(e.target.value, "password")}
                                endAdornment={
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                      >
                                        {val.showPassword ? <VisibilityOff /> : <Visibility />}
                                      </IconButton>
                                    </InputAdornment>
                                  }/>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            width= "auto"
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
        </ThemeProvider>
    );
}