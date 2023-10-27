
import Img from './Images/Untitled1.png'
import Img2 from './Images/Untitled3.png'

import Image from 'next/image'
import banner from '../../../public/banner.png'
export default function Banner() {
  return (
    <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-3 py-10 ">
      <div className="col p-2 md:p-8 ">
      
          <Image  className='  w-full object-fill'
            src={banner}
            height={400}
            width={500}
            alt="Picture of the author" />
      

      </div>
      <div className='col py-10 flex justify-center  items-center flex-col '>
        <h1 className="text-4xl font-bold text-blue-700 text-center">Solve Q-Bank & Prepare You</h1>
        <p className="py-6 text-2xl text-center text-blue-500 md:p-2">Attend live test on any question from thousands of questions of your choice and prepare for any exam</p>
        <div className="flex text-center gap-2">
          <div className='ml-14 md:ml-24'><Image
            src={Img}
            className='h-12 w-36'
            alt="Picture of the author"
          /></div>
          <div> <Image
            src={Img2}
            className='h-12 w-36'
            alt="Picture of the author"
          /></div>
        </div>
      </div>

    </div>
  )
}