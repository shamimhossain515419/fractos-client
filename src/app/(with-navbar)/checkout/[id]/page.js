"use client"
import Enroll from '@/Components/Enroll/Enroll';
import Notification from '@/Components/Notification/Notification';
import { GlobalContext } from '@/GlobalState';
import { Courses_By_id } from '@/services/courses';
import { callCourses, createCoursesOrder } from '@/services/stripe';
import { loadStripe } from '@stripe/stripe-js';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const page = () => {
     const params = useParams();
     const id = params?.id;
     const router = useRouter()
     const { user, userinfo } = useContext(GlobalContext);
     const publishableKey =
          "pk_test_51NEGeNGO16nc6gMPydwjPCMfVK7VSAJj5bqVJ1QDwytY7jarGEYbT6tQBZyTqgpY1c7o0UPYCHqUBEanvs1rZyoa00F2Fw14aY";
     const stripePromise = loadStripe(publishableKey);
     const [isOrderProcessing, setIsOrderProcessing] = useState(false);
     const [showModal, setShowModal] = useState(false);
     const [orderSuccess, setOrderSuccess] = useState(false);
     const [currentId, setCurrentId] = useState("")
     const [coursesData, setCoursesData] = useState({})
     // const [userinfo, setUserinfo] = useState({})
     const paramId = useSearchParams();
     // console.log(paramId);
     // console.log(coursesData);

 console.log(coursesData);

     const cartItems = [{
          images: coursesData?.image,
          name: coursesData?.subject,
          price: coursesData?.price,
          id: coursesData?._id
     }]

     const createLineItems = cartItems.map((item) => ({
          id: id,
          price_data: {

               currency: "usd",
               product_data: {
                    images: [item.images],
                    name: item.name,
               },
               unit_amount: (item.price * 100) / 100,
          },

          quantity: 1,

     }));




     useEffect(() => {

          async function createFinal() {

               const card = {
                    name: userinfo?.name,
                    email: user?.email,
                    user: userinfo?._id,
                    course: coursesData?._id
               }

               if (paramId?.get("status") === "success" && typeof card === 'object' && card?.email && card?.user && card?.course) {

                    setIsOrderProcessing(true);
                    console.log(card, "card");
                    const res = await createCoursesOrder(card)

                   
                    if (res.success) {
                         setIsOrderProcessing(false);
                         setOrderSuccess(true)
                        
                     
                         toast.success(res.message, {
                              position: toast.POSITION.TOP_RIGHT,
                         });
                    } else {
                         setIsOrderProcessing(false);
                         setOrderSuccess(false);
                         router.push("/dashboard");
                         toast.error(res.message, {
                              position: toast.POSITION.TOP_RIGHT,
                         });
                    }

               }


          }

          createFinal();
     }, [paramId?.get('status'), user, userinfo])


     const handleClick = async () => {

          if (!user?.email) {
               router.push("/login")

          } else {
               const stripe = await stripePromise;
               const res = await callCourses(createLineItems);
               setIsOrderProcessing(true);
               const { error } = await stripe.redirectToCheckout({
                    sessionId: res.id,
               });
          }
     }


     useEffect(() => {
          async function getData(id) {
               const result = await Courses_By_id(id);
               setCoursesData(result);

          }

          getData(id)
     }, [id, user])


     useEffect(() => {
          if (orderSuccess) {
               setTimeout(() => {
                    setOrderSuccess(false);
                    router.push("/dashboard");
               }, [1000]);
          }
     }, [orderSuccess]);


     if (orderSuccess) {
          return (
               <section className="h-screen  fixed top-0 left-0  bottom-0  primaryBg  w-full z-50 ">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="mx-auto mt-8 max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
                              <div className=" primaryBg text-white flex justify-center  items-center gap-2 h-screen  shadow">
                                   <div className="px-4 py-6 sm:px-8 sm:py-10 flex flex-col gap-5">
                                        <h1 className="font-bold text-lg">
                                             Your payment is successfull and you will be redirected to
                                             orders page in 2 seconds !
                                        </h1>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          );
     }


     if (isOrderProcessing) {
          return (
               <div className="w-full fixed top-0 left-0  primaryBg   z-50   bottom-0  primaryBg  bgColor flex  justify-center items-center">
                    <PulseLoader
                         color={"#000000"}
                         loading={isOrderProcessing}
                         size={30}
                         data-testid="loader"
                    />
               </div>
          );
     }

     return (
          <div className='  min-h-[60vh]   '>
               <div>

                    <Enroll handleClick={handleClick}  coursesData={coursesData}></Enroll>
                  
               </div>
               <Notification></Notification>
          </div>
     );
};

export default page;