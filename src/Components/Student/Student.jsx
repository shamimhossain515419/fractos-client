import React from 'react';

const Student = () => {
    return (
        <div className=" bg-teal-950 ">
            <table className="table text-white border-2 w-full">
                <thead className='border-2'>
                    <tr className="text-white">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='border-2'>
                    {/* row 1 */}
                    <tr className='border-2'>
                        <td className="flex">
                            <div className="avatar w-14 h-14">
                                <img src='https://i.ibb.co/pzLXXQj/download.jpg' alt="" className="rounded-md"/>
                            </div>
                            <p>Onika</p>
                        </td>
                        <td>onika@gmail.com</td>
                        <td>
                            <button className="btn btn-ghost btn-xs bg-teal-600 text-white">DELETE</button>
                        </td>
                    </tr>
                    <tr className='border-2'>
                    <td className="flex">
                            <div className="avatar w-14 h-14">
                                <img src='https://i.ibb.co/pzLXXQj/download.jpg' alt="" className="rounded-md"/>
                            </div>
                            <p>Onika</p>
                        </td>
                        <td>konika@gmail.com</td>
                        <td>
                            <button className="btn btn-ghost btn-xs bg-teal-600 text-white">DELETE</button>
                        </td>
                    </tr>
                    <tr className='border-2'>
                    <td className="flex">
                            <div className="avatar w-14 h-14">
                                <img src='https://i.ibb.co/pzLXXQj/download.jpg' alt="" className="rounded-md"/>
                            </div>
                            <p>Onika</p>
                        </td>
                        <td>monika@gmail.com</td>
                        <td>
                            <button className="btn btn-ghost btn-xs bg-teal-600 text-white">DELETE</button>
                        </td>
                    </tr>
                    <tr className='border-2'>
                    <td className="flex">
                            <div className="avatar w-14 h-14">
                                <img src='https://i.ibb.co/pzLXXQj/download.jpg' alt="" className="rounded-md"/>
                            </div>
                            <p>Onika</p>
                        </td>
                        <td>monika@gmail.com</td>
                        <td>
                            <button className="btn btn-ghost btn-xs bg-teal-600 text-white">DELETE</button>
                        </td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};

export default Student;