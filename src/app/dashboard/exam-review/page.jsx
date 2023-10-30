import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <h2 className='text-2xl md:text-4xl text-[#4A3AFF]'>Review Your Exams</h2>

            <div>
                <div className="overflow-x-auto mt-[80px]">
                    <table className="table border-2 border-[#4A3AFF]">
                        {/* head */}
                        <thead>
                            <tr className='border-2 border-[#4A3AFF] text-center'>
                                <th className='font-bold text-black'>
                                    <div className='flex items-center justify-center gap-1'>
                                        <Image width={24} height={24} src={'/topic-icon.png'}></Image>
                                        <span>Topic</span>
                                    </div>
                                </th>
                                <th className='font-bold text-black border-x border-[#4A3AFF]'>
                                    <div className='flex items-center justify-center gap-1'>
                                        <Image width={24} height={24} src={'/marks-icon.png'}></Image>
                                        <span>Marks</span>
                                    </div>
                                </th>
                                <th className='font-bold text-black'>
                                    <div className='flex items-center justify-center gap-1'>
                                        <Image width={24} height={24} src={'/calendar-icon.png'}></Image>
                                        <span>Date</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='hover:bg-[#dddddd] text-center cursor-pointer odd:bg-slate-100 even:bg-slate-200'>
                                <td>রেওয়ামিল</td>
                                <td className='border-x border-[#4A3AFF]'>
                                    <div className='flex justify-between items-center'>
                                        <span>20%</span>
                                        <span>5/25</span>
                                    </div>
                                </td>
                                <td>30/ 10/2023</td>
                            </tr>
                            <tr className='hover:bg-[#dddddd] text-center cursor-pointer odd:bg-slate-100 even:bg-slate-200'>
                                <td>রেওয়ামিল</td>
                                <td className='border-x border-[#4A3AFF]'>
                                    <div className='flex justify-between items-center'>
                                        <span>20%</span>
                                        <span>5/25</span>
                                    </div>
                                </td>
                                <td>30/ 10/2023</td>
                            </tr>
                            <tr className='hover:bg-[#dddddd] text-center cursor-pointer odd:bg-slate-100 even:bg-slate-200'>
                                <td>খতিয়ান</td>
                                <td className='border-x border-[#4A3AFF]'>
                                    <div className='flex justify-between items-center'>
                                        <span>20%</span>
                                        <span>5/25</span>
                                    </div>
                                </td>
                                <td>30/ 10/2023</td>
                            </tr>
                            <tr className='hover:bg-[#dddddd] text-center cursor-pointer odd:bg-slate-100 even:bg-slate-200'>
                                <td>Changing Sentence</td>
                                <td className='border-x border-[#4A3AFF]'>
                                    <div className='flex justify-between items-center'>
                                        <span>20%</span>
                                        <span>5/25</span>
                                    </div>
                                </td>
                                <td>30/ 10/2023</td>
                            </tr>
                            <tr className='hover:bg-[#dddddd] text-center cursor-pointer odd:bg-slate-100 even:bg-slate-200'>
                                <td>DU C Unit</td>
                                <td className='border-x border-[#4A3AFF]'>
                                    <div className='flex justify-between items-center'>
                                        <span>20%</span>
                                        <span>5/25</span>
                                    </div>
                                </td>
                                <td>30/ 10/2023</td>
                            </tr>
                            <tr className='hover:bg-[#dddddd] text-center cursor-pointer odd:bg-slate-100 even:bg-slate-200'>
                                <td>BUET</td>
                                <td className='border-x border-[#4A3AFF]'>
                                    <div className='flex justify-between items-center'>
                                        <span>20%</span>
                                        <span>5/25</span>
                                    </div>
                                </td>
                                <td>30/ 10/2023</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default page;