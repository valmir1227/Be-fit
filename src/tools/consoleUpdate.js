 module.exports =  {
    consolreload
 }     

function consolreload(door,date){
    let d = 0
    let h = 0
    let m = 0
    let s = 0
    let dat = date
    let port = door
      setInterval(() => {
        console.clear()
        console.table(dat)
        console.log("run in http://localhost/"+ port)
        console.log(`Tempo de Execução: ${d}d ${h}h ${m} min ${s} sec`);
        s++
        if(s > 59){
            s = 0;
            m++;
            if(m > 59){
                m = 0;
                h++;
                if(h > 59){
                    h = 0;
                    d++;
                }
            }
        }
    },1000)
  }