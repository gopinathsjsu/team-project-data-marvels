const devURL = "http://localhost:8081/api/"

const dev = {
    sign_up: devURL + "users/signup",
    login: devURL + "users/signin",

    get_hotels: devURL + "hotels/getHotels",
    hotel: devURL + "hotels",

    hotel_rooms : devURL + "rooms"
}

function getLinks() {
    return dev
}

export default getLinks
