import Image from 'next/image';
import React from 'react';

const FeaturedBlogCard = () => {
    const accentColor = 'text-[#FFD600]'
    const bodyText = 'leading-[1.4] lg:leading-[1.6] text-[16px] lg:text-[18px]'
    return (
        <div className='bg-[#0D1124] p-2 lg:p-5 rounded-md border border-[#333] mb-[80px]'>
            <div className="grid grid-cols-12 gap-5">
                {/* THUMBNAIL */}
                <div className="col-span-12 lg:col-span-4 w-full">
                    <Image src={'/blogsPage/demo-thumb.webp'} width={1000} height={1000} className='rounded-md'></Image>
                </div>
                {/* RIGHT SIDE/ BLOG MAIN CONTENTS */}
                <div className="col-span-12 lg:col-span-8">
                    <div className="flex justify-between items-center">
                        {/* BLOG CATEGORY AND DATE PUBLISHED */}
                        <p className='flex items-center gap-1'>
                            <span className={`${accentColor}`}>Others</span>
                            <span className='font-black pb-2'>.</span>
                            <span className='text-[#E8EAED]'>2 November 2023</span>
                        </p>
                        <p className={`${accentColor}`}>3min read</p>
                    </div>
                    {/* TITLE AND FEATURED TEXT */}
                    <div>
                        <h2 className='text-2xl lg:text-3xl font-semibold leading-[1.2] lg:leading-[1.4] mb-5 text-[#E8EAED]'>Higher Studies After HSC? Know the Top 10 Tips and Tricks part4</h2>
                        <p className={`${bodyText} text-[#E8EAED] `}>Arts Background: For Arts students, LAW is a very demanding subject. There are many more lucrative subjects such as Economics, International Relationship (IR), Journalism, and Communication. Arts students generally believe they have fewer options than Science and Business Studies students, but this is not entirely true. They have a variety of subjects to choose from, </p>
                    </div>
                    {/* READ FULL BTN */}
                    <div className='flex justify-end'>
                        <button className='bg-[#0EE6B8] py-2 px-3 rounded-md text-black font-semibold hover:bg-[#0ee6b7e5]'>Read Full</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBlogCard;