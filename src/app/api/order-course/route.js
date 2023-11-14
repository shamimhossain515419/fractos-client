
import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import OrdersPrice from "@/models/Order";
import TeacherCourse from "@/models/courses";
import OrderCourse from "@/models/order2";


import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
     try {
          await connectToDB();
          const isAuthUser = await AuthUser(req);

          if (isAuthUser) {
               const data = await req.json();
               const { course, user } = data;
               const extractData = await TeacherCourse.findById(course);



               const saveNewOrder = await OrderCourse.create(data);
               console.log(saveNewOrder);
               if (saveNewOrder) {


                    if (extractData) {
                         const student = extractData?.studentIdstudentIdstudentId
                         const updatedData = {
                              studentIdstudentIdstudentId: [...student, user]
                         }

                         const data = await TeacherCourse.updateOne({ _id: course }, { $set: updatedData })

                         if (data?.modifiedCount == 1) {
                              return NextResponse.json({
                                   success: true,
                                   message: "Payment successfully upload are on the way !",
                              });
                         }

                    }


               } else {
                    return NextResponse.json({
                         success: false,
                         message: "Failed to create a order ! Please try again",
                    });
               }




          } else {
               return NextResponse.json({
                    success: false,
                    message: "You are not authticated",
               });
          }
     } catch (e) {
          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }
}
