

import connectToDB from "@/database";
import admissionBlog from "@/models/admissionblog";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET(req) {

     try {
          await connectToDB();
          const { searchParams } = new URL(req.url);
          const path = searchParams.get("university");

          const SingleData = await admissionBlog.findOne({ path });

          if (SingleData) {
               return NextResponse.json({
                    success: true,
                    data: SingleData
               });
          } else {
               return NextResponse.json({
                    success: false,
                    message: "failed to  Blog data ! Please try again later",
               });
          }



     } catch (e) {
          console.log(e);
          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }
}
