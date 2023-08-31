import { connect } from "../../../dbconfig/dbconfig.js";
import { NextResponse } from "next/server";
connect()
export async function GET(request) {
    try {
        const token = request.cookies.get("token")?.value || "";
    if(token==""){return NextResponse.json({message:"Login First",success:true},{status:200})};
        return NextResponse.json({success:true,token},{status:200});
    } catch (error) {
        return NextResponse.json({error:error.message,success:true},{status:200});
    }
}