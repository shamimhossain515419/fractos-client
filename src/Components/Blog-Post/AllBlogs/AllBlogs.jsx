import Image from "next/image";
import { useState, useEffect } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

const AllBlogs = () => {

    const [allBlogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => console.error(error))
    }, [])


    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };


    const [showAll, setShowAll] = useState(false);
    const blogs = allBlogs.slice(0, 9);

    const handleShowAll = () => {
        setShowAll(true);
    };


    return (
        <>
            <h1 className="font-bold text-4xl text-blue-700 ml-36 mt-16 mb-8">All Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-8">
                {
                    blogs.map(blog => <div key={blog.id} className="col" >
                        <div className="card w-96  shadow-xl bg-blue-300">
                            <div className="px-10 pt-10">
                                <Image width={100} height={100} src={blog.image} alt="" className="rounded-xl" />
                            </div>
                            <div className="card-body ">
                                <div className='flex my-4'>
                                    <p className="text-blue-600  ">Date:{blog.date}</p>
                                    <p className="text-blue-900 md:ml-20 ml-12">Time:{blog.require_time}</p>

                                </div>
                                <div className="text-2xl font-bold">{blog.title} !</div>
                                <p className="text-blue-600 md:mx-4 mt-4 text-xl font-bold"> {blog.author_name}</p>
                               
                                <div className='mt-4 text-justify'>
                                    <ReactReadMoreReadLess
                                        charLimit={500}
                                        readMoreText={"Read More..."}
                                        readLessText={"Read less..."}
                                    >
                                        {blog.detail}
                                    </ReactReadMoreReadLess>



                                </div>
                                <p className="text-blue-600  ">Total View: {blog.view}</p>
                            </div>
                        </div>

                    </div>)
                }



            </div>
            <div className="text-center">
                {!showAll && (
                    <div className="text-center">
                        <button className="btn btn-active btn-primary my-8" onClick={handleShowAll}>Show All</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default AllBlogs;