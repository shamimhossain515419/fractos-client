import connectToDB from "@/database";
import User from "@/models/Users";
import { NextResponse } from "next/server";



export const dynamic = "force-dynamic";

export async function POST(req) {
     await connectToDB();

     //validate the schema

     try {
          //check if the user is exists or not

          const allUser = await User.find();

          if (allUser) {
               NextResponse.json({
                    success: true,
                    massage: allUser
               })
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
