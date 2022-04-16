import axios from 'axios';

async function API(entity) {

    console.log(entity);

    return axios({
        baseURL: entity.callURL,
        method: entity.callMethod,
        params: { ...entity.urlParams },
        data: JSON.stringify(entity["bodyData"]),
        headers: { ...entity.headers }
    }).then((res) => {
        return entity.callBack(res.data);
    })
}

export default API;