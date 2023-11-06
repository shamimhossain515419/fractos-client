import React from 'react';
import img from './Images/teacherImage.png'
import Image from 'next/image';

const TeacherProfile = () => {

   const data=
        {
            "id":1,
            "name":"Taohidur Rahman",
            "qualification1":"MSc (English), University of Oxford (UK);",
            "qualification2":"BA, MA (English), University of Dhaka;",
            "achievement":"IELTS: 8.5",
            "earning":"50,000/=",
            "batch":"14",
            "enrolled_student":"445169"
        }
    
    return (
        <div>
           <div className="grid grid-cols-2 gap-3 mx-8 my-12">
            <div className="col lg:mt-28 text-left">
                <p className='font-bold text-xl lg:text-5xl md:text-2xl mb-4 md:mb-6 '>{data.name}</p>
                <p className=' lg:text-xl ml-2'>{data.qualification1}</p>
                <p className=' lg:text-xl ml-2'>{data.qualification2}</p>
                <p className=' lg:text-xl ml-2'>{data.achievement}</p>
                <div className='flex'>
                      <div className="">
                   
                    <p>{data.batch} Batches</p>
                      </div>
                      <div className=" mr-4">
                     
                    <p>{data.enrolled_student} Students</p>
                      </div>
                </div>
                
            </div>
            <div className="col">
            <Image  width={100} height={100} src={img} alt="download" className='w-9/12 '>

            </Image>
            </div>
           </div>
        </div>
    );
};

export default TeacherProfile;