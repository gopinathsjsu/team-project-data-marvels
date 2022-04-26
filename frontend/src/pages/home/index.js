import React from 'react';
import { NavLink } from 'react-router-dom';

function Home(){
    return (
        <>
        HOME PAGE
        <NavLink to="/login">Login</NavLink>
        </>
    )
}

export default Home