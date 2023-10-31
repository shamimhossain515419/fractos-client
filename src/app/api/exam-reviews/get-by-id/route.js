

import connectToDB from "@/database";
import Exam_review from "@/models/exam-reviews";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET(req) {

     await connectToDB();
     try {

          const { searchParams } = new URL(req.url);
          const id = searchParams.get("id");
      console.log(id,"shmnadfdd");

          const extractUser = await Exam_review.findById(id);

          if (extractUser) {
               return NextResponse.json({
                    success: true,
                    data: extractUser,

               })
          } else {
               return NextResponse.json({
                    success: false,
                    message: " successfully Update",

               })
          }



     } catch (e) {
          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",

          })
     }



} 