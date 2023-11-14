
import connectToDB from "@/database";
import Admission from "@/models/admission";
import OrderCourse from "@/models/order2";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
     try {
          await connectToDB();
          const { searchParams } = new URL(req.url);
          const email = searchParams.get("email");
          const extractUser = await OrderCourse.findOne({ email }).populate("user").populate("course");
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
