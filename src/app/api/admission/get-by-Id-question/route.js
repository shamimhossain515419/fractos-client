
import connectToDB from "@/database";
import Admission from "@/models/admission";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
     try {
          await connectToDB();
          const { searchParams } = new URL(req.url);
          const exam_name = searchParams.get("subject");
          const university = searchParams.get("university");
          console.log(university);
          const extractUser = await Admission.findOne({ exam_name, university });
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
