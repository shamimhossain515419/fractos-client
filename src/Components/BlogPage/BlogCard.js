import Image from 'next/image';
import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

const BlogCard = ({ category, thumbnail, date, timeRequired, title, detail }) => {
    const accentColor = 'text-[#FFD600]'
    const bodyText = 'leading-[1.4] lg:leading-[1.6] text-xs lg:text-base'
    return (
        <div className='bg-[#0D1124] p-2 lg:p-5 rounded-md border border-[#333]'>
            <div className="grid grid-cols-12 gap-5">
                {/* THUMBNAIL */}
                <div className="col-span-12 aspect-video">
                    <Image src={thumbnail} width={1000} height={0} className='max-h-[167px] rounded-md'></Image>
                </div>
                {/* RIGHT SIDE/ BLOG MAIN CONTENTS */}
                <div className="col-span-12">
                    <div className="flex justify-between items-center">
                        {/* BLOG CATEGORY AND DATE PUBLISHED */}
                        <p className='flex items-center gap-1 text-xs'>
                            <span className={`${accentColor}`}>{category}</span>
                            <span className='font-black pb-2'>.</span>
                            <span className='text-[#E8EAED]'>{date}</span>
                        </p>
                        <p className={`${accentColor} text-xs`}>{timeRequired}min read</p>
                    </div>
                    {/* TITLE AND FEATURED TEXT */}
                    <div>
                        <h2 className=' text-base lg:text-lg font-semibold leading-[1.2] lg:leading-[1.4] mb-5 text-[#E8EAED]'>{title}</h2>
                        <p className={`${bodyText} text-[#E8EAED]`}>
                            <LinesEllipsis
                                text={detail}
                                maxLine='4'
                                ellipsis='...'
                                trimRight
                                basedOn='letters'
                            ></LinesEllipsis></p>
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

export default BlogCard;