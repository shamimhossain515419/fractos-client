import { GlobalContext } from '@/GlobalState';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';

const GoogleSignIn = () => {
    const router = useRouter();
    const {googleSignIn} = useContext(GlobalContext);
    const googleSignInHandler = () =>{
        console.log('im here')
            googleSignIn()
            .then((result)=>{
                Swal.fire(
                    `Welcome, ${result.user.displayName}`
                );
                    router.push('/')
            })
    }
    return (
        <div>
            <div onClick={googleSignInHandler} className='py-2 w-full rounded-lg bg-white space-x-5 flex items-center px-10 justify-center mt-10 cursor-pointer shadow-lg hover:shadow-xl hover:text-white transition-all hover:bg-[#3284FF]'>
                <Image src={'/google-icon.png'} width={24} height={24}></Image>
                <h3 className='text-xl font-bold'>Sign In With Google</h3>
            </div>
        </div>
    );
};

export default GoogleSignIn;