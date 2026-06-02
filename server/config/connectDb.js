import mangoose from "mongoose";

const connectDb = async () =>{
    try{
        await mangoose.connect(process.env.MONGODB_URL)
        console.log("Database Connected")
    } catch(error){
        console.log(`DataBase Error ${error}`)
    }
}

export default connectDb