
import connectToDB from "@/database";
import Questions from "@/models/question";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();


    const { searchParams } = new URL(req.url);
    const exam_name = searchParams.get("subject");
    const category = searchParams.get("category");
    console.log(category, exam_name, "shmimadfd");
    const extractUser = await Questions.findOne({ exam_name, category });
    console.log(extractUser);
    if (extractUser) {
      return NextResponse.json({
        success: true,
        data: extractUser,
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
