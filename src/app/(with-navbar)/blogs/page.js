"use client"
import BlogCard from '@/Components/BlogPage/BlogCard';
import FeaturedBlogCard from '@/Components/BlogPage/FeaturedBlogCard';
import React, { useEffect, useState } from 'react';

const page = () => {
    const headingTextClasses = 'text-2xl lg:text-3xl font-bold  mb-5 text-[#6A96A1]'
    const [blogsData, setBlogsData] = useState(false);

    useEffect(() => {
        fetch('/blog-data/careerGuidelines.json')
            .then(res => res.json())
            .then(data => setBlogsData(data));
    }, [])
    return (
        <div className='w-full p-2 lg:p-0 lg:w-3/4 mx-auto mb-[130px]'>
            <h1 className={`${headingTextClasses} pt-8`}>Featured</h1>
            <FeaturedBlogCard></FeaturedBlogCard>
            <h1 className={`${headingTextClasses}`}>All Blogs</h1>
            {/* ALL BLOGS */}
            <div className="grid grid-cols-3 gap-8">
                {
                    blogsData ? blogsData.map(blog => {
                        const { id, detail, authorName, category, view, timeRequired, date, title, thumbnail } = blog;
                        return (
                            <div className="col-span-3 lg:col-span-1">
                                <BlogCard detail={detail} title={title} timeRequired={timeRequired} date={date} thumbnail={thumbnail} category={category}></BlogCard>
                            </div>
                        )
                    })
                        :
                        ''
                }

            </div>
        </div>
    );
};

export default page;