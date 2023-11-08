

import Counter from '.';



const CounterSection = async () => {

   

  
   return (
      <container className="grid lg:grid-cols-4 lg:py-10 py-5 grid-cols-1 gap-4 lg:gap-0 text-center lg:text-start w-full  overflow-hidden" >

         <div className='border primaryBg p-8 lg:rounded-s-md rounded-md lg:rounded-none primaryBg2 text-3xl text-lime-200 font-bold'>
            <Counter end={1000} duration={10} />
            <h1 className='text-base text-white lg:pl-4 pt-2 font-semibold'>Students</h1>
         </div>

         <div className='border p-8 primaryBg text-3xl text-teal-200 font-bold lg:rounded-none rounded-md'>
            <Counter end={2521} duration={10} />
            <h1 className='text-base text-white lg:pl-4 pt-2 font-semibold'>Questions</h1>
         </div>

         <div className='border p-8 primaryBg text-3xl text-rose-300 font-bold lg:rounded-none rounded-md'>
            <Counter end={5342} duration={10} />
            <h1 className='text-base text-white lg:pl-8 pt-2 font-semibold'>Exam reviews</h1>
         </div>

         <div className='border p-8 lg:rounded-e-md rounded-md primaryBg text-3xl text-violet-200 font-bold lg:rounded-none'>
            <Counter end={1500} duration={10} />
            <h1 className='text-base text-white lg:pl-4 pt-2 font-semibold'>Orders</h1>
         </div>
      </container>
   );
};

export default CounterSection;