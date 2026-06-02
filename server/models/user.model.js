import mongoose from "mongooes"

const userSchema = new mangooes.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    credits:{
        type:Number,
        default:100
    }
},{timestamps:true})

const User = mongoose.model("User", userSchema)

export default User