import React from 'react';
import { useState } from 'react';
import { Container, Button, Typography, Box, Grid, Card, CssBaseline } from '@mui/material';
import { NavLink } from 'react-router-dom';
import API from "../../../helper/api";
import Elements from '../../../common/Element';


export default function Login() {
  const [val, setVal] = useState({
    email: "",
    password: "",
    showPassword: false,
  })

  function onchange(newval, id) {
    let temp = { ...val }
    temp[id] = newval
    setVal(temp)
  }

  function login(e) {
    e.preventDefault();
    let data = {
      ...val
    }
    // API({
    //   callURL: "",
    //   callMethod: "GET",
    //   urlParams: {},
    //   bodyData: data,
    //   headers: {},
    //   callBack: (res) => {
    //     console.log(res);
    //   }
    // })
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
        }}>
        <Typography variant="h3"> Sign in</Typography>
        <Box component="form" noValidate sx={{
          mt: 3, display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center'
        }}
          onSubmit={(e) => login(e)} id="login">
          <Grid container spacing={2}>
            <Elements
              formField={[
                {
                  type: "email",
                  id: "email",
                  label: "Email Address",
                  value: val.email,
                  fullWidth: true,
                  required: true,
                  autoFocus: true,
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
  )
}