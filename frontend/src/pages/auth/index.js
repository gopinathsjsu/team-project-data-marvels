import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Login from './component/login';
import Signup from './component/signup';

function Auth(props) {
    const location = useLocation();

    return (
        <Switch>
            <Route path='/forgotpassword'>

            </Route>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/signup'>
                <Signup />
            </Route>
            <Route path='/'>
                <Login />
            </Route>
        </Switch>
    )
}

export default Auth;