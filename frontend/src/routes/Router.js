import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UnProtectedWebPage from "./UnProtectedWebPage";
import ProtectedWebPage from "./ProtectedWebPage";

function WebPage(props) {

    return (
        <Router>
            <Switch>
                <Route path="/app" component={ProtectedWebPage} />
                <Route path="/" component={UnProtectedWebPage} />
            </Switch>
        </Router>
    )
}

export default WebPage