import axios from "axios";

export default function(statusCode,url,endpoint){
    console.log("genLog");
    
    const API = `http://localhost:3000/api/log`;
    const dataObj = JSON.parse(`{
            "statusCode" : "${statusCode}",
            "url" : "${url}",
            "endpoint" : "${endpoint}"
    }`);
    axios({
        headers: {
            "content-type": "application/json",
        },
        data: dataObj,
        method: "post",
        url: API,
    })
    return 0;
}