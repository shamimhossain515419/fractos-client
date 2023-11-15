"use client"

import DetailedBlog from '@/Components/BlogPage/DetailedBlog';
import Loading from '@/Components/Loading/Loading';
import { GetSingleBlogs } from '@/services/blogs';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const page = () => {
    const params = useParams();

    const { id } = params;
    console.log(id);
    const [myBlog, setMyBlog] = useState(false);
    useEffect(() => {
        const getData = async () => {
            const data = await GetSingleBlogs(id)
            setMyBlog(data)
        }
        getData()

        window.scrollTo(0, 0);
    }, [id])

    
    return (
        <div className='flex justify-center items-center gap-2 min-h-[60vh]'>
            <div>
                {
                    myBlog ?
                        <DetailedBlog detail={myBlog.detail} category={myBlog.category} timeRequired={myBlog.timeRequired} date={myBlog.date} title={myBlog.title} thumbnail={myBlog.thumbnail} authorName={myBlog.authorName} ></DetailedBlog>
                        : <Loading></Loading>

                }
            </div>
        </div>
    );
};

export default page;