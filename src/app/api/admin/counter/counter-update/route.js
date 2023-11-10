
import connectToDB from "@/database";
import Counters from "@/models/counter";

import { NextResponse } from "next/server";


export const dynamic = "force-dynamic";

export async function PUT(req) {

     try {
          await connectToDB();
          const extractData = await req.json();
          const { id } = extractData;
  
          console.log(extractData);
          const currentData = await Counters.findById(id );

          if (!currentData) {
               return NextResponse.json({
                    success: false,
                    message: "Id is not    found",
               });
          }
           console.log(currentData);

          const updatedProduct = await Counters.findOneAndUpdate(
               {
                    _id: id,
               },

               {
                    orders: extractData?.orders ? extractData?.orders : currentData?.orders,
                    reviews: extractData?.reviews ? extractData?.reviews : currentData?.reviews,
                    questions: extractData?.questions ? extractData?.questions : currentData?.questions,
                    student: extractData?.student ? extractData?.student : currentData?.student,
               },
               { new: true }
          );

      console.log(updatedProduct);

          if (updatedProduct) {
               return NextResponse.json({
                    success: true,
                    message: "user updated successfully",
               });
          } else {
               return NextResponse.json({
                    success: false,
                    message: "Failed to update the update user ! Please try again later",
               });
          }



     } catch (error) {
          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }

}