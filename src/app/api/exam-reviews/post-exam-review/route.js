

import connectToDB from "@/database";
import Exam_review from "@/models/exam-reviews";

import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function POST(req) {


     await connectToDB();
     try {
          const data = await req.json()
          const extendData = await Exam_review.create(data)
   
          if (extendData){
               return  NextResponse.json({
                    success: true,
                    message: "successfully Update",

               })
          } else {
               return   NextResponse.json({
                    success: false,
                    message: " Something went wrong data data not found",

               })
          }



     } catch (e) {
          return   NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",

          })
     }



} 