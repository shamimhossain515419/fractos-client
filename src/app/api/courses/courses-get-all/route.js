import connectToDB from "@/database";
import TeacherCourse from "@/models/courses";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
    
     try {
          await connectToDB()
           console.log("shmimdddddddddd");
          const extractAllOrders = await TeacherCourse.find({}).populate("studentIdstudentIdstudentId")
          .populate("user");
          
        if (extractAllOrders) {
               return NextResponse.json({
                    success: true,
                    data: extractAllOrders,
               });
          } else {
               return NextResponse.json({
                    success: false,
                    message: "Data not get ! Please try again",
               });
          }


     } catch (e) {
          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }
}
