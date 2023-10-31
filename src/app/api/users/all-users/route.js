
import connectToDB from "@/database";
import allUsers from "@/models/Users";

import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req) {
     await connectToDB();
  

     try {
         

          const allUser = await allUsers.find({});
          
          if (allUser) {
               return NextResponse.json({
                    success: true,
                    data: allUser,
               });
          } else {
               return NextResponse.json({
                    success: false,
                    message: "Something went wrong ! Please try again later",
               });
          }



     } catch (error) {
          console.log("Error while new user registration. Please try again");

          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }
}
