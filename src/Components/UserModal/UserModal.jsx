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
                    'Logged Out'
                )
            )
            location.reload()
    }
    return (
        <div className='bg-white rounded-lg shadow-lg p-5'>
            <Link className="p-2 rounded-lg bg-[#4A3AFF] text-white transition-all block text-center w-full mb-5" href={'/dashboard'}>Dashboard</Link>
            <Link className="p-2 rounded-lg bg-[#4A3AFF] text-white transition-all block text-center w-full mb-5" href={'/dashboard/setting'}>Setting</Link>
            <button onClick={handleLogOut} className='p-2 rounded-lg bg-[#4A3AFF] text-white transition-all block text-center w-full mb-5'>Log Out</button>
        </div>
    );
};

export default UserModal;