
// import connectToDB from "@/database";
import TeacherCourse from "@/models/courses";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
     try {
          await connectToDB();
          const { searchParams } = new URL(req.url);
          const id = searchParams.get("id");
           
          const extractData = await TeacherCourse.findById(id).populate("user");
          if (extractData) {
               return NextResponse.json({
                    success: true,
                    data: extractData,
               });
          } else {
               return NextResponse.json({
                    success: false,
                    message: "Failed to get question not found  info ! Please try again",
               });
          }


     } catch (e) {
          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }
}
