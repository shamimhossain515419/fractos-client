import React, { useState, useEffect } from 'react';

const MockPreset = () => {
    const qnNames=[
        {
            "id":1,
            "name":"DU-A"
        },
        {
            "id":2,
            "name":"JU-A"
        },
        {
            "id":3,
            "name":"BUET-Prili"
        },
        {
            "id":4,
            "name":"CU-A"
        },
        {
            "id":5,
            "name":"Agri Guccho"
        },
        {
            "id":6,
            "name":"Medical"
        },
        {
            "id":7,
            "name":"RU-C (Science)"
        },
        {
            "id":8,
            "name":"JU-D"
        },
        {
            "id":9,
            "name":"GST-A (Science)"
        }
    ];


   const subNames=[
    {
        "id":1,
        "name":"Physics"
    },
    {
        "id":2,
        "name":"Chemistry"
    },
    {
        "id":3,
        "name":"Bangla"
    },
    {
        "id":4,
        "name":"ICT"
    },
    {
        "id":5,
        "name":"Higher Math"
    },
    {
        "id":6,
        "name":"Biology"
    },
    {
        "id":7,
        "name":"English"
    },
    {
        "id":8,
        "name":"General Knowledge"
    }
    
];



    return (
        <>
            <div>
                <p className='font-bold text-2xl'>Preset</p>
                <div className='my-16 grid justify-items-center '>
                    <div className='grid grid-cols-3 md:grid-cols-9  gap-2'>
                        {qnNames.map(qnName => <button key={qnName.id} className="col px-auto py-4 bg-white hover:bg-slate-300 border rounded-lg font-bold text-lg w-11/12 text-center">{qnName.name}</button>)}
                    </div>
                    <button className="my-4 px-8 py-4 bg-white hover:bg-slate-300 border rounded-lg font-bold text-lg">CKRUET</button>
                </div>

            </div>


            <div className='font-bold text-2xl flex'>
                <div className='border-t-2 border-black w-6/12 mt-4'></div>
                <p className='mx-2'>OR</p>
                <div className='border-t-2 border-black w-6/12 mt-4'></div>
            </div>
            <div className='my-16'>
            <p className='font-bold text-2xl'>Subject</p>
                <div className='my-16  mx-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2  gap-2'>
                        {subNames.map(subName => <button key={subName.id} className="col px-auto py-4 bg-white hover:bg-slate-300 border rounded-lg font-bold text-lg w-11/12 text-center">{subName.name}</button>)}
                    </div>
                    
                </div>

            </div>
        </>
    );
};

export default MockPreset;