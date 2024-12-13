import React from 'react';

function getRoutes() {
    // const Hotel = React.lazy(() => import('../pages/hotels/index'))
    // const Room = React.lazy(() => import('../pages/Room/index'))
    // const Cart = React.lazy(() => import('../pages/cart/index'))

    const BookingMgmt = React.lazy(() => import('../pages/bookingmgmt/index'))
    const Home = React.lazy(() => import('../pages/home/index'))
    const Profile = React.lazy(() => import('../pages/profile/index'))
    const Hotel = React.lazy(() => import('../pages/Hotel/index'))
    const Reservations = React.lazy(() => import('../pages/reservations/index'))

    let routes = [
        // { path: '/app/hotels', name: 'Hotel', component: Hotel },
        // { path: '/app/room/:hotelid', name: 'Room', component: Room }
        // { path: '/app/cart', name: 'Cart', component: Cart },

        { path: '/app/manageBooking', name: 'Booking Management', component: BookingMgmt },
        { path: '/app/home', name: 'Home', component: Home },
        { path: '/app/profile', name: 'Profile', component: Profile },
        { path: '/app/reservations', name: 'Reservations', component: Reservations },
        { path: '/app/hotel/:hotelid', name: 'Hotel', component: Hotel },
    ]

    return routes
}

export default getRoutes