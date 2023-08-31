import { NextResponse } from "next/server";
import { connect } from "../../../dbconfig/dbconfig";
import Task from '../../../models/task'
connect();
export async function DELETE(request){
    try {
        const taskId =request.url.indexOf("=");
        const id = request.url.slice(taskId+1);
        const task = await Task.deleteOne({_id:id});
        return NextResponse.json({message:"Task Deleted",success:true},{status:200});
    } catch (error) {
        return NextResponse.json({error:error.message,success:false},{status:500})
    }
}