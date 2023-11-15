import connectToDB from "@/database";
import Subscribe from "@/models/Subscribe";
import { NextResponse } from "next/server";



export const dynamic = "force-dynamic";

export async function POST(req) {
     await connectToDB();
     const SubscribeData = await req.json();
     const { email } = SubscribeData;
     //validate the schema

     try {
          //check if the user is exists or not
          const isUserAlreadyExists = await Subscribe.findOne({ email });

          if (isUserAlreadyExists) {
               return NextResponse.json({
                    success: false,
                    message: " User is already exists. Please try with different email.",
               });
          } else {

               const newlyCreatedUser = await Subscribe.create(SubscribeData);
               console.log(newlyCreatedUser);

               if (newlyCreatedUser) {
                    return NextResponse.json({
                         success: true,
                         message: "Thanks for staying with us.",
                    });
               }
          }
     } catch (error) {
          console.log("Error while new user registration. Please try again");

          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }
}
