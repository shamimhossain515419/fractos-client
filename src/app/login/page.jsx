'use client'
import AuthContainer from '@/Components/AuthContainer/AuthContainer';
import ComponentLevelLoader from '@/Components/DashboardNavbar/commonLoader/Commonloader';
import GoogleSignIn from '@/Components/GoogleSignIn/GoogleSignIn';
import Navbar from '@/Components/Navbar';
import { GlobalContext } from '@/GlobalState';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const Login = () => {

    const { loginUser, componentLevelLoader, setComponentLevelLoader } = useContext(GlobalContext);
    const router = useRouter();
    const [isHidden, setIsHidden] = useState(true)

    const inputFieldCommonCSS = 'rounded-lg p-2 text-base lg:text-lg outline-none border-2 border-gray-200  focus:border-sky-400 bg-white';
    const loginBtnCSS = 'w-full p-2 font-bold text-xl rounded-lg hover:shadow-md hover:shadow-gray-200';

    const { register, handleSubmit } = useForm();

    const loginHandler = (data) => {

        setComponentLevelLoader({
            loading: true,
            id: "",
        })
        loginUser(data.email, data.password)
            .then(res => {
                Swal.fire(
                    setComponentLevelLoader({
                        loading: false,
                        id: "",
                    })
                        `Welcome, ${res.user?.email}`,
                )
                router.push('/')
            })
    }
    return (
        <>
            <Navbar></Navbar>
            <AuthContainer>
                <div className='h-[100vh]  sm:mx-auto max-w-lg py-6'>
                    <Head>
                        <title >Login</title>

                    </Head>
                    <form className='flex justify-center flex-col gap-6 w-full mt-[112px]' onSubmit={handleSubmit(loginHandler)}>
                        <h1 className='font-bold text-2xl lg:text-4xl primary text-center'>Login</h1>
                        <div className='flex flex-col'>
                            <label className='text-xl secondColor font-semibold mb-2'>Email Address</label>
                            <input className={`${inputFieldCommonCSS}`} {...register('email')} type="email" placeholder='example@gmail.com' />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label className='text-xl  primary font-semibold'>Password</label>
                                <button className='text-xl    font-medium hover:underline'>Forgot Password</button>
                            </div>
                            <div className='relative mt-2'>
                                <input className={`${inputFieldCommonCSS} w-full`} {...register('password')} type={`${isHidden ? 'password' : 'text'}`} placeholder='XXXXXXXX' />
                                <div onClick={() => setIsHidden(!isHidden)} className='absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer'>
                                    {isHidden ?
                                        <Image
                                            src={'/eyeClose.png'}
                                            width={30}
                                            height={30}
                                            alt='eye-close'
                                        ></Image>
                                        :
                                        <Image
                                            src={'/eyeOpen.png'}
                                            width={30}
                                            height={30}
                                            alt='eye-open'
                                        ></Image>
                                    }
                                </div>
                            </div>
                        </div>
                        {/* <button className={`${loginBtnCSS}`}>Next</button> */}

                        <div className={`${loginBtnCSS}  text-xl    buttonColor text-black  flex justify-center items-center`}>
                            {
                                componentLevelLoader?.loading ? <><ComponentLevelLoader loading={componentLevelLoader.loading} text={'Login...'}></ComponentLevelLoader> </> : <button type='submit'> Login</button>
                            }

                        </div>

                    </form>
                    <p className='flex gap-1 items-center mt-3'>Don t Have An Account?
                        <Link className='primary hover:underline' href={'/register'}>Register</Link>
                    </p>
                    <GoogleSignIn></GoogleSignIn>
                </div>
            </AuthContainer>
        </>

    );
};

export default Login;