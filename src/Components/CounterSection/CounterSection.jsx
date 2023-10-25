import React from 'react';
import Counter from '.';


const CounterSection = () => {
    return (
        <container className="grid lg:grid-cols-4 lg:py-10 py-5 grid-cols-1 gap-1 lg:gap-0 text-center lg:text-start" >

<<<<<<< HEAD
         <div className='border p-8 lg:rounded-s-md rounded-md lg:rounded-none primaryBg2 text-3xl text-lime-200 font-bold'>
=======
         <div className='border primaryBg p-8 lg:rounded-s-md rounded-md lg:rounded-none primaryBg2 text-3xl text-lime-200 font-bold'>
>>>>>>> 844786665bfc6fb3997765df005ee41a396bba28
            <Counter end={110000} />
            <h1 className='text-base text-white lg:pl-4 pt-2 font-semibold'>Students</h1>
         </div>

<<<<<<< HEAD
         <div className='border p-8 primaryBg2 text-3xl text-teal-200 font-bold lg:rounded-none rounded-md'>
=======
         <div className='border p-8 primaryBg text-3xl text-teal-200 font-bold lg:rounded-none rounded-md'>
>>>>>>> 844786665bfc6fb3997765df005ee41a396bba28
            <Counter end={121000} />
            <h1 className='text-base text-white lg:pl-4 pt-2 font-semibold'>Questions</h1>
         </div>

<<<<<<< HEAD
         <div className='border p-8 primaryBg2 text-3xl text-rose-300 font-bold lg:rounded-none rounded-md'>
=======
         <div className='border p-8 primaryBg text-3xl text-rose-300 font-bold lg:rounded-none rounded-md'>
>>>>>>> 844786665bfc6fb3997765df005ee41a396bba28
            <Counter end={20000000} />
            <h1 className='text-base text-white lg:pl-8 pt-2 font-semibold'>Exams Taken</h1>
         </div>

<<<<<<< HEAD
         <div className='border p-8 lg:rounded-e-md rounded-md primaryBg2 text-3xl text-violet-200 font-bold lg:rounded-none'>
=======
         <div className='border p-8 lg:rounded-e-md rounded-md primaryBg text-3xl text-violet-200 font-bold lg:rounded-none'>
>>>>>>> 844786665bfc6fb3997765df005ee41a396bba28
            <Counter end={60000000} />
            <h1 className='text-base text-white lg:pl-4 pt-2 font-semibold'>Minutes Practiced</h1>
         </div>
        </container>
    );
};

export default CounterSection;