// const devURL = "http://localhost:8081/api/"
const devURL = "http://ec2-34-235-151-159.compute-1.amazonaws.com:8081/api/"

const dev = {
    sign_up: devURL + "users/signup",
    login: devURL + "users/signin",

    get_hotels: devURL + "hotels/getHotels",
    hotel: devURL + "hotels",

    hotel_rooms : devURL + "rooms",

    book_room: devURL + "booking"
}

function getLinks() {
    return dev
}

export default getLinks
