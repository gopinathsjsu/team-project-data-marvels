import React from 'react';

function getRoutes() {
    const Login = React.lazy(() => import('../pages/auth/component/login'))
    const Signup = React.lazy(() => import('../pages/auth/component/signup'))

    let routes = [
        { path: '/login', name: 'Login', component: Login },
        { path: '/signup', name: 'Sign Up', component: Signup }
    ]

    return routes
}

export default getRoutes