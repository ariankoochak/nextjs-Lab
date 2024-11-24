import axios from "axios";

export default async function (payload) {
    const BASE_URL = `http://localhost:3000/api${payload.url}`;
    const DATA = JSON.parse(`{"route" : "${payload.route}"}`)
    const data = await axios({
        headers: {
            "content-type": "application/json",
        },
        method: payload.method,
        url: BASE_URL,
        data: DATA,
    })
        .then((response) => {
            if (response.status === 200) {
                return response.data;
            } else {
                return true;
            }
        })
        .catch((error) => {
            console.log(error);
        });
    return data; 
}
