"use client"
import BlogCard from '@/Components/BlogPage/BlogCard';
import FeaturedBlogCard from '@/Components/BlogPage/FeaturedBlogCard';
import React from 'react';

const page = () => {
    const headingTextClasses = 'text-2xl lg:text-3xl text-white font-bold  mb-5'
    return (
        <div className='w-full p-2 lg:p-0 lg:w-3/4 mx-auto mb-[130px]'>
            <h1 className={`${headingTextClasses} pt-8`}>Featured</h1>
            <FeaturedBlogCard></FeaturedBlogCard>
            <h1 className={`${headingTextClasses}`}>All Blogs</h1>
            {/* ALL BLOGS */}
            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-3 lg:col-span-1">
                    <BlogCard></BlogCard>
                </div>
                <div className="col-span-3 lg:col-span-1">
                    <BlogCard></BlogCard>
                </div>
                <div className="col-span-3 lg:col-span-1">
                    <BlogCard></BlogCard>
                </div>
            </div>
        </div>
    );
};

export default page;