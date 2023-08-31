import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import User from '../../../models/user'
import { connect } from "../../../dbconfig/dbconfig";
import jwt from "jsonwebtoken";

connect();
export async function POST(request) {
    try {
        const { email, password } = await request.json();
        console.log("Input in Login", email, password);
        if (!email || !password)
            return NextResponse.json({ message: "Enter all Field", success: false }, { status: 400 })

        const user = await User.findOne({ email });
        if(!user) return NextResponse.json({message:"User Not SignUp",success:false},{status:400});

        const isMatch = bcryptjs.compare(password,user.password);
        if(!isMatch) return NextResponse.json({message:"Invalid Input",success:false},{status:400});

        const tokenContent = {
            id:user._id,
            username:user.username,
            email:user.email
        }
        const token = jwt.sign(tokenContent,process.env.JWT_SECRET,{expiresIn:'1d'});
        const response = NextResponse.json({message:"Login Successfully",success:true,user},{status:200})
        response.cookies.set("token",token,{httpOnly:true});
        return response;
    } catch (error) {
        return NextResponse.json({error:error.message,success:false},{status:500});
    }
}