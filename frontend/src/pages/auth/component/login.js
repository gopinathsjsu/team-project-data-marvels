import React from 'react';
import { Button, TextField, Typography, Link } from '@mui/material';

export default function Login() {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        required={true}
        placeholder="Enter your username"
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        variant="outlined"
        placeholder="Enter your password"
        required={true}
      />
      <Button variant="contained">Login</Button>
      <Typography variant="caption" display="block" gutterBottom>
        New User ?
      </Typography>
      <Link href="#">SignUp</Link>
    </>
  )
}