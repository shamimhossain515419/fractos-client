import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

const FeaturedBlogCard = ({ id, detail, category, timeRequired, date, title, thumbnail }) => {
    const accentColor = 'text-[#FFD600]'
    const bodyText = 'leading-[1.4] lg:leading-[1.6] text-[16px] lg:text-[18px]'
    return (
        <div className='bg-[#0D1124] p-2 lg:p-5 rounded-md border border-[#333] mb-[80px]'>
            <div className="grid grid-cols-12 gap-5">
                {/* THUMBNAIL */}
                <div className="col-span-12 lg:col-span-4 w-full">
                    <Image src={thumbnail} alt='image' width={1000} height={1000} className='rounded-md h-full'></Image>
                </div>
                {/* RIGHT SIDE/ BLOG MAIN CONTENTS */}
                <div className="col-span-12 lg:col-span-8">
                    <div className="flex justify-between items-center">
                        {/* BLOG CATEGORY AND DATE PUBLISHED */}
                        <p className='flex items-center gap-1'>
                            <span className={`${accentColor}`}>{category}</span>
                            <span className='font-black pb-2'>.</span>
                            <span className='text-[#E8EAED]'>{date}</span>
                        </p>
                        <p className={`${accentColor}`}>{timeRequired}min read</p>
                    </div>
                    {/* TITLE AND FEATURED TEXT */}
                    <div>
                        <h2 className='text-2xl lg:text-3xl font-semibold leading-[1.2] lg:leading-[1.4] mb-5 text-[#E8EAED]'>{title}</h2>
                        <p className={`${bodyText} text-[#E8EAED] `}>
                            <LinesEllipsis
                                text={detail}
                                maxLine='3'
                                ellipsis='...'
                                trimRight
                                basedOn='letters'
                            ></LinesEllipsis>
                        </p>
                    </div>
                    {/* READ FULL BTN */}
                    <Link scroll={true} href={`/blogs/${id}`} className='flex justify-end mt-2'>
                        <button className='bg-[#0EE6B8] py-2 px-3 rounded-md text-black font-semibold hover:bg-[#0ee6b7e5]'>Read Full</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBlogCard;