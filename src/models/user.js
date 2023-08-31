import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:[6,"Password is too short"],
    }
}) 
const User = mongoose.models.users || mongoose.model("users",userSchema);
export default User;