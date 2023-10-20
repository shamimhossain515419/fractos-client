import React from 'react';

const AuthContainer = ({children}) => {
    return (
        <div className='w-full bg-auth-bg px-2'>
            {children}
        </div>
    );
};

export default AuthContainer;