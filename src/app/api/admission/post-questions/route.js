
import connectToDB from "@/database";
import Admission from "@/models/admission";
import { NextResponse } from "next/server";


export const dynamic = "force-dynamic";

export async function POST(req) {
   
     try {
          await connectToDB();
         
  const data = await req.json();


          const newlyAddedAddress = await Admission.create(data);

          if (newlyAddedAddress) {
               return NextResponse.json({
                    success: true,
                    message: "Question added successfully",
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
