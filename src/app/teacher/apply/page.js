import React from 'react';

const page = () => {
    return (
        <div className='flex'>
            {/* LEFT SIDE */}
            <div className="flex-shrink-0 w-1/2 p-6 bg-gray-200">
                {/* terms and conditions content here */}
            </div>
            {/* RIGHT SIDE */}
            <div className="flex-shrink-0 w-1/2 p-6 bg-white">
                {/*teacher application form here */}
            </div>
        </div>
    );
};

export default page;