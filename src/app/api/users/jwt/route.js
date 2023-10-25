

import connectToDB from "@/database";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

const key = process.env.ACCESS_TOKEN_SECRET

export async function POST(req) {
     await connectToDB();

     //validate the schema

     const data = await req.json();

     try {
          //check if the user is exists or not

       

          const token = jwt.sign(
               { data, key },
               "default_secret_key",
               { expiresIn: "20d" }
          );
         if (!token) {
               return NextResponse.json({
                    success: false,
                    massage: error.details[0].message,
               });
          }

          return NextResponse.json({
               success: true,
               data: { token },
          });

     } catch (error) {
          console.log("Error while new user registration. Please try again");

          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }
}
