import Image from "next/image";
import React from 'react';
import { RxAvatar } from "react-icons/rx";

const CommonImage = ({ data }) => {
     return (
          <div>
               <div className="image">
                    {data?.photoURL ?
                         <Image className=" rounded-full   object-fill w-[50px] h-[50px]" src={data?.photoURL} alt="" height={50} width={50} />
                         :
                         <RxAvatar className="w-[50px] h-[50px] text-[#E8EAED]"></RxAvatar>
                    }
               </div>
          </div>
     );
};

export default CommonImage;