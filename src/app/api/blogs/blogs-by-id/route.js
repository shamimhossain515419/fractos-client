
import connectToDB from "@/database";
import Blogs from "@/models/blosg";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
     try {
          await connectToDB();
          const { searchParams } = new URL(req.url);
          const id = searchParams.get("id");
            
          const extractData = await Blogs.findById(id)
          
          if (extractData) {
               return NextResponse.json({
                    success: true,
                    data: extractData,
               });
          } else {
               return NextResponse.json({
                    success: false,
                    message: "Failed to get question not found  info ! Please try again",
               });
          }


     } catch (e) {
          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }
}
