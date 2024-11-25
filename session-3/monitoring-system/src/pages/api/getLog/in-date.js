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


    const {route} = req.query;
    
    
    
    
    const expData = []
    const today = new Date();
    for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(today.getDate() - i);
        const checkDate = date.toISOString().split("T")[0];
        let counter = 0
        for(const row of result){
            const rowDate = new Date(+row[1]);     
            if(checkDate == rowDate.toISOString().split("T")[0] && row[0].trim() == encodeURI(route).trim()){
                counter++;
            }
        }
        expData.push(counter)
    }    
    res.send(expData)
}

export default Handler;