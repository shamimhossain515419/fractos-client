
import Img from './Images/Untitled1.png'
import Img2 from './Images/Untitled3.png'
import Bn from './Images/banner2.jpg'
import Bn2 from './Images/Banner3.jpg'
import Bn3 from './Images/banner4.jpg'
import Image from 'next/image'
export default function Banner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-10 ">
      <div className="col ">
        <div className='flex my-4 '>
          <div>
            <Image
              src={Bn}
              height={200}
              width={200}
              alt="Picture of the author" />
          </div>
          <div>
            <Image
              src={Bn2}
              height={200}
              width={200}
              alt="Picture of the author" />
          </div>
        </div>
        <div className='my-4 pl-14'>
          <Image
            src={Bn3}
            height={300}
            width={300}
            alt="Picture of the author" />
        </div>

      </div>
      <div className='col py-10'>
        <h1 className="text-4xl font-bold text-blue-700 text-center">Solve Q-Bank & Prepare You</h1>
        <p className="py-6 text-2xl text-center text-blue-500">Attend live test on any question from thousands of questions of your choice and prepare for any exam</p>
        <div className="flex text-center">
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