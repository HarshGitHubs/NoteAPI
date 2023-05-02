const express = require("express");
const app  = express();
const noteRouter = require("./routes/noteRoutes");
const dotenv = require("dotenv");

dotenv.config()


const mongoose = require("mongoose");
app.use(express.json());
app.use("/note",noteRouter)

app.get("/" , (req,res)=>{
    res.send("hello")
} )

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://harsh49566:hxd577@cluster0.60ci5n8.mongodb.net/notes_db?retryWrites=true&w=majority")
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Serve has started at ${PORT}`)
    })
})
.catch((error)=>console.log(error))
