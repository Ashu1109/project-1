import {NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import User from '../../../models/user'
import { connect } from "../../../dbconfig/dbconfig";
connect();
export async function GET(request) {
    try {
        const token = request.cookies.get("token")?.value || "";
        if(token=="") return NextResponse.json({message:"Login First",success:false},{status:200})
        const decodedToken = jwt.verify(token,process.env.JWT_SECRET);
        const userId =await  decodedToken.id;
        const user = await User.findOne({"_id":userId}).select("-password");
        return NextResponse.json({message:`Welcome ${user.username}`,success:true,data:user},{status:200})
    } catch (error) {
        return NextResponse.json({error:error.message,success:false},{status:500})
    }
}