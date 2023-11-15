

import { GetCounter } from '@/services/counter';
import Counter from '.';
import { SubscribeGet } from '@/services/Subscribe';



const CounterSection = async () => {

   const data = await GetCounter();
   const subscribe= await SubscribeGet()


   return (
      <container className="grid lg:grid-cols-5 lg:py-10 py-5 grid-cols-1 gap-4 lg:gap-0 text-center lg:text-start w-full  overflow-hidden" >

         <div className='border primaryBg p-8 lg:rounded-s-md rounded-md lg:rounded-none primaryBg2 text-3xl text-lime-200 font-bold'>
            <Counter end={data?.[0]?.student} duration={2} />
            <h1 className='text-base text-white pt-2 font-semibold'>Students</h1>
         </div>

         <div className='border p-8 primaryBg text-3xl text-teal-200 font-bold lg:rounded-none rounded-md'>
            <Counter end={data?.[0]?.questions} duration={2} />
            <h1 className='text-base text-white pt-2 font-semibold'>Questions</h1>
         </div>

         <div className='border p-8 primaryBg text-3xl text-rose-300 font-bold lg:rounded-none rounded-md'>
            <Counter end={data?.[0]?.reviews} duration={2} />
            <h1 className='text-base text-white  pt-2 font-semibold'>Exam reviews</h1>
         </div>

         <div className='border p-8 lg:rounded-e-md rounded-md primaryBg text-3xl text-violet-200 font-bold lg:rounded-none'>
            <Counter end={data?.[0]?.orders} duration={2} />
            <h1 className='text-base text-white pt-2 font-semibold'>Orders</h1>
         </div>
         <div className='border p-8 lg:rounded-e-md rounded-md primaryBg text-3xl text-violet-200 font-bold lg:rounded-none'>
            <Counter end={subscribe?.length} duration={2} />
            <h1 className='text-base text-white pt-2 font-semibold'>Subscriber</h1>
         </div>
      </container>
   );
};

export default CounterSection;