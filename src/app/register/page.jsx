'use client'
import AuthContainer from '@/Components/AuthContainer/AuthContainer';
import ComponentLevelLoader from '@/Components/DashboardNavbar/commonLoader/Commonloader';
import { GlobalContext } from '@/GlobalState';
import { registerNewUser } from '@/services/users';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const Page = () => {
    const { createUser, updateUserProfile, componentLevelLoader, setComponentLevelLoader } = useContext(GlobalContext);
    const { register, handleSubmit, formState, watch } = useForm();
    const { errors } = formState;
    const router = useRouter();
    const [isHidden, setIsHidden] = useState(true)

    const inputFieldCommonCSS = 'rounded-lg p-2 text-base lg:text-lg bg-gray-200 outline-none w-full border-2 border-gray-200  focus:border-sky-400';
    const loginBtnCSS = 'w-full p-2 bg-green-500 font-bold text-white text-xl rounded-lg hover:shadow-md hover:shadow-gray-200';

    const registrationHandler = async (data) => {
        const fromData = { email: data?.email, exam: 0, photo: "", name: data?.name ? data?.name : "", password: data?.password, role: "user", category: "student", phone: 0, about: "", batch: "", collage: "", level: "", rank: 0, mark: 0 }
        setComponentLevelLoader({
            loading: true,
            id: "",
        })
        const result = await registerNewUser(fromData);



        createUser(data.email, data.password)
            .then(result => {
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
                        router.push('/dashboard/setting')
                    })
            })
    }

    return (
        <AuthContainer>
            <div className='pb-[130px] sm:mx-auto max-w-lg  py-4'>
                <Head>
                    <title>Create Account</title>
                </Head>

                <form onSubmit={handleSubmit(registrationHandler)} className='flex justify-center flex-col gap-6 w-full mt-[100px]'>
                    <h1 className='font-bold text-2xl lg:text-4xl text-center'>Create Account</h1>
                    <div>
                        <label className='text-xl font-semibold'>Full Name</label>
                        <input className={`${inputFieldCommonCSS}`} {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })} type="text" name='name' placeholder='Enter Full Name' />
                        <p className='text-sm ml-3 text-red-600'>{errors.email?.message}</p>
                    </div>
                    <div>
                        <label className='text-xl font-semibold'>Email Address</label>
                        <input className={`${inputFieldCommonCSS}`} {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            }
                        })} type="email" name='email' placeholder='example@gmail.com' />
                        <p className='text-sm ml-3 text-red-600'>{errors.email?.message}</p>
                    </div>
                    <div>
                        <label className='text-xl font-semibold'>Password</label>
                        <div className='relative'>
                            <input className={`${inputFieldCommonCSS} w-full`} {...register("password", {
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
                        <p className='text-sm ml-3 text-red-600'>{errors.password?.message === 'Password is required' ? '' : errors.password?.message}</p>
                    </div>
                    <div>
                        <label className='text-xl font-semibold'>Confirm Password</label>
                        <input className={`${inputFieldCommonCSS} w-full`} type="password" {...register("confirmPassword", {
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
                        <p className='text-sm ml-3 text-red-600'>{errors.confirmPassword?.message === 'Confirm Password' ? '' : errors.confirmPassword?.message}</p>
                    </div>

                    <div className={`${loginBtnCSS}  text-xl   flex justify-center items-center`}>
                        {
                            componentLevelLoader?.loading ? <><ComponentLevelLoader loading={componentLevelLoader.loading} text={'create..'}></ComponentLevelLoader> </> : <button type='submit'>  Create</button>
                        }

                    </div>

                </form>

                <p className='flex gap-1 items-center mt-3'>Already Have An Account?
                    <Link className='text-[#4A3AFF] hover:underline' href={'/login'}>Login</Link>
                </p>
            </div>
        </AuthContainer>
    );
};

export default Page;