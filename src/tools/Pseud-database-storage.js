function storageData(obj,dataPath,dat,callback){
    const fs = require('fs')
    var obj1 = obj;
    fs.readFile(dataPath,{flag: 'a+',encoding:'utf-8'} , (err,data) =>{
        if(err){
            console.log(err)
            console.log(data)
        } else {
            if(data){
                obj1 = JSON.parse(data)
            }   
            obj1.table.push(dat)
            json = JSON.stringify(obj1,null,2);
            fs.writeFile(dataPath ,json,'utf-8' , () => {
                return 
            });
        }
    })
    if(callback){
       callback()
    }
}
module.exports = {
    storageData
};



