import path from 'path'
import fs from 'fs'

const Handler = (req,res)=>{
    const rowData = `${req.body.route} , ${Date.now()} \n`;
    const dir = path.resolve("public/log.csv");
    fs.appendFileSync(dir,rowData);
    res.send('ok!')
}

export default Handler