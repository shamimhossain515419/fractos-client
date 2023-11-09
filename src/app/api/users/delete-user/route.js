
import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import allUsers from "@/models/Users";

import { NextResponse } from "next/server";



export const dynamic = "force-dynamic";

export async function DELETE(req) {
     try {
          await connectToDB();

          const { searchParams } = new URL(req.url);
          const id = searchParams.get("id");

          const extractUser = await allUsers.deleteOne({ _id: id });

          const isAuth = AuthUser(req);

          if (!isAuth) {
               return NextResponse.json({
                    success: false,
                    message: "User not Authorization",
               });
          }

          if (extractUser) {
               return NextResponse.json({
                    success: true,
                    message: "user delete successfully update",
               });
          } else {
               return NextResponse.json({
                    success: false,
                    message: "Failed to get User  info ! Please try again",
               });
          }

     } catch (e) {
          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }
}
