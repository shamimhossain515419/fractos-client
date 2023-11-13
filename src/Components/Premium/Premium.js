'use client'
import Image from "next/image";
import CommonTitle from "../CommonTitle/CommonTitle";
import  mockImage from "./../../../public/liveexsm.png"
import LiveImage from "./../../../public/mock.png"

const Premium = () => {
    return (
        <div>
            <CommonTitle title={"Premium Features"}></CommonTitle>
            <div className="grid grid-cols-1 gap-y-10 w-full">
                <div className="grid md:grid-cols-12 md:gap-10 rounded-xl   primaryBg  shadow-lg p-2 md:p-5 w-full col-span-1 border-2 border-[#0EE6B8]">
                    <div className=" md:col-span-4 w-full">
                        <Image src={mockImage} width={320} height={300} className="mx-auto"></Image>
                    </div>
                    <div className=" md:col-span-8 w-full">
                        <h3 className="text-xl md:text-2xl mb-10  primary font-bold">Mock Exam</h3>
                        <p className="font-semibold text-lg">Our website's "Mock Exam" feature provides users with the ability to create custom practice exams, featuring a wide range of questions and topics. Users receive instant feedback, complete with detailed scoring and explanations, helping them identify areas for improvement. This feature offers a realistic exam environment, enhancing preparation and time management skills</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 gap-10 rounded-xl  primaryBg  shadow-lg p-2 md:p-5 w-full col-span-1 border-2 border-[#0EE6B8]">
                    <div className="md:col-span-4 w-full">
                        <Image src={LiveImage} width={320} height={300} className="mx-auto"></Image>
                    </div>
                    <div className="md:col-span-8 w-full">
                        <h3 className="text-xl md:text-2xl mb-10  primary font-bold">Live Exam</h3>
                        <p className="font-semibold text-lg">
                            Our "Live Exam" feature offers users the opportunity to take real-time, proctored exams in a secure and controlled environment, simulating the actual exam experience. It includes timed examinations to help users practice effective time management and receive instant performance feedback. Real-time peer comparison enables users to gauge their performance relative to others, enhancing their preparation for the actual exam.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 gap-10 rounded-xl  primaryBg  shadow-lg p-2 md:p-5 w-full col-span-1 border-2 border-[#0EE6B8]">
                    <div className="md:col-span-4 w-full">
                        <Image src={'/feedback-support-img.jpg'} width={320} height={300} className="mx-auto w-full"></Image>
                    </div>
                    <div className="md:col-span-8  w-full">
                        <h3 className="text-xl md:text-2xl mb-10 primary font-bold">Feedback & Support</h3>
                        <p className="font-semibold text-lg">
                            Our "Feedback & Support" feature provides users with a direct and efficient channel for seeking assistance and sharing their suggestions or concerns. It offers a user-friendly interface for submitting feedback or inquiries, with prompt response times. This feature aims to enhance user satisfaction, improve the platform's quality, and create a sense of community by fostering open communication between users and our support team.
                        </p>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 gap-10 rounded-xl  primaryBg  shadow-lg p-2 md:p-5 w-full col-span-1 border-2 border-[#0EE6B8]">
                    <div className="md:col-span-4">
                        <Image src={'/analysis-img.jpg'} width={320} height={300} className="mx-auto"></Image>
                    </div>
                    <div className="md:col-span-8 ">
                        <h3 className="text-xl md:text-2xl mb-10 primary font-bold">Perfomance Analysis</h3>
                        <p className="font-semibold text-lg">
                            Our "Performance Analysis" feature is designed to offer users comprehensive insights into their progress and performance on our platform. It provides users with detailed statistics and graphical representations of their performance, helping them identify areas of strength and weakness. This feature enables users to make informed decisions about their study strategies and track their improvement over time, ultimately leading to more effective learning outcomes.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Premium;