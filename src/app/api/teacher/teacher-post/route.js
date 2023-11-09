import connectToDB from "@/database";
import Teachers from "@/models/teacher";
import { NextResponse } from "next/server";



export const dynamic = "force-dynamic";

export async function POST(req) {
     await connectToDB();
     const teacherData = await req.json();
     const { email, } = teacherData;
     //validate the schema
  
 console.log(teacherData);
     try {
          //check if the user is exists or not
          const isUserAlreadyExists = await Teachers.findOne({ email });
        
          if (isUserAlreadyExists) {
               return NextResponse.json({
                    success: false,
                    message: " User is already exists. Please try with different email.",
               });
          } else {

               const newlyCreatedUser = await Teachers.create(teacherData);
               console.log(newlyCreatedUser);

               if (newlyCreatedUser) {
                    return NextResponse.json({
                         success: true,
                         message: "Teacher apply  successfully.",
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
