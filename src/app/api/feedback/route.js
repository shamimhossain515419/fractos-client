import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Feedback from "@/models/feedback";
import { NextResponse } from "next/server";


export const dynamic = "force-dynamic";

export async function POST(req) {
     try {
          await connectToDB();

          const data = await req.json();

          const isAuthUser = await AuthUser(req);

          if (!isAuthUser) {

               return NextResponse.json({
                    success: false,
                    message: "email not Authrization",
               });
          }

          const newlyAddedAddress = await Feedback.create(data);

          if (newlyAddedAddress) {
               return NextResponse.json({
                    success: true,
                    message: "thanks Feedback successfully",
               });
          } else {
               return NextResponse.json({
                    success: false,
                    message: "failed to add an address ! Please try again later",
               });
          }



     } catch (e) {
          console.log(e);
          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }
}
