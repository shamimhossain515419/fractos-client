


import connectToDB from "@/database";
import Blogs from "@/models/blosg";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
     try {
          await connectToDB();

         
          const extractAllOrders = await Blogs.find({})
          console.log(extractAllOrders);
          if (extractAllOrders) {
               return NextResponse.json({
                    success: true,
                    data: extractAllOrders,
               });
          } else {
               return NextResponse.json({
                    success: false,
                    message: "Data not get ! Please try again",
               });
          }


     } catch (e) {
          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }
}
