import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import getRoutes from '../routes/routes';
import { Header } from '../common';

function ProtectedWebPage(props) {
    if (props.profile.data === undefined)
        return <Redirect to='/' />
    return (

        <>
            <Header />
            <div className='page-content h-100'>
                <div className='container-fluid p-2 p-md-4'>

                    <React.Suspense>
                        <Switch>
                            {getRoutes().map((route, idx) => {
                                return (
                                    route.component && (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={(props) => <route.component {...props} {...route.props} />}
                                        />
                                    )
                                )
                            })}
                        </Switch>
                    </React.Suspense>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => { return { profile: state.greduce.profile } }

export default connect(mapStateToProps)(ProtectedWebPage);