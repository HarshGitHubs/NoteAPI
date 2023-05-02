const mongoose = require("mongoose")

const NoteSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:String,
        require:true
    },
    sex:{
        type:String,
        require:true
    },
    mobile:{
        type:String,
        require:false
    },
    address:{
        type:String,
        require:false
    },
    govtIdType:{
        type:String,
        require:false
    },
    govtId:{
        type:String,
        require:false
    },
    guardianDetails:{
        type:String,
        require:false
    },
    nationality:{
        type:String,
        require:false
    }
},{timestamps: true});

module.exports = mongoose.model("Note" , NoteSchema);