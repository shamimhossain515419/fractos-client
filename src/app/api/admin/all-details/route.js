

import connectToDB from "@/database";
import OrdersPrice from "@/models/Order";

import allUsers from "@/models/Users";
import Admission from "@/models/admission";
import Exam_review from "@/models/exam-reviews";
import Questions from "@/models/question";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
     try {
          await connectToDB();


          const order = await OrdersPrice.find({})
          const admission = await Admission.find({})
          const exam_reviews = await Exam_review.find({})
          const allUser = await allUsers.find({})
          const questions = await Questions.find({})

          if (allUser) {
               return NextResponse.json({
                    success: true,
                    data: {
                         order,
                         exam_reviews,
                         allUser,
                         admission,
                         questions
                    },
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
