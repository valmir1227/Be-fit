
function storageData(obj,FileName,dat){
    const fs = require('fs')
    var obj1 = obj;

    
    fs.readFile('../data/'+FileName,{flag: 'a+',encoding:'utf-8'} , (err,data) =>{
        if(err){
            console.log(err)
            console.log(data)
        } else {
            if(data){
                obj1 = JSON.parse(data)
            }   
            obj1.table.push(dat)
            json = JSON.stringify(obj1,null,2);
            fs.writeFile('../data/' + FileName ,json,'utf-8' , () => {
                return console.log("Dados Armazendaos com sucesso")
            });
        }
    })
}

module.exports = {
    storageData
};



