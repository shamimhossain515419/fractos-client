'use client'
import { GetQuestion } from '@/services/exam';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import Loading from '../Loading/Loading';
import { GlobalContext } from '@/GlobalState';
import Container from '../Container/Container';

const AcademicQuestion = () => {
    const [subjects, setSubjects] = useState([]);
    const { Open, setOpen } = useContext(GlobalContext)
    const [search, setSearch] = useState("")

    const GetAllQuestion = async (search) => {
        const result = await GetQuestion(search);
        const filter = result?.filter(item => item?.category == "HSC")
        setSubjects(filter)
    }

    useEffect(() => {
        GetAllQuestion(search)
    }, [search]);


    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    }

    console.log(search);
    return (
        <>

            <div className=' md:flex justify-start items-center'>
                <div className='text-center'>
                    <button onClick={() => setOpen(true)} className={`${Open ? " buttonColor text-black" : "border border-[#0EE6B8]  text-white "}   m-3 p-2 font-bold rounded `}> Admission</button>
                    <button onClick={() => setOpen(false)} className={`${Open ? "border border-[#0EE6B8] text-white " : "buttonColor text-black"}  m-3 p-2 font-bold rounded `}>Academic</button>
                </div>
                <div className=' my-3 '>
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
            <div>
                {
                    subjects?.length > 0 ? <>  <div className='grid md:grid-cols-3 px-4 lg:grid-cols-3 sm:grid-cols-2 gap-5'>
                        {
                            subjects?.map(subject =>
                                <Link href={`/dashboard/archive/${subject?.exam_name}`} key={subject._id} className=' shadow-md  secondBg  rounded '>

                                    <div className=''>

                                        <Parallax
                                            bgImage="https://i.ibb.co/LQ2F8Jj/download-2.jpg"
                                            bgImageAlt="the cat"

                                            className="bg-cover bg-fixed h-full rounded-xl">
                                            <div className='p-4 rounded space-y-3 text-center text-white'>
                                                <h1 className='text-3xl font-bold  capitalize'>{subject?.title}</h1>
                                                <h1 className='text-3xl font-bold  capitalize'>{2023}</h1>
                                                <h3 className='text-3xl font-bold '>ACADEMIC</h3>
                                            </div>
                                        </Parallax>
                                        <div className='rounded text-white  p-2'>
                                            <p className='text-xl primary capitalize'>{subject.exam_name}
                                            </p>
                                            <div className='flex gap-2 '>
                                                <div>
                                                    <small > {subject?.questions?.length} </small>
                                                    <small>exams </small>
                                                </div>
                                                <div><small> {subject?.questions?.length}  </small>
                                                    <small> Time</small></div>
                                            </div>
                                        </div>
                                    </div>


                                </Link>)
                        }
                    </div>
                    </> : <> <Loading></Loading> </>
                }
            </div>

        </>
    );
};

export default AcademicQuestion;