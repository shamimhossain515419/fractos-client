import Image from 'next/image';
import React from 'react';

const SscBatch = () => {

    const data =
    [
       {
          "id": 1,
          "image":"data:image/jpeg;base64,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",
          "Batch":"1",
          "subject_name": "SSC English-1st",
          "no_of_class":"3",
          "no_of_mockTest":"1",
          "fees": "1000",
          
          "teacherName":"Taohidur Rahaman"

          
          
        },
        {
            "id": 2,
            "image":"data:image/jpeg;base64,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",
            "Batch":"1",
            "subject_name": "SSC English-1st",
            "no_of_class":"3",
            "no_of_mockTest":"1",
            "fees": "1000",
            "teacherName":"Taohidur Rahaman"
  
            
            
          },
          {
            "id": 3,
            "image":"data:image/jpeg;base64,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",
            "Batch":"1",
            "subject_name": "SSC English-1st",
            "no_of_class":"3",
            "no_of_mockTest":"1",
            "fees": "1000",
            "teacherName":"Taohidur Rahaman"
  
            
            
          }
      ]
    



    return (
        <div className='pb-8 pt-4'>
        <div className='border border-sky-400 '>
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
            {
                data.map(course=><div className='col ' key={course.id}>
                    <div className="md:flex flex-row-reverse border border-white bg-white mx-4 my-6 rounded-lg">
                        <div className='md:w-1/2  p-4 '>
                           <Image  width={100} height={100} src={course.image} alt="download" border="0" className='w-full md:mt-4 rounded-lg'
                           ></Image>
                        </div>
                        <div className='md:w-1/2 text-indigo-500 p-4 font-bold '>
                            <h1 className='font-bold text-2xl  '>{course.subject_name} Batch- {course.Batch}</h1>
                           <h2 className='mt-4 text-xl'>{course.teacherName} sir</h2>
                            <p className='mt-2'>{course.no_of_class} Class in a week</p>
                            <p className='mt-2'>{course.no_of_mockTest} Live MockTeast in a week</p>

                            <p className='text-red-500 mt-2'>Price: {course.fees}/=</p>
                            <div className='flex my-4'>
                            <button className='font-bold  border border-indigo-500 rounded-lg  p-2 hover:bg-indigo-700 text-blue-400 my-4 mr-2'>View Details</button>
                            <button className='font-bold  border border-indigo-500 rounded-lg  p-2 hover:bg-indigo-700 text-blue-400 my-4'>Enroll Now</button>
                            </div>
                        </div>

                    </div>

             
                </div>)
            }

            </div>
            
        </div>
        </div>
    );
};

export default SscBatch;