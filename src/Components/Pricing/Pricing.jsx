'use client'
// import { loadStripe } from "@stripe/stripe-js";
import React, { useContext, useEffect, useState } from 'react';
import "./Pricing.css"
import CommonTitle from '../CommonTitle/CommonTitle';
import Image from 'next/image';
import { callStripeSession, createFinalOrder } from '@/services/stripe';
import { loadStripe } from "@stripe/stripe-js";
import { GlobalContext } from '@/GlobalState';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';
import Notification from '../Notification/Notification';
import { PulseLoader } from 'react-spinners';


const Pricing = () => {
    const { user } = useContext(GlobalContext);
    const router = useRouter();
    const params = useSearchParams();
    console.log(params.get('status'));
    const publishableKey =
        "pk_test_51NEGeNGO16nc6gMPydwjPCMfVK7VSAJj5bqVJ1QDwytY7jarGEYbT6tQBZyTqgpY1c7o0UPYCHqUBEanvs1rZyoa00F2Fw14aY";
    const stripePromise = loadStripe(publishableKey);
    const [isOrderProcessing, setIsOrderProcessing] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);

    const cartItems = [{
        images: "https://i.ibb.co/37mNBjp/download-1.jpg",
        name: "Premium",
        price: 25
    }]

    const createLineItems = cartItems.map((item) => ({
        price_data: {
            currency: "usd",
            product_data: {
                images: [item.images],
                name: item.name,
            },
            unit_amount: item.price * 100,
        },
        quantity: 1,
    }));

    const card = {
        email: user?.email,
        status: true,
        amount: 25,
        name: user?.displayName
    }

    useEffect(() => {

        async function createFinal() {

            if (params.get("status") === "success") {

                setIsOrderProcessing(true);
                const res = await createFinalOrder(card)

                if (res.success) {
                    setIsOrderProcessing(false);
                    setOrderSuccess(true);
                    toast.success(res.message, {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                } else {
                    setIsOrderProcessing(false);
                    setOrderSuccess(false);
                    toast.error(res.message, {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                }

            }


        }

        createFinal();
    }, [params.get('status')])

    const handleBy = async () => {

        if (!user?.email) {
            router.push("/login")

        } else {
            const stripe = await stripePromise;
            const res = await callStripeSession(createLineItems);
            setIsOrderProcessing(true);
            const { error } = await stripe.redirectToCheckout({
                sessionId: res.id,
            });
        }



    }


    useEffect(() => {
        if (orderSuccess) {
            setTimeout(() => {
                // setOrderSuccess(false);
                router.push("/dashboard/archive");
            }, [2000]);
        }
    }, [orderSuccess]);



    const handleRoute = () => {

        if (user?.email) {
            router.push("/dashboard/archive")
        } else {
            router.push("/login")
        }
    }

    if (orderSuccess) {
        return (
            <section className="h-screen  fixed top-0 left-0  bottom-0  primaryBg  w-full z-50 ">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto mt-8 max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
                        <div className="bg-white shadow">
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
            <div className="w-full fixed top-0 left-0  bottom-0  primaryBg  bgColor flex  justify-center items-center">
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
        <div className='py-[130px]'>
            <CommonTitle title={"PLANS"}></CommonTitle>
            {/* pricing section */}
            <div className=' grid lg:grid-cols-2 gap-y-5 gap-x-20 justify-center items-start w-full mt-10'>
                {/* basic price card */}
                <div onClick={handleRoute} className=' secondBg rounded-lg p-5 w-full md:min-w-[320px] lg:min-w-[400px] shadow-lg border border-[#0EE6B8]'>
                    <div className='flex items-center justify-between mb-5'>
                        <h3 className='text-2xl md:text-4xl  primary  font-bold'>Basic</h3>
                        <p className='font-semibold text-xl'>Free</p>
                    </div>
                    <ul className='space-y-5'>
                        <li className='flex items-center gap-2'>
                            <Image src={'/warning.png'} height={20} width={20} alt='image'></Image>
                            <span className='text-xl font-semibold'>Mock Exam (8 Times)</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20} alt='image'></Image>
                            <span className='text-xl font-semibold'>Exam Review</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/wrong.png'} height={20} width={20} alt='image'></Image>
                            <span className='text-xl font-semibold'>Live Exam</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/wrong.png'} height={20} width={20} alt='image'></Image>
                            <span className='text-xl font-semibold'>Feedback & Support</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20} alt='image'></Image>
                            <span className='text-xl font-semibold'>Read & Write Blogs</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/wrong.png'} height={20} width={20} alt='image'></Image>
                            <span className='text-xl font-semibold'>Performance Analysis</span>
                        </li>
                    </ul>
                    <button className='w-full rounded-lg border-2 border-[#0EE6B8]  hover:bg-[#0EE6B8] hover:text-black capitalize text-xl mt-10 transition-all font-bold py-5'>Get Started</button>
                </div>
                {/* premium price card */}
                <div className='secondBg rounded-lg p-5 w-full md:min-w-[400px] shadow-lg border border-[#0EE6B8]'>
                    <div className='flex items-center justify-between mb-5'>
                        <h3 className='text-2xl md:text-4xl  primary  font-bold'>Premium</h3>
                        <p className='font-semibold text-xl'>$25</p>
                    </div>
                    <ul className='space-y-5'>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20} alt='image'></Image>
                            <span className='text-xl font-semibold'>Mock Exam</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20} alt='image'></Image>
                            <span className='text-xl font-semibold'>Exam Review</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20} alt='image'></Image>
                            <span className='text-xl font-semibold'>Live Exam</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20} alt='image'></Image>
                            <span className='text-xl font-semibold'>Feedback & Support</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20} alt='image'></Image>
                            <span className='text-xl font-semibold'>Read & Write Blogs</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20} alt='image'></Image>
                            <span className='text-xl font-semibold'>Performance Analysis</span>
                        </li>
                    </ul>
                    <button onClick={handleBy} className='w-full rounded-lg bg-[#0EE6B8] text-black text-xl mt-10 transition-all hover:bg-[#0EE6B8]   font-bold py-5'>Buy Now</button>
                </div>
            </div>
            <Notification></Notification>
        </div>
    );
};

export default Pricing;