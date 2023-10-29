import Image from "next/image";
import React from 'react';

const CommonImage = ({ data }) => {
     return (
          <div>
               <div className="image">
                    <Image className=" rounded-full   object-fill w-[50px] h-[50px]" src={data?.photoURL ? data?.photoURL  : "https://i.ibb.co/XpNhB9s/beautiful-woman-avatar-character-icon-free-vector.jpg"} alt="" height={50} width={50} />
               </div>
          </div>
     );
};

export default CommonImage;