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
    { label: 'Change Status', value: '0' },
    { label: 'Checked In', value: 'Checked In' },
    { label: 'Checked Out', value: 'Checked Out' }
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