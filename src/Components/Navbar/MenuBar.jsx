import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MenuBar = ({ user }) => {
     return (
          <div>
               <div>
                    <div>
                         <hr />
                         <div className=' space-y-3 flex   flex-col '>

                              <Link href={'/'}> Home</Link>

                              <Link href={'/teacher'}>Teacher </Link>
                              <Link href={'/leader-board'}> Leader board</Link>
                              <Link href={'/blogs'}> Blogs</Link>
                              <Link href={'/contact'}> Contact Us</Link>


                              <div>
                                   {
                                        user ? <>   <div className="  flex items-center gap-1">
                                             <Image className=" h-12 w-12 rounded-full object-cover" src={user?.photoURL} alt="" />
                                             <p> {user ?? displayName} </p>
                                        </div></> : <></>
                                   }
                              </div>

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default MenuBar;