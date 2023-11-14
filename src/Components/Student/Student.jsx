"use client"

import { getAllUser } from '@/services/users';
import StudentDetails from '../StudentDetails/StudentDetails';
import { useEffect, useState } from 'react';
import Notification from '../Notification/Notification';


const Student = async () => {

    const [search, setSearch] = useState("")
    const [getUserInfos, setGetUserInfos] = useState([]);
    const [modalData, setModalData] = useState({});
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function GetUser() {
            const result = await getAllUser(search);
            setGetUserInfos(result)
        }

        GetUser(search);
    }, [1000, search])



    return (
        <div className="overflow-x-auto pt-12">
            <table className="table">
                <thead className=' primaryBg'>
                    <tr className='text-white'>
                        <th className=' text-base  md:text-lg font-medium w-96'>Name</th>
                        <th className=' text-base  md:text-lg font-medium'>Category</th>
                        <th className=' text-base  md:text-lg font-medium'>Email</th>
                        <th className=' text-base  md:text-lg font-medium'>Action</th>
                    </tr>
                </thead>
                {getUserInfos?.data?.map(userInfo =>
                    <tbody key={userInfo._id}>
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar w-14 h-14">
                                        <img src={userInfo?.photo ? userInfo?.photo
                                            : "https://i.ibb.co/XpNhB9s/beautiful-woman-avatar-character-icon-free-vector.jpg"} alt="" className='rounded-md' />
                                    </div>
                                    <div>
                                        <p className=' text-base md:text-lg capitalize font-medium  primary'>{userInfo.name}</p>
                                        <p className=' c capitalize'>{userInfo.collage}</p>
                                    </div>
                                </div>
                            </td>
                            <td className=' capitalize text-base  secondColor'><p>{userInfo.category}</p></td>
                            <td><p className='  text-base  '>{userInfo.email}</p></td>
                            <td className='' onClick={() => { setModalData(userInfo), setShowModal(true) }}>  <button className=' buttonColor px-3 py-1 rounded-lg text-black'>Detail</button> </td>
                        </tr>
                    </tbody>
                )
                }
            </table>
            <StudentDetails showModal={showModal} setShowModal={setShowModal} userInfo={modalData}></StudentDetails>
            <Notification></Notification>
        </div>
    );
};

export default Student;