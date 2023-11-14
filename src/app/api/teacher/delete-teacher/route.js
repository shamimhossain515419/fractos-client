

import connectToDB from "@/database";
import allUsers from "@/models/Users";
import Teachers from "@/models/teacher";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {

     try {
          await connectToDB();

          const { searchParams } = new URL(req.url);
          const email = searchParams.get("email");

          const currentUser = await allUsers.findOne({ email });

          if (!currentUser) {
               return NextResponse.json({
                    success: false,
                    message: "User is not   found",
               });
          }

          const updateUser = await allUsers.findOneAndUpdate(
               {
                    email: email,
               },
               { role: "user", },
               { new: true }
          );
          console.log(updateUser);



          const updatedProduct = await Teachers.deleteOne({ email: email })



          if (updatedProduct) {
               return NextResponse.json({
                    success: true,
                    message: "Teacher delete successfully",
               });
          } else {
               return NextResponse.json({
                    success: false,
                    message: "Failed to update the update user ! Please try again later",
               });
          }



     } catch (error) {
          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }

}