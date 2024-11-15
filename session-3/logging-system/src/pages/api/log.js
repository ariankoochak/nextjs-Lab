import fs from 'fs'
import path from 'path';

const Handler = (req,res)=>{
    const {statusCode,url,endpoint} = req.body;
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); 
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    

    const dir = path.resolve('public/log.csv')

    fs.appendFileSync(
        dir,
        `${statusCode} | ${url} | ${endpoint} | ${year}-${month}-${day} ${hours}:${minutes}:${seconds},\n`
    );
    
    res.send('ok!');
}

export default Handler;