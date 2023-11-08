

import connectToDB from "@/database";
import allUsers from "@/models/Users";

import Joi from "joi";
import { NextResponse } from "next/server";



export const dynamic = "force-dynamic";

export async function POST(req) {
     await connectToDB();
     const newUser = await req.json();
     const { name, email, password, role, category } = newUser;
     //validate the schema
  

     try {
          //check if the user is exists or not
          const isUserAlreadyExists = await allUsers.findOne({ email });
        
          if (isUserAlreadyExists) {
               return NextResponse.json({
                    success: false,
                    message: "User is already exists. Please try with different email.",
               });
          } else {

               const newlyCreatedUser = await allUsers.create(newUser);

               if (newlyCreatedUser) {
                    return NextResponse.json({
                         success: true,
                         message: "Account created successfully.",
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
