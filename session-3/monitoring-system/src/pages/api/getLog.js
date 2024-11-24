import fs from 'fs'
import path from 'path'

const Handler = (req,res)=>{
    const dir = path.resolve("public/log.csv");
    let result = fs.readFileSync(dir);
    result = result.toLocaleString();
    result = result.split('\n');
    result = result.slice(0,result.length-1).map((row)=>{
        return row.split(',')
    })

    res.send('not finished this api')
}

export default Handler;