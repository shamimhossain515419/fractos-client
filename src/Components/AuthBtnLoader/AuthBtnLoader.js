"use client"

import React from 'react';
import { PulseLoader } from 'react-spinners';

const AuthBtnLoader = ({ text, color, loading, size }) => {
    const loginBtnCSS = 'w-full p-2 font-bold text-xl rounded-lg';
    return (
        <button type='submit' className={`${loginBtnCSS}  text-xl    buttonColor text-black  flex justify-center items-center cursor-pointer`}>
            {text}
            <PulseLoader
                color={color}
                loading={loading}
                size={size || 10}
                data-testid="loader"
            />
        </button>
    );
};

export default AuthBtnLoader;