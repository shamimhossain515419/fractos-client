

import connectToDB from "@/database";
import allUsers from "@/models/Users";
import Teachers from "@/models/teacher";
import { NextResponse } from "next/server";
import { findDOMNode } from "react-dom";


export const dynamic = "force-dynamic";

export async function PUT(req) {

     try {
          await connectToDB();
          const extractData = await req.json();

          const {
               email,
          } = extractData;

          console.log(extractData);

          const currentUser = await allUsers.findOne({ email });
        
          if (!currentUser) { 
               return NextResponse.json({
                    success: false,
                    message: "User is not   found",
               });
          }

          const roleUser = currentUser?.role == "teacher"
          if (!roleUser) {
               const updateUser = await allUsers.findOneAndUpdate(
                    {
                         email: email,
                    },
                    { role: "teacher", },
                    { new: true }
               );
               console.log(updateUser);
          }



          const currentTeacher = await Teachers.findOne({ email })
          console.log(currentTeacher);

          const updatedProduct = await Teachers.findOneAndUpdate(
               {
                    email: email,
               },


               {
                    name: extractData?.name ? extractData?.name : currentTeacher?.name,
                    email: extractData?.email ? extractData?.email : currentTeacher?.email,
                    photo: extractData?.photo ? extractData?.photo : currentTeacher?.photo,
                    title: extractData?.title ? extractData?.title : currentTeacher?.title,
                    status: extractData?.status ? extractData?.status : currentTeacher?.status,
                    phone: extractData?.phone ? extractData?.phone : currentTeacher?.phone,
                    cv: extractData?.cv ? extractData?.cv : currentTeacher?.cv,
                    subject: extractData?.subject ? extractData?.subject : currentTeacher?.subject,
                    about: extractData?.about ? extractData?.about : currentTeacher?.about,
                    image: extractData?.image ? extractData?.image : currentTeacher?.image,
               },
               { new: true }
          );



          if (updatedProduct) {
               return NextResponse.json({
                    success: true,
                    message: "Teacher updated successfully",
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