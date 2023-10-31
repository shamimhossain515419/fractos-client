import { NextResponse } from "next/server";

export async function GET(req) {

     return NextResponse.json({
          message: "failed to  news Please try again later",
          name: "shmim hossain",
          roll: 4144343
     });

} 1