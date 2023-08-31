import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import User from '../../../models/user'
import { connect } from "../../../dbconfig/dbconfig";

connect();
export async function POST(request) {
    try {
        const { username, email, password } = await request.json();
        console.log("Input in signup", username, email, password);
        if (!username || !email || !password)
            return NextResponse.json({ message: "Enter all Field", success: false }, { status: 400 })

        const user = await User.findOne({ email });
        if (user) return NextResponse.json({ message: "User Already exist", success: false }, { status: 400 })

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        await newUser.save();
        return NextResponse.json({ message: "SignUp Successfully", success: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error:error.message, success: false }, { status: 500 })
    }
}

