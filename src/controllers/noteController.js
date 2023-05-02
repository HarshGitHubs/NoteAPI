const noteModel = require("../models/note")

const createNote = async(req,res) =>{

    const {name, age, sex, mobile, address,govtIdType, govtId, guardianDetails, nationality} = req.body;
    
    const newNote = new noteModel({
        name:name,
        age:age,
        sex:sex,
        mobile:mobile,
        address:address,
        govtIdType:govtIdType,
        govtId:govtId,
        guardianDetails:guardianDetails,
        nationality:nationality
    })

    try {
        await newNote.save();
        res.status(201).json(newNote)
    } catch (error) {
        console.log(error)
        res.status(400).json("INTERNAL SERVER ERROR")
    }
}

const updateNote = async (req,res) =>{
    const id = req.params.id;
    const {name, age, sex, mobile, address,govtIdType, govtId, guardianDetails, nationality} = req.body;

    const newNote = {
        name:name,
        age:age,
        sex:sex,
        mobile:mobile,
        address:address,
        govtIdType:govtIdType,
        govtId:govtId,
        guardianDetails:guardianDetails,
        nationality:nationality
    }

    try {
        await noteModel.findByIdAndUpdate(id , newNote , {new : true})
        res.status(200).json(newNote);
    } catch(error) {
        console.log(error)
        res.status(400).json("INTERNAL SERVER ERROR")
    }
}

const deleteNote = async (req,res) =>{
    const id = req.params.id;
    try {
        const note = await noteModel.findByIdAndRemove(id);
        res.status(202).json(note)
    } catch {
        console.log(error)
        res.status(400).json("INTERNAL SERVER ERROR")
    }
}

const getNote = async(req,res) =>{
    try{
        const notes = await noteModel.find({userId:req.userId});
        res.status(200).json(notes)
    }catch(error){
        console.log(error)
    }
}

const getAllNotes = async(req,res) =>{
    try{
        const notes = await noteModel.find({userType: 'CUSTOMER'});
        res.status(200).json(notes)
    }catch(error){
        console.log(error)
    }
}

module.exports ={
    createNote,
    updateNote,
    deleteNote,
    getNote,
    getAllNotes
}