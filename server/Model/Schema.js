import mongoose from "mongoose";

const user =  new mongoose.Schema({
    Serial:{
        type: String,

    },
    Name:{
        type : String
    },
    Aadhar:{
        type : String
    },
    Tournament:{
        type : String
    },
    Venue:{
        type : String
    },
    Organized:{
        type : String
    },
    Position:{
        type : String
    },
    Game:{
        type : String  
    },
    AgeGrp:{
        type : String  
    },
    State:{
        type : String  
    }

})

const player = mongoose.model('playerDetail',user)
export default player