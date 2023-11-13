"use client"
import { GlobalContext } from '@/GlobalState';
import { Courses_By_id } from '@/services/courses';
import { loadStripe } from '@stripe/stripe-js';
import { useParams, useSearchParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';

const page = () => {
     const params = useParams();
     const id = params?.id;
     const { user } = useContext(GlobalContext);
     // const publishableKey =
     //      "pk_test_51NEGeNGO16nc6gMPydwjPCMfVK7VSAJj5bqVJ1QDwytY7jarGEYbT6tQBZyTqgpY1c7o0UPYCHqUBEanvs1rZyoa00F2Fw14aY";
     // const stripePromise = loadStripe(publishableKey);
     // const [isOrderProcessing, setIsOrderProcessing] = useState(false);
     // const [showModal, setShowModal] = useState(false);
     // const [orderSuccess, setOrderSuccess] = useState(false);
     // const [currentId, setCurrentId] = useState("")
     const [coursesData, setCoursesData] = useState({})
     console.log(coursesData);


     const param = useSearchParams();
     console.log(param.get('status'));
     console.log(params);
     const handleClick = async () => {

          if (!user?.email) {
               route.push("/login")
          } else if (createLineItems) {
               const stripe = await stripePromise;
               console.log(createLineItems);
               const res = await callStripeSession(createLineItems);
               setIsOrderProcessing(true);
               const { error } = await stripe.redirectToCheckout({
                    sessionId: res.id,
               });
          }
     }

     useEffect(() => {
          async function getData(id) {
               const result = await Courses_By_id(id);
               setCoursesData(result)
          }
          getData(id)
     }, [id])



     return (
          <div className={handleClick}>
               <div>
                    <button></button>
               </div>
          </div>
     );
};

export default page;