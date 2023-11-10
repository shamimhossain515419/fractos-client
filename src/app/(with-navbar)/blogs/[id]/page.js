"use client"

import DetailedBlog from '@/Components/BlogPage/DetailedBlog';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const page = () => {
    const params = useParams();

    const { id } = params;
    console.log(id);
    const [myBlog, setMyBlog] = useState(false);
    useEffect(() => {
        fetch('/blog-data/careerguidelines.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyBlog(data.find(blog => blog.id = parseInt(id)))
            })

        window.scrollTo(0, 0);
    }, [id])
    return (
        <div className=' flex justify-center items-center gap-2 min-h-[60vh]'>
            <div>
                {
                    myBlog ?
                        <DetailedBlog detail={myBlog.detail} category={myBlog.category} timeRequired={myBlog.timeRequired} date={myBlog.date} title={myBlog.title} thumbnail={myBlog.thumbnail} authorName={myBlog.authorName} ></DetailedBlog>
                        :
                        ''
                }
            </div>
        </div>
    );
};

export default page;