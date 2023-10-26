import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";

import User from "@/models/Users";
import { NextResponse } from "next/server";



export const dynamic = "force-dynamic";

export async function GET(req) {
     await connectToDB();
     //validate the schema

     try {
          //check if the user is exists or not

          const isAuthUser = await AuthUser(req);
          if (!isAuthUser) {
               return NextResponse.json({
                    success: false,
                    message: "Authorization field",
               });
          }

          const allUser = await User.find({});
          console.log(allUser);
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
