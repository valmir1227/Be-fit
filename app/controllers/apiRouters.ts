import express from 'express'
const router = express.Router()

const apirouters = {
    storageData:router.post("/api/storagedata", (req: any, res: any) =>{
        const nam: string = req.body.name
        const maill: string = req.body.email
        const surname: string = req.body.surname
        const phonNumber = req.body.phonNumber
        const passwd: string = req.body.passwd
    }),
    getData:router.get("/api/getdata", (req: any,res: any) => {
        res.json({msg:"this is data"})
    }),
}

export ={
    apirouters,
} 
 