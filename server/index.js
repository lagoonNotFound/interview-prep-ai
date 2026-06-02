import express from "express"
import dotenv from"dotenv"
dotenv.config()
import connectDb from "./config/connectDb.js"


const app = express()

const PORT = process.env.PORT || 6000

app.get("/" , (req,res)=>{
    return res.json({message:"Server Started"})
})

app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`)
    connectDb()
})