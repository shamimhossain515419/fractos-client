import Image from 'next/image';
import React from 'react';
import CommonTitle from '../CommonTitle/CommonTitle';

const AboutUs = () => {
    return (
        <div className='pt-12 pb-12'>
        
         <CommonTitle title={"About Fractos"}></CommonTitle>

            <div className="container mx-auto p-4 grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-2">

            <div>
                <Image  width={100} height={100}  src="/mock-exam-img.jpg" alt="LOgo" className='w-96 rounded-full' />
            </div>

              <div className='lg:pt-20 md:pt-2 pt-10'>
                
              <p className="lg:mb-6 md:mb-3 mb-2 text-center">
                    Welcome to Fractos, the platform dedicated to empowering students and teachers in their educational journey.
                </p>
                <p className="lg:mb-6 md:mb-3 mb-2 text-center">
                    Students can take mock exams in various subjects like Admission, HSC, SSC, Math, English, General Knowledge, Science, and more.
                </p>
                <p className="lg:mb-6 md:mb-3 mb-2 text-center">
                    Teachers can conduct live classes, creating and managing classes in different subjects.
                </p>
              </div>
              
            </div>
      
            
        </div>
    );
};

export default AboutUs;