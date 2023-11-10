import connectToDB from "@/database";
import Counters from "@/models/counter";
import { NextResponse } from "next/server";


export const dynamic = "force-dynamic";

export async function POST(req) {
     try {
          await connectToDB();

          const data = await req.json();
          const CountersAddedAddress = await Counters.create(data);

          if (CountersAddedAddress) {
               return NextResponse.json({
                    success: true,
                    message: "Courses added successfully",
               });
          } else {
               return NextResponse.json({
                    success: false,
                    message: "failed to add an address ! Please try again later",
               });
          }



     } catch (e) {
          console.log(e);
          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }
}
