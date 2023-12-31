// import connectToDB from "@/database";
// import OrderCourse from "@/models/order2";
// import { NextResponse } from "next/server";

import connectToDB from "@/database";
import OrderCourse from "@/models/order2";
import { NextResponse } from "next/server";


export const dynamic = "force-dynamic";

export async function GET(req) {
     try {
          await connectToDB();

          const extractUser = await OrderCourse.find({}).populate("course").populate("user")
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
