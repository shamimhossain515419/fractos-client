import Navbar from '@/Components/Navbar';
import { Lato } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const latoFont = Lato({
    weight: ['300', '400', '700', '900'],
    subsets: ['latin']
})


// Color Palette:

// Primary Color:

// Deep Blue: #102B3A (Background)
// Accent Colors:

// Teal Blue: #3498DB (Highlight for active elements, links, and buttons)
// White: #FFFFFF (For text and backgrounds)
// Secondary Text Color:

// Light Gray: #CCCCCC (For less prominent text)

// THIS IS LANDING PAGE OF TEACHER FEATURES.
const page = () => {

    return (
        <div className=''>
            {/* HERO SECTION */}
            <div class={` min-h-screen px-5  bg-cover bg-center bg-teacher-hero-bg ${latoFont.className} relative`}>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <h1 className={`text-6xl md:text-5xl font-black`}>Unlock Your Teaching Potential</h1>
                    <br className='mb-2' />
                    <p className='text-4xl md:text-3xl text-[#3498DB]'>Discover Our Tailored Services to Empower Educators</p>
                    <br className='mb-16' />
                    {/* CTA BTN GROUP */}
                    <div className='flex items-center gap-8 justify-center'>
                        <Link href={'/teacher/apply'} className="px-5 py-2 border-2 hover:border-white transition-all border-[#3498DB] text-white bg-[#3498DB] hover:bg-[#black font-mediumFe1] rounded-full font-mediumer:shadow-lg font-bold">GET STARTED</Link>
                        <Link href={'/register'} className="px-3 py-2 bg-transparent text-[#3498DB] border-2 border-[#3498DB] hover:bg-[#3498DB] hover:text-white hover:border-[#3498DB] rounded-full hover:shadow-lg transition-all font-medium">Learn More</Link>
                    </div>
                </div>
            </div>

            {/* SERVICES SECTION */}
            <div className='bg-[#102B3A] px-5'>
                <div className='py-20 w-3/4 mx-auto'>
                    <h2 className='text-6xl md:text-5xl font-black text-center'>Our Services</h2>
                    <p className='text-xl md:2xl text-[#CCCCCC] mt-5 mb-32 text-center capitalize'>Explore a diverse range of services designed to empower educators and enhance the learning experience for students. From live exams to interactive courses and efficient batch management, we're here to support your teaching journey. Discover the tools and resources you need to excel in the classroom and beyond.</p>
                    <div className='grid grid-cols-6 gap-10 gap-y-16'>

                        {/* LIVE EXAM */}
                        <div className="col-span-6 md:col-span-3 lg:col-span-2 rounded-lg shadow-2xl p-5 border-2 border-[#CCCCCC] bg-[#3498DB] text-white relative">
                            <div className='absolute -top-10 left-10 rounded-full p-5 shadow-2xl bg-[#3498DB]'>
                                <Image src={'/teacher-landing-page/service-icons/exam (1).png'} width={50} height={50} className='mx-auto'></Image>
                            </div>
                            <h3 className='text-lg md:xl mt-10 font-bold'>Live Exams</h3>
                            <p className='mt-3'>Conduct real-time assessments and interactive quizzes to engage your students. Instant feedback and grading.</p>
                        </div>

                        {/* Courses */}
                        <div className="col-span-6 md:col-span-3 lg:col-span-2 rounded-lg shadow-2xl p-5 border-2 border-[#CCCCCC] bg-[#3498DB] text-white relative">
                            <div className='absolute -top-10 left-10 rounded-full p-5 shadow-2xl bg-[#3498DB]'>
                                <Image src={'/teacher-landing-page/service-icons/online-class.png'} width={50} height={50} className='mx-auto'></Image>
                            </div>
                            <h3 className='text-lg md:xl mt-10 font-bold'>Courses</h3>
                            <p className='mt-3'>Teachers, create and deliver engaging courses to educate and inspire your students. Empower your teaching with customizable materials and resources.</p>
                        </div>
                        {/* Batches */}
                        <div className="col-span-6 md:col-span-3 lg:col-span-2 rounded-lg shadow-2xl p-5 border-2 border-[#CCCCCC] bg-[#3498DB] text-white relative">
                            <div className='absolute -top-10 left-10 rounded-full p-5 shadow-2xl bg-[#3498DB]'>
                                <Image src={'/teacher-landing-page/service-icons/teachings.png'} width={50} height={50} className='mx-auto'></Image>
                            </div>
                            <h3 className='text-lg md:xl mt-10 font-bold'>Live Exams</h3>
                            <p className='mt-3'>Efficiently manage student groups and learning batches. Foster collaboration and communication among educators and students.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;