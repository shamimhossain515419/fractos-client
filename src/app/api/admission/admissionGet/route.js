

import connectToDB from "@/database";
import admissionBlog from "@/models/admissionblog";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
     try {
          await connectToDB();
          const { searchParams } = new URL(req.url);
          const exam_name = searchParams.get("subject");
         const extractUser = await admissionBlog.find({CollegeName: { $regex: exam_name, $options: "i" }});
          if (extractUser) {
               return NextResponse.json({
                    success: true,
                    data: extractUser,
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
