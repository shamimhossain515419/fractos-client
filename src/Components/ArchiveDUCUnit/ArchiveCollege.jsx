'use client'
import { GlobalContext } from '@/GlobalState';
import { GetAdmissionBlog } from '@/services/admission';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import Container from '../Container/Container';


const ArchiveCollege = async () => {

    const [colleges, setCollege] = useState([])
    const [search, setSearch] = useState("")
    const { Open, setOpen } = useContext(GlobalContext)
    const getData = async (search) => {
        const colleges = await GetAdmissionBlog(search);
        setCollege(colleges)
    }
    useEffect(() => {
        getData(search)
    }, [search])

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    }

    console.log(search);
    return (
        <>
            <div className='  md:flex   justify-start items-center'>
                <div className=' text-center mx-auto'>
                    <button onClick={() => setOpen(true)} className={`${Open ? " buttonColor text-black" : "border border-[#0EE6B8]  text-white "}   m-3 p-2 font-bold rounded `}> Admission</button>
                    <button onClick={() => setOpen(false)} className={`${Open ? "border border-[#0EE6B8] text-white " : "buttonColor text-black"}  m-3 p-2 font-bold rounded `}>Academic</button>
                </div>
                <div className=' my-16'>
                    <div id="searchBar-part">
                        <Container>
                            <div className="box   px-2 py-3 relative">
                                <input
                                    className="w-full  primaryBg rounded-3xl px-7    py-5  bg-transparent  border-b focus:outline-none"
                                    type="text"
                                    id="search"
                                      onChange={handleChange}
                                    placeholder="Search "
                                />
                            </div>
                        </Container>
                    </div>

                </div>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-14'>
                {
                    colleges?.map(college =>
                        <Link href={`/dashboard/question-bank/${college.path}`} key={college._id}>
                            <div className='rounded'>
                                <div className='backgroundImage'>
                                    <div className='p-8 rounded text-center'>
                                        <h1 className='text-2xl font-bold text-white'>{college.CollegeName}</h1>
                                    </div>
                                </div>
                                <div className=' secondBg rounded text-white font-bold p-3'>
                                    <p className=' capitalize secondColor'>{college.department}</p>
                                    <div className='flex justify-between mt-3'>
                                        <p>  {college.exam} Exam</p>
                                        <p>{college.date}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>)
                }
            </div>
        </>
    );
};

export default ArchiveCollege;