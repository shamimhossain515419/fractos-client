"use client"
import BlogCard from '@/Components/BlogPage/BlogCard';
import FeaturedBlogCard from '@/Components/BlogPage/FeaturedBlogCard';
import { BlogGet } from '@/services/blogs';
import React, { useEffect, useState } from 'react';


const page = () => {
    const headingTextClasses = 'text-2xl lg:text-3xl font-bold  mb-5 text-[#6A96A1]'
    const [blogsData, setBlogsData] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const data = await BlogGet()
            setFeaturedBlog(data[Math.floor(Math.random() * data.length)]);
            console.log(data);
            setBlogsData(data)
        }
        getData()
    }, [1000])
    // fetch('/api/blogs/blogs-get')
    //     .then(res => res.json())
    //     .then(data => {
    //         setFeaturedBlog(data[Math.floor(Math.random() * data.length)]);
    //         setBlogsData(data);
    //     });
    console.log(blogsData);
    const { _id, detail, category, timeRequired, date, title, thumbnail } = featuredBlog;
    return (
        <div className=' flex justify-center items-center gap-2 min-h-[60]'>
            <div>
                <div className='w-full p-2 lg:p-0 lg:w-3/4 mx-auto mb-[130px]'>

                    <h1 className={`${headingTextClasses} pt-8`}>Featured</h1>
                    {/* FEATURED BLOG IS SELECTED RANDOMLY */}
                    {
                        featuredBlog ?
                            <FeaturedBlogCard id={_id} detail={detail} category={category} timeRequired={timeRequired} date={date} title={title} thumbnail={thumbnail}></FeaturedBlogCard>
                            :
                            ''
                    }
                    <h1 className={`${headingTextClasses}`}>All Blogs</h1>
                    {/* ALL BLOGS */}
                    <div className="grid grid-cols-3 gap-8">
                        {
                            blogsData ? blogsData.map(blog => {
                                const { _id, detail, category, timeRequired, date, title, thumbnail } = blog;
                                return (
                                    <div key={_id} className="col-span-3 lg:col-span-1">
                                        <BlogCard id={_id} detail={detail} title={title} timeRequired={timeRequired} date={date} thumbnail={thumbnail} category={category}></BlogCard>
                                    </div>
                                )
                            })
                                :
                                ''
                        }

                    </div>
                </div >
                <div>

                </div>
            </div>
        </div>

    );
};

export default page;