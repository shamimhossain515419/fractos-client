"use client"

import ComponentLevelLoader from '@/Components/DashboardNavbar/commonLoader/Commonloader';
import Notification from '@/Components/Notification/Notification';
import { GlobalContext } from '@/GlobalState';
import { TeacherApply } from '@/services/teacher';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const page = () => {
    const { user, userinfo, componentLevelLoader, setComponentLevelLoader, Error, setError, } = useContext(GlobalContext);

    const route = useRouter();
    const { register, handleSubmit } = useForm();
    console.log(user);
    const handleTeacherApplicationForm = async (data) => {
        setComponentLevelLoader({
            loading: true,
            id: "",
        })
        console.log(data);

        const teacherData = { userIdSet: userinfo?._id, name: user?.displayName, image: user?.photoURL, email: user?.email, title: data?.title, subject: data?.subject, phone: data?.phone, cv: data?.cv, status: false, about: data?.about }
        console.log(teacherData);
        const result = await TeacherApply(teacherData)
        console.log(result);
        if (result.success == true) {

            setError(result?.massage)
            toast.success(result?.massage, "massage")
            setComponentLevelLoader({
                loading: false,
                id: "",
            })
            route.push('/')
        } else {
            route.push('/')
            toast.error(result?.message)
            setComponentLevelLoader({
                loading: false,
                id: "",
            })

            setError(result?.massage)
        }

    }
    return (

        <div className='min-h-screen overflow-y-scroll pt-[10px] text-black'>
            <div className="p-6 bg-white shadow-2xl">
                {/* BACK TO PREVIOUS PAGE */}
                <Link
                    href={'/teacher'}
                >
                    <Image src={'/arrow.png'} width={32} height={32}></Image>
                </Link>
                {/*teacher application form here */}
                <h2 className='text-center text-2xl font-black mb-5'>Teacher Application Form</h2>
                <form onSubmit={handleSubmit(handleTeacherApplicationForm)}>
                    {/* FIRST AND LAST NAME */}
                    <div className='grid grid-cols-2 gap-3'>
                        <div className='col-span-2 lg:col-span-1 flex flex-col'>
                            <label htmlFor="firstName" className='font-medium' >Your Name</label>
                            <input value={user?.displayName} {...register('name')} type="text" placeholder='Ex: Masud' name="name" className='py-2 px-3 bg-transparent rounded-md border border-gray-300 active:border-blue-500' />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor="firstName" className='font-medium'>Email Address</label>
                            <input value={user?.email}  {...register('email')} type="email" placeholder='Ex: example@gmail.com' name="email" className='py-2 px-3 rounded-md bg-transparent border border-gray-300 active:border-blue-500' />
                        </div>

                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                        <div className='flex flex-col '>
                            <label htmlFor="subject" className='font-medium'>Subject</label>
                            <input required {...register('subject')} type="text" placeholder='Ex: English' name="subject" className='py-2 px-3 rounded-md bg-transparent border border-gray-300 active:border-blue-500' />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor="title" className='font-medium'>Title</label>
                            <input required {...register('title')} type="text" placeholder='Ex: English' name="title" className='py-2 px-3 rounded-md bg-transparent border border-gray-300 active:border-blue-500' />
                        </div>

                    </div>
                    {/* EMAIL */}



                    {/* PHONE NUMBER */}
                    <div className='flex flex-col mt-5'>
                        <label htmlFor="number" className='font-medium'>Phone Number</label>
                        <input {...register('phone')} type="text" placeholder='Ex: 0158712541' name="phone" className='py-2 px-3 rounded-md border bg-transparent border-gray-300 active:border-blue-500' />
                    </div>
                    {/* ADD CV */}
                    <div className='flex flex-col gap-2 mt-5'>
                        <label htmlFor="cv" className='font-medium'>CV/RESUME Link</label>
                        <input required {...register('cv')} type="text" name="cv" placeholder='Ex: https://drive.google.com/file/d/1C0wnGAmjEtEn03RXH_t9W015z81H2PFO/view?usp=sharing' className='py-2 px-3 rounded-md border bg-transparent border-gray-300 active:border-blue-500' />

                    </div>
                    <div className='flex flex-col mt-5'>
                        <label htmlFor="about" className='font-medium'>About</label>
                        <textarea required {...register('about')} type="text" placeholder='Ex: about' name="about" rows={5} className='py-2 px-3 rounded-md border bg-transparent border-gray-300 active:border-blue-500' />
                    </div>

                    {/* TERMS AND CONDITIONS */}
                    <div className=" p-6 bg-gray-100 mt-5 rounded-md shadow-lg">
                        <h1 className='text-xl lg:text-2xl font-bold mb-5'>Terms & Conditions:</h1>
                        <ol className='space-y-3'>
                            <li className='font-semibold'>
                                <span className='text-gray-600'>1. </span>
                                Eligibility:
                                <span className='font-normal'> Applicants must meet the minimum qualifications and criteria as specified by the organization.</span>
                            </li>
                            <li className='font-semibold'>
                                <span className='text-gray-600'>2. </span>
                                Application Submission:
                                <span className='font-normal'> By submitting an application, applicants acknowledge that all provided information is accurate and complete.</span>
                            </li>
                            <li className='font-semibold'>
                                <span className='text-gray-600'>3. </span>
                                Background Check:
                                <span className='font-normal'> The organization may conduct a background check as part of the application process.</span>
                            </li>
                            <li className='font-semibold'>
                                <span className='text-gray-600'>4. </span>
                                Reference Checks:
                                <span className='font-normal'> The organization may contact provided references to verify qualifications.</span>
                            </li>
                            <li className='font-semibold'>
                                <span className='text-gray-600'>5. </span>
                                Confidentiality:
                                <span className='font-normal'> All applicant information will be kept confidential and used only for application processing.</span>
                            </li>
                            <li className='font-semibold'>
                                <span className='text-gray-600'>6. </span>
                                Equal Opportunity:
                                <span className='font-normal'> The organization is an equal opportunity employer and does not discriminate on the basis of race, gender, religion, etc.</span>
                            </li>
                        </ol>
                    </div>

                    <div>
                        {
                            Error ? <p className=' text-red-400 text-center  mx-auto text-lg md:text-xl'> {Error}</p> : <p></p>
                        }
                    </div>
                    <button
                        type='submit'
                        // Replace with the actual link to your teacher application page
                        className="text-blue-500 hover:text-white mt-5 bg-blue-100 py-2 px-4 rounded-full text-lg flex justify-center items-center font-semibold transition duration-100 w-full hover:bg-blue-500"
                    >

                        {
                            componentLevelLoader?.loading ? <><ComponentLevelLoader loading={componentLevelLoader.loading} text={'Application..'}></ComponentLevelLoader> </> : <>   Submit Application</>
                        }

                    </button>
                </form>
            </div>

            <Notification></Notification>
        </div>

    );
};

export default page;