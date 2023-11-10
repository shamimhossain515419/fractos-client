import { GlobalContext } from '@/GlobalState';
import { registerNewUser } from '@/services/users';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';

const GoogleSignIn = () => {
    const router = useRouter();
    const { googleSignIn, componentLevelLoader, setComponentLevelLoader } = useContext(GlobalContext);
    const googleSignInHandler = async () => {

        const result = await googleSignIn();
        const user = result?.user
        console.log(user);
        const fromData = { email: user?.email, exam: 0, photo: user?.photoURL, name: user?.displayName, password: "", role: "user", category: "student", phone: 0, about: "", batch: "", collage: "", level: "", rank: 0, mark: 0 }

        const data = await registerNewUser(fromData);

        
        console.log(data);
        if (data?.success) {
            Swal.fire(
                `Welcome, ${user.displayName}`
            );
            
        }else{
            Swal.fire(
                `Welcome, ${user.displayName}`
            );
            router.push('/')
        }
      





    }
    return (
        <div>
            <div onClick={googleSignInHandler} className='py-2 w-full rounded-lg  primaryBg  space-x-5 flex items-center px-10 justify-center mt-10 cursor-pointer shadow-lg hover:shadow-xl  hover:text-black transition-all hover:bg-[#0EE6B8]'>
                <Image src={'/google-icon.png'} width={24} height={24}></Image>
                <h3 className='text-xl font-bold'>Sign In With Google</h3>
            </div>
        </div>
    );
};

export default GoogleSignIn;