
"use client"

import { get_all_order_courses } from '@/services/stripe';
import Container from '../Container/Container';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '@/GlobalState';

const MyAllClass = () => {

    const { user } = useContext(GlobalContext)

    const [classes, setClasses] = useState([]);
    async function GetData() {
        const data = await get_all_order_courses();

        const myclass = data?.filter(item => item?.email == user?.email);

        setClasses(myclass)


    }

    useEffect(() => {

        GetData()

    })

 console.log(classes);
    return (
        <Container>
            <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-4'>
                {
                    classes?.map(item =>
                        <div className="card glass">
                            <figure className='w-full'>
                                <img src={item?.course?.image} className='w-full h-72 p-3' />
                            </figure>
                            <div className="card-body font-bold">
                            <p className="">Subject :<small> {item?.course?.subject}</small></p>
                                <p className="">Teacher Name : <small>{item?.name}</small></p>
                                <p className="">Subject :<small> {item?.course?.subject}</small></p>
                                <p className="">Time : <small>{item?.course?.time}</small></p>
                             </div>
                        </div>)
                }
            </div>
        </Container>
    );
};

export default MyAllClass;