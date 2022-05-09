import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from '../home';
import Room from '../Room';

function Auth() {

    return (
        <Switch>
            <Route path='/detail'>
                <Room />
            </Route>
            <Route path='/'>
                <Home />
            </Route>
        </Switch>
    )
}

export default Auth;