import React, { useState, useEffect } from 'react';

const MockPreset = () => {
    const [qnNames, setQnNames] = useState([]);


    useEffect(() => {
        fetch('QpresetName.json')
            .then(res => res.json())
            .then(data => setQnNames(data))
            .catch(error => console.error(error))
    }, [])


    const [subNames, setSubNames] = useState([]);


    useEffect(() => {
        fetch('subName.json')
            .then(res => res.json())
            .then(data => setSubNames(data))
            .catch(error => console.error(error))
    }, [])





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