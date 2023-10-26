import Image from "next/image";
import React from 'react';

const CommonImage = ({ data }) => {
     return (
          <div>
               <div className="image">
                    <Image src={data?.photoURl ? data?.photoURl  : "https://i.ibb.co/9YBcnQB/profile-pic.png"} alt="" height={50} width={50} />
               </div>
          </div>
     );
};

export default CommonImage;