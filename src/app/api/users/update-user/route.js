import connectToDB from "@/database";
import User from "@/models/Users";
import { NextResponse } from "next/server";


export const dynamic = "force-dynamic";

export async function PUT(req) {

     try {
          await connectToDB();
            const extractData = await req.json();

          const {
               email, name, phone, about, batch, collage, level
          } = extractData;

          const currentUser = await User.findOne({ email });

          if (!currentUser) {
               return NextResponse.json({
                    success: false,
                    message: "User is not   found",
               });
          }


          const updatedProduct = await User.findOneAndUpdate(
               {
                    email: email,
               },
               {
                    name: extractData?.name ? extractData?.name : currentUser?.name,
                    phone: extractData?.phone ? extractData?.phone : currentUser?.phone,
                    about: extractData?.about ? extractData?.about : currentUser?.about,
                    batch: extractData?.batch ? extractData?.batch : currentUser?.batch,
                    level: extractData?.level ? extractData?.level : currentUser?.level,
                    collage: extractData?.collage ? extractData?.collage : currentUser?.collage,
                    rank: extractData?.rank ? extractData?.rank + currentUser?.rank : currentUser?.rank,
                    mark: extractData?.mark ? extractData?.mark + currentUser?.mark : currentUser?.mark,
                    exam: extractData?.exam ? extractData?.exam + currentUser?.exam : currentUser?.exam,
               },
               { new: true }
          );



          if (updatedProduct) {
               return NextResponse.json({
                    success: true,
                    message: "user updated successfully",
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