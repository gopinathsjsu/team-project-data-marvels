import React from 'react';

function getRoutes() {
    const Hotel = React.lazy(() => import('../pages/hotels/index'))

    let routes = [
        { path: '/app/hotel', name: 'Hotel', component: Hotel }
    ]

    return routes
}

export default getRoutes