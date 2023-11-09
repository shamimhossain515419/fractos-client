
import connectToDB from "@/database";
import Teachers from "@/models/teacher";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
     try {
          await connectToDB();

          const { searchParams } = new URL(req.url);
          const email = searchParams.get("email");
          console.log(email);
          const extractUser = await Teachers.findOne({ email });
          console.log(extractUser);
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
