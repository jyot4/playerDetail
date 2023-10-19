import express  from "express";
import cors from 'cors'
import connection, {dbname} from "./Db/Connection.js";
// import schema from "./Model/Schema.js";
import Admin from "./Router/AdminRouter.js";


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended :true}))
app.use(cors({option : 'http://localhost:3000'}))


    export let  db;

// app.post('/form', async(req,res)=>{
//     console.log(req.body)

//     const {Serial ,Name ,Aadhar ,Tournament,Venue,Organized,Position,Game,AgeGrp,State} = req.body;


// db.collection("details").insertOne({Serial,
//     Name,
//     Aadhar,
//     Tournament,
//     Venue,
//     Organized,
//     Position,
//     Game,
//     AgeGrp,
//     State
// })

//     const saveData = new schema({
//         Serial,
//         Name,
//         Aadhar,
//         Tournament,
//         Venue,
//         Organized,
//         Position,
//         Game,
//         AgeGrp,
//         State

//     })

//     res.status(200).send('done')
// })


app.use(Admin)

connection.then((client)=>{
    db = client.db(dbname);
app.listen(4500,()=>{
    console.log('app is listening on 4500')
})

})