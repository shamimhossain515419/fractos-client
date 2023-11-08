import { getAllUser } from '@/services/users';

const Student = async () => {
    const getUserInfos = await getAllUser();
    console.log(getUserInfos.data);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr className='text-white'>
                        <th>Name</th>
                        <th className='w-56'>Category</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {getUserInfos.data.map(userInfo =>
                    <tbody key={userInfo._id}>
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar w-14 h-14">
                                        <img src={userInfo.photo} alt="Avatar" className='rounded-md' />
                                    </div>
                                    <div>
                                        <p>{userInfo.name}</p>
                                        <p>{userInfo.collage}</p>
                                    </div>
                                </div>
                            </td>
                            <td><p>{userInfo.category}</p></td>
                            <td><p>{userInfo.email}</p></td>
                            <td className='text-black'>
                                <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Details</button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
                                    <div className="modal-box bg-[#11162B] text-white ">
                                        <div className='flex '>
                                            <img src={userInfo.photo} alt="Avatar" className='rounded-md w-1/2 h-1/2' />
                                            <div className='p-5'>
                                                <p>Name : {userInfo.name}</p>
                                                <p>Category : {userInfo.category}</p>
                                                <p>Collage Name : {userInfo.collage}</p>
                                                <p>Batch : {userInfo.batch}</p>
                                                <p>My Exam : {userInfo.exam}</p>
                                                <p> Mark : {userInfo.mark}</p>
                                                <p>Rank : {userInfo.rank}</p>
                                                <p>Phone Number : {userInfo.phone}</p>
                                            </div>
                                        </div>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </td>
                        </tr>
                    </tbody>
                )
                }
            </table>


        </div>
    );
};

export default Student;