



import AuthUser from "@/middleware/AuthUser";
import { NextResponse } from "next/server";

const stripe = require("stripe")("sk_test_51NEGeNGO16nc6gMPNLQWKAnCbDIhWGcQ9CJzJALKGq020sbMrbcOxmZXIlUjnJY4AInn9vkXGwTRuyoBAKSbRXsS00wfIQuIIO"
);

export const dynamic = "force-dynamic";


export async function POST(req) {
     try {
          const isAuthUser = await AuthUser(req);
          if (isAuthUser) {
               const res = await req.json();

               const data = [

                    {
                         price_data: res?.[0]?.price_data,

                         quantity: 1,
                    }
               ]
               console.log(data,);
               console.log(res, "shmimhossam");

               const session = await stripe.checkout.sessions.create({
                    line_items: data,
                    mode: "payment",
                    success_url: `http://localhost:3000/checkout/${res?.[0]?.id}` + "?status=success",
                    cancel_url: `http://localhost:3000/checkout/${res?.[0]?.id}` + "?status=cancel",
               });

               return NextResponse.json({
                    success: true,
                    id: session.id,
               });
          } else {
               return NextResponse.json({
                    success: true,
                    message: "You are not authenticated",
               });
          }
     } catch (e) {
          console.log(e);
          return NextResponse.json({
               status: 500,
               success: false,
               message: "Something went wrong ! Please try again",
          });
     }
}
