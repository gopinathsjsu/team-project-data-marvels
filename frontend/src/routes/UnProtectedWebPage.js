import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Auth from '../pages/auth';


function UnProtectedWebPage(props) {
    return (
        <Switch>
            <Route path='/' component={Auth} />
        </Switch>
    )
}

export default UnProtectedWebPage