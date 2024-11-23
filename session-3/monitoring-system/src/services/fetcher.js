import axios from "axios";

export default async function (payload) {
    const BASE_URL = `https://fakestoreapi.com${payload.url}`;
    const data = await axios({
        method: payload.method,
        url: BASE_URL,
    })
    .then((response) => {
        if(response.status === 200){
            return response.data
        }
        else{
            return true;
        }
    })
    .catch((error) => {
        console.log(error);
    });
    return data; 
}
