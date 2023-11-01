import React from 'react';
import './DUCUnit.css';
import Link from 'next/link';


const DUCUnit = () => {

const adQns=[
    {
        "id":1,
        "name":"Du C Unit",
        "set":"A",
        "year":"22-23",
        "nOfQ":"72 Questions",
        "time":"72 minutes"


    },

    {
        "id":2,
        "name":"Du C Unit",
        "set":"B",
        "year":"22-23",
        "nOfQ":"72 Questions",
        "time":"72 minutes"


    },

    {
        "id":3,
        "name":"Du C Unit",
        "set":"C",
        "year":"22-23",
        "nOfQ":"72 Questions",
        "time":"72 minutes"


    },

    {
        "id":4,
        "name":"Du C Unit",
        "set":"A",
        "year":"21-22",
        "nOfQ":"72 Questions",
        "time":"72 minutes"


    },
    {
        "id":5,
        "name":"Du C Unit",
        "set":"B",
        "year":"21-22",
        "nOfQ":"72 Questions",
        "time":"72 minutes"


    },
    {
        "id":6,
        "name":"Du C Unit",
        "set":"C",
        "year":"21-22",
        "nOfQ":"72 Questions",
        "time":"72 minutes"


    },
    {
        "id":7,
        "name":"Du C Unit",
        "set":"C",
        "year":"21-22",
        "nOfQ":"72 Questions",
        "time":"72 minutes"


    },
    {
        "id":8,
        "name":"Du C Unit",
        "set":"C",
        "year":"21-22",
        "nOfQ":"72 Questions",
        "time":"72 minutes"


    },
    {
        "id":9,
        "name":"Du C Unit",
        "set":"C",
        "year":"21-22",
        "nOfQ":"72 Questions",
        "time":"72 minutes"


    },
    {
        "id":10,
        "name":"Du C Unit",
        "set":"C",
        "year":"21-22",
        "nOfQ":"72 Questions",
        "time":"72 minutes"


    },
    {
        "id":11,
        "name":"Du C Unit",
        "set":"C",
        "year":"21-22",
        "nOfQ":"72 Questions",
        "time":"72 minutes"


    },
    {
        "id":12,
        "name":"Du C Unit",
        "set":"C",
        "year":"21-22",
        "nOfQ":"72 Questions",
        "time":"72 minutes"


    },
    {
        "id":13,
        "name":"Du C Unit",
        "set":"C",
        "year":"21-22",
        "nOfQ":"72 Questions",
        "time":"72 minutes"


    },
    {
        "id":14,
        "name":"Du C Unit",
        "set":"C",
        "year":"21-22",
        "nOfQ":"72 Questions",
        "time":"72 minutes"


    },
    {
        "id":15,
        "name":"Du C Unit",
        "set":"C",
        "year":"21-22",
        "nOfQ":"72 Questions",
        "time":"72 minutes"


    },
]

    return (
        <div>
            <div className='mb-8 mt-4'>
                <h1 className="text-indigo-700 text-3xl font-bold mb-8">Digital Question Bank</h1>
                <div className="mt-8 mb-2">
                    <Link href={'/dashboard'} className="text-indigo-700 ">&lt;-Back</Link>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>

                <div className='col rounded'>
                    <div className=' p-8 rounded text-center backgroundImage '>
                        <h1 className='text-2xl font-bold text-white'>DU C UNIT</h1>
                        <h1 className='text-2xl font-bold text-white'>ADMISSION</h1>
                    </div>
                </div>
                <div className="col my-4">
                    DU admission এ সবচেয়ে ভালো প্রস্তুতির জন্য অনুশীলন এর কোনো বিকল্প নাই, ঢাকা বিশ্ববিদ্যালয়ের ব্যবসায় বিভাগের ভর্তি পরিক্ষায় ঢাবি গ বিষয়সমূহের MCQ অনুশীলন প্রয়োজন,।
                </div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5  my-8'>
                {
                    adQns.map(adQn=><div key={adQn.id} className='col rounded bgBox text-white text-sm px-2 py-4'>
                       <div className='flex'>
                        <p className='mr-4'>{adQn.name}</p>
                        <p className='mr-4'>Set-{adQn.set}</p>
                        <p>{adQn.year}</p>
                       </div>
                       <div className='mt-4 flex'>
                        <p className='mr-8'>{adQn.nOfQ}</p>
                        <p>{adQn.time}</p>
                       </div>
                    </div>)
                }

            </div>


        </div>
    );
};

export default DUCUnit;