import express from 'express'
import {db} from '../index.js'




const Admin = express.Router();



Admin.post('/form', async (req, res) => {
    const {
        Serial,
        Name,
        Aadhar,
        Tournament,
        Venue,
        Organized,
        Position,
        Game,
        AgeGrp,
        State
    } = req.body;

    try {
    
        await db.collection("details").insertOne({
            Serial,
            Name,
            Aadhar,
            Tournament,
            Venue,
            Organized,
            Position,
            Game,
            AgeGrp,
            State
        });

        // Create a Mongoose model instance and save the data
        // const players = new player({
        //     Serial,
        //     Name,
        //     Aadhar,
        //     Tournament,
        //     Venue,
        //     Organized,
        //     Position,
        //     Game,
        //     AgeGrp,
        //     State
        // });

        // const savedData = await players.save();

        res.status(200).json({ status: 200, message: 'Data is saved' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ status: 500, message: 'Error saving data' });
    }
});


///..............client...............//


Admin.post('/clientForm', async(req,res)=>{
    // console.log(req.body)

    const Aadhar = req.body.search
    

    const find = await db.collection("details").findOne({Aadhar : Aadhar});
    console.log(find)
    if(find){
       

 res.send({status:200, message:'find client' , findData: find})
    
    }

    else{

        
 res.send({status:400, message:"Don't have data of this aadhar"})
    }


//  res.send({status:200, message:'find client' })
})






export default Admin