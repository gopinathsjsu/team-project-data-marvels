import React from 'react';
import { useState } from 'react';
import { Container, Button, TextField, Typography, Box, Grid, Card, InputAdornment, IconButton, CssBaseline } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import API from "../../../helper/api";

const theme = createTheme();

export default function Login() {
  const [val, setVal] = useState({
    email: "",
    password: "",
    showPassword: false,
  })

  function onChange(newval, id) {
    let temp = { ...val }
    temp[id] = newval
    setVal(temp)
  }

  function login(e) {
    e.preventDefault();
    let data = {
      ...val
    }
    API({
      callURL: "",
      callMethod: "GET",
      urlParams: {},
      bodyData: data,
      headers: {},
      callBack: (res) => {
        console.log(res);
      }
    })
    console.log(data);
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


  return (
    <ThemeProvider theme={theme}>
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
          }}>
          <Typography variant="h3"> Sign in</Typography>
          <Box component="form" noValidate sx={{
            mt: 3, display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center'
          }}
            onSubmit={(e) => login(e)} id="login">
            <Grid container spacing={2}>
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
                  onChange={(e) => onChange(e.target.value, "email")} />
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
                  } />
              </Grid>
            </Grid>
            <Button variant="contained" type="submit"
              width="auto" sx={{ mt: 3, mb: 2 }}
              form="login">SIGN IN</Button>
            <Grid container justifyContent="center">
              <Grid item>
                <NavLink to="/signup"> New User? Sign Up</NavLink>
              </Grid>
            </Grid>

          </Box>
        </Card>
      </Container>
    </ThemeProvider>
  )
}