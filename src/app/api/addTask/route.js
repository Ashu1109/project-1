
import jwt from 'jsonwebtoken'
import Task from '../../../models/task'
import { connect } from '../../../dbconfig/dbconfig';
import { NextResponse } from 'next/server';

connect();
export async function POST(request){
    try {
        const {title,description} = await request.json();
        if(!title || !description) return NextResponse.json({message:"Enter All field",success:true},{status:200});
        const token = request.cookies.get("token")?.value||"";
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const userId = await decoded.id;

        const newTask = new Task({
            title,description,user:userId
        })
        await newTask.save();
        return NextResponse.json({message:"Task Added",success:true},{status:200});
    } catch (error) {
        return NextResponse.json({error:error.message,success:false},{status:500});
    }
}

export async function GET(request){
    try {
        const token = request.cookies.get("token")?.value || "";
        const decoded =  jwt.verify(token,process.env.JWT_SECRET);
        const userId = await decoded.id;

        const userTask = await Task.find({user:userId});
        return NextResponse.json({success:true,userTask},{status:200});
    } catch (error) {
        return NextResponse.json({error:error.message,success:false},{status:500});
    }
}
