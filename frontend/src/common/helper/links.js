const devURL = "http://localhost:8081/api/"

const dev = {
    sign_up: devURL + "users/signup",
    login: devURL + "users/signin",

    get_hotels: devURL + "hotels/getHotels",
    hotel: devURL + "hotels",
    search_hotel: devURL + "hotels/hotels",
    hotel_detail: devURL + "hotels/"
}

function getLinks() {
    return dev
}

export default getLinks
