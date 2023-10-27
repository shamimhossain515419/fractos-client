import Image from "next/image";
import { useState,useEffect } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

const Featured = () => {
    
 const [allBlogs,setBlogs]=useState([]);
 useEffect(()=>{
    fetch('blog.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
    .catch(error=>console.error(error))
},[])
 const blogs=allBlogs.slice(0,1);



 const [isExpanded, setIsExpanded] = useState(false);

 const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

//   const slicedText = isExpanded ? text : text.split(' ').slice(0, 50).join(' ');

    return (
        <>
        {blogs.map(blog=> <div key={blog.id} className="px-8 md:px-12   mx-12  bg-blue-300 card grid md:grid-cols-2 grid-cols-1 gap-1">
            <div className="col mt-8 md:mt-28 ">
                <Image width={200} height={200} src={blog.image} className="rounded md:w-11/12 my-auto" alt="" />
            </div>
            <div className="col">
                <div className='flex my-4'>
                    <p className="text-blue-600  ">Date:{blog.date}</p>
                    <p className="text-blue-900 md:ml-64 ml-12">Time:{blog.require_time}</p>

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
                <div className=' my-4 '>
                    <p className="text-blue-600  ">Total View: {blog.view}</p>
                   
                   

                </div>
            </div>
        </div>)}
        </>
    );
};

export default Featured ;