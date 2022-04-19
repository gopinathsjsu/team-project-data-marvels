import axios from 'axios';

async function API(entity) {

    console.log(entity);

    return axios({
        baseURL: entity.callURL,
        method: entity.callMethod,
        data: entity.bodyData,
        // params: { ...entity.urlParams },
        // headers: { ...entity.headers }
    }).then((res) => {
        return entity.callBack(res.data);
    }).catch((err) => {
        return entity.callBack(err.response.data);
    })
}

export default API;