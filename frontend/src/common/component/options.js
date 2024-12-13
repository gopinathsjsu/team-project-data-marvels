const Numbers = [
    { label: 1 },
    { label: 2 },
    { label: 3 },
    { label: 4 },
    { label: 5 },
    { label: 6 },
    { label: 7 },
    { label: 8 },
    { label: 9 },
    { label: 10 },
]
const roomStatus = [
    // { label: 'Booked', value: 'Booked' },
    { label: 'Checked In', value: 'Checked In' },
    { label: 'Checked Out', value: 'Checked Out' },
    { label: 'Cancelled', value: 'Cancelled' }
]

const roomType = {
    1: 'Single',
    2: 'Double',
    3: 'Suite'
}

const memberType = {
    'Silver' : 150,
    'Gold' : 125,
    'Platinum' : 100
}

export { Numbers, roomStatus, roomType, memberType }