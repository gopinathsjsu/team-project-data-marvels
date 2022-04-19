const devURL = "http://localhost:8081/"

const dev = {
    sign_up: devURL + "api/users/signup",
    login: devURL + "api/users/signin"
}

function getLinks() {
    return dev
}

export default getLinks
