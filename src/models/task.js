import mongoose from "mongoose";

const taskSchema = new  mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    user:{
        type:String,
        require:true,
        ref:"User"
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})
const Task =  mongoose.models.task || mongoose.model("task",taskSchema);
export default Task;