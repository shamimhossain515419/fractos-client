import React from 'react';

const page = () => {
    return (
        <div className='grid grid-cols-2 max-h-screen min-h-screen overflow-y-scroll text-black'>
            {/* LEFT SIDE */}
            <div className="col-span-2 w-full lg:col-span-1 p-6 bg-gray-100">
                {/* terms and conditions content here */}
                <h1 className='text-xl lg:text-2xl font-bold mb-5'>Terms & Conditions:</h1>
                <ol className='space-y-3'>
                    <li className='font-semibold'>
                        <span className='text-gray-600'>1. </span>
                        Eligibility:
                        <span className='font-normal'> Applicants must meet the minimum qualifications and criteria as specified by the organization.</span>
                    </li>
                    <li className='font-semibold'>
                        <span className='text-gray-600'>2. </span>
                        Application Submission:
                        <span className='font-normal'> By submitting an application, applicants acknowledge that all provided information is accurate and complete.</span>
                    </li>
                    <li className='font-semibold'>
                        <span className='text-gray-600'>3. </span>
                        Background Check:
                        <span className='font-normal'> The organization may conduct a background check as part of the application process.</span>
                    </li>
                    <li className='font-semibold'>
                        <span className='text-gray-600'>4. </span>
                        Reference Checks:
                        <span className='font-normal'> The organization may contact provided references to verify qualifications.</span>
                    </li>
                    <li className='font-semibold'>
                        <span className='text-gray-600'>5. </span>
                        Confidentiality:
                        <span className='font-normal'> All applicant information will be kept confidential and used only for application processing.</span>
                    </li>
                    <li className='font-semibold'>
                        <span className='text-gray-600'>6. </span>
                        Equal Opportunity:
                        <span className='font-normal'> The organization is an equal opportunity employer and does not discriminate on the basis of race, gender, religion, etc.</span>
                    </li>
                </ol>
            </div>
            {/* RIGHT SIDE */}
            <div className="col-span-2 w-full lg:col-span-1 p-6 bg-white shadow-2xl">
                {/*teacher application form here */}
                <h2 className='text-center text-2xl font-black mb-5'>Application Form</h2>
                <form>
                    {/* FIRST AND LAST NAME */}
                    <div className='grid grid-cols-2 gap-3'>
                        <div className='col-span-2 lg:col-span-1 flex flex-col'>
                            <label htmlFor="firstName" className='font-medium'>First Name</label>
                            <input type="text" name="firstName" className='py-2 px-3 rounded-md border border-gray-300 active:border-blue-500' />
                        </div>
                        <div className='col-span-2 lg:col-span-1 flex flex-col'>
                            <label htmlFor="firstName" className='font-medium'>First Name</label>
                            <input type="text" name="firstName" className='py-2 px-3 rounded-md border border-gray-300 active:border-blue-500' />
                        </div>
                    </div>
                    {/* EMAIL */}
                    <div className='flex flex-col mt-5'>
                        <label htmlFor="firstName" className='font-medium'>Email Address</label>
                        <input type="text" name="firstName" className='py-2 px-3 rounded-md border border-gray-300 active:border-blue-500' />
                    </div>
                    {/* PHONE NUMBER */}
                    <div className='flex flex-col mt-5'>
                        <label htmlFor="firstName" className='font-medium'>Phone Number</label>
                        <input type="text" name="firstName" className='py-2 px-3 rounded-md border border-gray-300 active:border-blue-500' />
                    </div>
                    {/* ADD CV */}
                    <div className='flex flex-col gap-2 mt-5'>
                        <label htmlFor="firstName" className='font-medium'>CV/RESUME</label>
                        <input type="file" name="firstName" className='py-2 px-3 rounded-md border border-gray-300 active:border-blue-500' />
                    </div>
                    <button
                        type='submit'
                        href={'/teacher/apply'} // Replace with the actual link to your teacher application page
                        className="text-blue-500 hover:text-white mt-5 bg-blue-100 hover:text-blue-600 py-2 px-4 rounded-full text-lg font-semibold transition duration-100 w-full hover:bg-blue-500"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default page;