import React from 'react';

import { connect } from 'react-redux';

import { set_role, set_userData } from '../../redux/dispatch/dispatch';

import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './component/login';
import SignUp from './component/signup';

function Auth(props) {
    if (props.profile.userid !== undefined) return <Redirect to='/app/home' />
    return (
        <Switch>
            <Route path='/signup'>
                <SignUp />
            </Route>
            <Route path='/login'>
                <Login set_userData={props.set_userData} set_role={props.set_role} />
            </Route>
            <Route path='/'>
                <Login set_userData={props.set_userData} set_role={props.set_role} />
            </Route>
        </Switch>
    )
}

const mapStateToProps = (state) => { return { profile: state.greduce.profile } }

const mapDispatchToProps = (dispatch) => {
    return {
        set_userData: (options) => {
            dispatch(set_userData(options))
        },
        set_role: (option) => {
            dispatch(set_role(option))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);