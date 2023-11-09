"use client"

import DetailedBlog from '@/Components/BlogPage/DetailedBlog';
import React, { useEffect, useState } from 'react';

const page = ({ params }) => {
    const { id } = params;
    const [myBlog, setMyBlog] = useState(false);
    useEffect(() => {
        fetch('/blog-data/careerguidelines.json')
            .then(res => res.json())
            .then(data => {
                setMyBlog(data.find(blog => blog.id = parseInt(id)))
            })
            // Scroll Restoration.
            window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            {
                myBlog ?
                    <DetailedBlog detail={myBlog.detail} category={myBlog.category} timeRequired={myBlog.timeRequired} date={myBlog.date} title={myBlog.title} thumbnail={myBlog.thumbnail} authorName={myBlog.authorName} ></DetailedBlog>
                    :
                    ''
                }
        </div>
    );
};

export default page;