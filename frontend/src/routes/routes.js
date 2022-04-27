import React from 'react';

function getRoutes() {
    const Hotel = React.lazy(() => import('../pages/hotels/index'))
    const Cart = React.lazy(() => import('../pages/cart/index'))
    const BookingMgmt = React.lazy(() => import('../pages/bookingmgmt/index'))
    const Reservations = React.lazy(() => import('../pages/reservations/index'))

    let routes = [
        // { path: '/app/hotels', name: 'Hotel', component: Hotel },
        { path: '/app/cart', name: 'Cart', component: Cart },
        // { path: '/app/bookingmgmt', name: 'Booking Management', component: BookingMgmt },
        { path: '/app/reservations', name: 'Reservations', component: Reservations },
    ]

    return routes
}

export default getRoutes