import React from 'react';

const AuthContainer = ({children}) => {
    return (
        <div className='w-full sm:mx-auto max-w-lg px-2'>
            {children}
        </div>
    );
};

export default AuthContainer;