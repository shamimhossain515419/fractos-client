'use client'
import AuthContainer from '@/Components/AuthContainer/AuthContainer';
import ComponentLevelLoader from '@/Components/DashboardNavbar/commonLoader/Commonloader';
import GoogleSignIn from '@/Components/GoogleSignIn/GoogleSignIn';
import Navbar from '@/Components/Navbar';
import { GlobalContext } from '@/GlobalState';
import { registerNewUser } from '@/services/users';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import Swal from 'sweetalert2';


const Page = () => {
    const { createUser, updateUserProfile, componentLevelLoader, setComponentLevelLoader, logOutUser, setUser } = useContext(GlobalContext);
    const { register, handleSubmit, formState, watch } = useForm();
    const { errors } = formState;
    const router = useRouter();
    const [isHidden, setIsHidden] = useState(true)
    const [isHidden2, setIsHidden2] = useState(true)

    const inputFieldCommonCSS = 'rounded-lg p-2 text-base lg:text-lg primaryBg outline-none w-full border-2 border-gray-200  focus:border-sky-400';
    const loginBtnCSS = 'w-full p-2 font-bold text-xl rounded-lg';

    const registrationHandler = async (data) => {
        const fromData = { email: data?.email, exam: 0, photo: "", name: data?.name ? data?.name : "", password: data?.password, role: "user", category: "student", phone: 0, about: "", batch: "", collage: "", level: "", rank: 0, mark: 0 }
        setComponentLevelLoader({
            loading: true,
            id: "",
        })
        const result = await registerNewUser(fromData);



        // Creating a new user account
        createUser(data.email, data.password)
            .then(result => {
                // forcing user to login by setting setUser(null)
                setUser(null)
                updateUserProfile(data.name)
                    .then(res => {

                        setComponentLevelLoader({
                            loading: false,
                            id: "",
                        })
                        Swal.fire(
                            'successfull!',
                            'Your account has been created.',
                            'success'
                        )
                        // after successfull creation of a account navigating to login page.
                        logOutUser()
                            .then(() => {
                                router.push('/login')
                            })
                    })
            })
    }

    return (
        <>
            <Navbar></Navbar>
            <AuthContainer>
                <div className='pb-[130px]  sm:mx-auto max-w-lg  py-4'>

                    <div>
                        <form onSubmit={handleSubmit(registrationHandler)} className='flex justify-center flex-col gap-6 w-full mt-[32px]'>
                            <h1 className='font-bold text-2xl lg:text-4xl text-center primary '>Create Account</h1>
                            <div>
                                <label className='text-xl font-semibold mb-2 secondColor'>Full Name</label>
                                <input className={`${inputFieldCommonCSS} bg-transparent `} {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })} type="text" name='name' placeholder='Enter Full Name' />
                                <p className='text-sm ml-3 text-red-600'>{errors.email?.message}</p>
                            </div>
                            <div>
                                <label className='text-xl font-semibold mb-2 secondColor'>Email Address</label>
                                <input className={`${inputFieldCommonCSS} bg-transparent `} {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    }
                                })} type="email" name='email' placeholder='example@gmail.com' />
                                <p className='text-sm ml-3 text-red-600'>{errors.email?.message}</p>
                            </div>
                            <div>
                                <label className='text-xl font-semibold mb-2 secondColor'>Password</label>
                                <div className='relative'>
                                    <input className={`${inputFieldCommonCSS} w-full bg-transparent  `} {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Password should have at least 6 characters'
                                        },
                                        pattern: {
                                            value: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                                            message: 'At least one special character and one uppercase letter is required'
                                        }
                                    })} type={`${isHidden ? 'password' : 'text'}`} name='password' placeholder='Enter Password' />
                                    <div onClick={() => setIsHidden(!isHidden)} className='absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer'>
                                        {isHidden ?
                                        <BsEyeSlashFill className="w-[30px] h-[30px] text-[#0EE6B8]"></BsEyeSlashFill>
                                        :
                                        <BsEyeFill className="w-[30px] h-[30px] text-[#0EE6B8]"></BsEyeFill>
                                        }
                                    </div>
                                </div>
                                <p className='text-sm ml-3 text-red-600'>{errors.password?.message === 'Password is required' ? '' : errors.password?.message}</p>
                            </div>
                            <div>
                                <label className='text-xl font-semibold mb-2 secondColor'>Confirm Password</label>
                                <div className="relative">
                                    <input className={`${inputFieldCommonCSS} w-full bg-transparent `} type={`${isHidden2 ? 'password' : 'text'}`} {...register("confirmPassword", {
                                        required: {
                                            value: true,
                                            message: 'Confirm Password'
                                        },
                                        validate: (value) => {
                                            if (watch("password") !== value) {
                                                return 'Password did not match'
                                            }

                                        }
                                    })} name='confirmPassword' placeholder='Confirm Password' />
                                    <div onClick={() => setIsHidden2(!isHidden2)} className='absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer'>
                                        {isHidden2 ?
                                        <BsEyeSlashFill className="w-[30px] h-[30px] text-[#0EE6B8]"></BsEyeSlashFill>
                                        :
                                        <BsEyeFill className="w-[30px] h-[30px] text-[#0EE6B8]"></BsEyeFill>
                                        }
                                    </div>
                                </div>
                                <p className='text-sm ml-3 text-red-600'>{errors.confirmPassword?.message === 'Confirm Password' ? '' : errors.confirmPassword?.message}</p>
                            </div>

                            <div className={`${loginBtnCSS}  text-xl   buttonColor  text-white  flex justify-center items-center`}>
                                {
                                    componentLevelLoader?.loading ? <><ComponentLevelLoader loading={componentLevelLoader.loading} text={'create..'}></ComponentLevelLoader> </> : <button type='submit'>  Create</button>
                                }

                            </div>

                        </form>

                        <p className='flex gap-1 items-center mt-3'>Already Have An Account?
                            <Link className=' primary hover:underline' href={'/login'}>Login</Link>
                        </p>
                        <GoogleSignIn></GoogleSignIn>
                    </div>



                </div>
            </AuthContainer>
        </>
    );
};

export default Page;