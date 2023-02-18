
 const express = require("express")
const cors = require("cors")
 const app = express()
 const {userModel} = require("./model/db")
 const  {authenticate} = require("./middlewares/authenticate")
 const {connection} = require("./db")
const {userRoute} = require("./routes/userRoutes")
const  {notesRouter} = require("./routes/notes")

app.use(express.json())
app.use(cors())
app.use("/user" ,userRoute)
app.use(authenticate)
app.use("/notes" ,notesRouter)
app.get("/",(req,res)=>{
    res.send("home-page")
 })



 app.listen(process.env.port, async ()=>{

    try{
        await connection
        console.log("connected to db")
    }catch(err){
        console.log("cannot connected to db")
        console.log(err)
    }
    console.log(`server started at ${process.env.port}`)
 })

