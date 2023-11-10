


import connectToDB from "@/database";
import Counters from "@/models/counter";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req) {
     try {
          await connectToDB();

         

          const extractAllOrders = await Counters.find({})
        
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
