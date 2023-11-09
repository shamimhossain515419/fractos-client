

import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Teachers from "@/models/teacher";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req) {
     await connectToDB();


     try {

        
          const TeacherData = await Teachers.find({});

          if (TeacherData) {
               return NextResponse.json({
                    success: true,
                    data: TeacherData,
               });
          } else {
               return NextResponse.json({
                    success: false,
                    message: "Something went wrong ! Please try again later",
               });
          }



     } catch (error) {
          console.log("Error while new user registration. Please try again");

          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }
}
