import { GlobalContext } from '@/GlobalState';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';

const UserModal = () => {
    const { user, logOutUser } = useContext(GlobalContext);
    const handleLogOut = () => {
        logOutUser()
            .then(
                Swal.fire(
                    'Logged Out',
                )
            )
            location.reload()
    }
    return (
        <div className='primaryBg rounded-lg shadow-lg py-3 px-4'>
            <Link className="p-2 rounded-lg  buttonColor  px-4 md:px-12  text-black hover:bg-[#ffff] transition-all block text-center w-full mb-5" href={'/dashboard'}>Dashboard</Link>
            <Link className="p-2 rounded-lg  buttonColor  px-4 md:px-12  text-black hover:bg-[#ffff] transition-all block text-center w-full mb-5" href={'/dashboard/setting'}>Setting</Link>
            <button onClick={handleLogOut} className='p-2 px-4 md:px-12 rounded-lg  buttonColor   text-black hover:bg-[#ffff] transition-all block text-center w-full mb-5'>Log Out</button>
        </div>
    );
};

export default UserModal;