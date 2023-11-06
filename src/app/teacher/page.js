import Navbar from '@/Components/Navbar';
import { Lato } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const latoFont = Lato({
    weight: ['300', '400', '700', '900'],
    subsets: ['latin']
})

// THIS IS LANDING PAGE OF TEACHER FEATURES.
const page = () => {

    return (
        <div className='relative min-h-screen bg-cover bg-center bg-teacher-hero-bg'>
            {/* HERO SECTION */}
            <div class={` px-5  ${latoFont.className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `}>
                <h1 className={`text-6xl md:text-5xl font-black`}>Unlock Your Teaching Potential</h1>
                <br className='mb-2' />
                <p className='text-4xl md:text-3xl text-[#3498DB]'>Discover Our Tailored Services to Empower Educators</p>
                <br className='mb-16' />
                {/* CTA BTN GROUP */}
                <div className='flex items-center gap-8 justify-center'>
                    <Link href={'/teacher/apply'} className="px-5 py-2 border-2 hover:border-white transition-all border-[#27895C] text-white bg-[#27895C] hover:bg-[#black font-mediumFe1] rounded-full font-mediumer:shadow-lg font-bold">GET STARTED</Link>
                    <Link href={'/register'} className="px-3 py-2 bg-transparent text-white border-2 border-slate-600 hover:bg-slate-600 rounded-full hover:shadow-lg transition-all font-medium">Learn More</Link>
                </div>
            </div>

            {/* SERVICES SECTION */}
            <div>

            </div>
        </div>
    );
};

export default page;