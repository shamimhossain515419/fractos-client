"use client"

import { GetCourses } from '@/services/courses';

import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import { GlobalContext } from '@/GlobalState';
import { callStripeSession } from '@/services/stripe';
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';



const HscBatch = async () => {
    const { user } = useContext(GlobalContext);
    const publishableKey =
        "pk_test_51NEGeNGO16nc6gMPydwjPCMfVK7VSAJj5bqVJ1QDwytY7jarGEYbT6tQBZyTqgpY1c7o0UPYCHqUBEanvs1rZyoa00F2Fw14aY";
    const stripePromise = loadStripe(publishableKey);
    const [isOrderProcessing, setIsOrderProcessing] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [currentId, setCurrentId] = useState("")
    const [data, setData] = useState([]);
    const route = useRouter();


    useEffect(() => {
        async function GetData() {
            const data = await GetCourses();
            setData(data)
        }

        GetData()
    }, [2000]);



    // const cartItems = [{
    //     image: currentId?.image,
    //     name: currentId?.name,
    //     price: currentId?.price
    // }]
    const cartItems = [{
        images: currentId?.image,
        name: currentId?.subject,
        price: currentId?.price
    }]


    const createLineItems = cartItems.map((item) => ({
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


    // useEffect(() => {

    //     async function createFinal() {

    //         if (params.get("status") === "success") {

    //             setIsOrderProcessing(true);
    //             const res = await createFinalOrder(card)

    //             if (res.success) {
    //                 setIsOrderProcessing(false);
    //                 setOrderSuccess(true);
    //                 toast.success(res.message, {
    //                     position: toast.POSITION.TOP_RIGHT,
    //                 });
    //             } else {
    //                 setIsOrderProcessing(false);
    //                 setOrderSuccess(false);
    //                 toast.error(res.message, {
    //                     position: toast.POSITION.TOP_RIGHT,
    //                 });
    //             }

    //         }


    //     }
    //     createFinal();
    // }, [])


    return (
        <div className='pb-8 pt-4'>
            <div className=''>
                <div className="grid grid-cols-1 lg:grid-cols-2 ">
                    {
                        data?.length > 0 ? <>{
                            data?.map(course => <div className='col h-full ' key={course._id}>
                                <div className="md:flex flex-row-reverse border border-[#0EE6B8] primaryBg  mx-4 my-6 rounded-lg">
                                    <div className='md:w-1/2  p-4 '>
                                        {/* <Image className='w-full h-[250px] object-fill md:mt-4 rounded-lg' width={100} height={250} src={course?.image} alt="download" border="0"
                                        /> */}
                                        <Image className='w-full h-[250px] object-fill md:mt-4 rounded-lg' decoding="async" width={100} height={250} src={course?.image} alt='image'></Image>

                                    </div>
                                    <div className='md:w-1/2  p-4 font-bold '>
                                        <h1 className='font-bold text-2xl  primary '>{course.subject_name}  {course?.subject}</h1>
                                        <h2 className='mt-4 text-xl secondColor'>{course.user?.name} </h2>
                                        <p className='mt-2 text-lg '> Time: {course?.time} </p>
                                        <p className='mt-2 text-lg'> Student:  {course.limit} </p>

                                        <p className='text-red-500 text-lg mt-2'>Price: ${course.price}/=</p>
                                        <div className='flex my-4 gap-4 items-center'>
                                            <button onClick={() => route.push(`/courses/${course?._id}`)} className='font-bold  border border-[#3eeac5]  p-2 bg-transparent hover:bg-[#6bebcf]  text-white hover:text-black  my-4'>View Details</button>
                                            <div onClick={() => route.push(`/checkout/${course?._id}`)} className='font-bold cursor-pointer  border border-[#3eeac5] p-2 bg-[#6bebcf] hover:bg-transparent  text-black hover:text-white  my-4'>Enroll Now</div>
                                        </div>
                                    </div>

                                </div>


                            </div>)
                        }</> : <Loading></Loading>
                    }



                </div>

            </div>


        </div>
    );
};

export default HscBatch;