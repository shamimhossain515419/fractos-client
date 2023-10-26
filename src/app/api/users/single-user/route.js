import connectToDB from "@/database";
import User from "@/models/Users";
import { NextResponse } from "next/server";



export const dynamic = "force-dynamic";

export async function GET(req) {
try {
    await connectToDB();
  
      const { searchParams } = new URL(req.url);
      const email = searchParams.get("email");

      if (!email)
        return NextResponse.json({
          success: false,
          message: "User email is  found",
        });

      const extractUser = await User.findOne({email});

      if (extractUser) {
        return NextResponse.json({
          success: true,
          data: extractUser,
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Failed to get User  info ! Please try again",
        });
      }
    
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
