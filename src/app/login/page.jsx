'use client'
import AuthContainer from '@/Components/AuthContainer/AuthContainer';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const Login = () => {
    const inputFieldCommonCSS = 'rounded-lg p-2 text-base lg:text-lg bg-gray-200 outline-none border-2 border-gray-200  focus:border-sky-400';
    const loginBtnCSS = 'w-full p-2 bg-gray-200 font-bold text-xl rounded-lg hover:shadow-md hover:shadow-gray-200';
    return (
        <AuthContainer>
            <div>
                <Head>
                    <title>Login</title>
                </Head>
                <Image className='mx-auto' src={'https://img.freepik.com/premium-vector/study-house-logo-template-design_316488-433.jpg'} height={150} width={250} alt='logo'></Image>
                <form className='flex justify-center flex-col gap-6 w-full' onSubmit={(e) => e.preventDefault()}>
                    <h1 className='text-2xl text-center font-bold'>Email Address</h1>
                    <input className={`${inputFieldCommonCSS}`} type="email" placeholder='example@gmail.com' />
                    {/* <div>
                        <div className='flex justify-between'>
                            <label className='text-xl font-semibold'>Password</label>
                            <button className='text-xl text-sky-400 font-medium hover:underline'>Forgot Password</button>
                        </div>
                        <input className={`${inputFieldCommonCSS} w-full`} type="password" placeholder='XXXXXXXX' />
                    </div> */}
                    <button className={`${loginBtnCSS}`}>Next</button>
                    {/* <button className={`${loginBtnCSS}`}>Login</button> */}
                </form>
            </div>
        </AuthContainer>
    );
};

export default Login;