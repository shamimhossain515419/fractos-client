"use client"

import CommonTitle from "../CommonTitle/CommonTitle";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
const Premium = () => {
    return (
        <div>

            <CommonTitle title={"Premium Features"}></CommonTitle>
            <div className="grid grid-cols-1 gap-y-10 w-full">

                <div className="grid grid-cols-12 gap-10 rounded-xl bg-white shadow-lg p-2 md:p-5 w-full col-span-1 border-2 border-[#0c009455]">
                    <div className="col-span-4">
                        <Player
                            autoplay
                            loop
                            src="/mock-exam-icon.json"
                            className='w-full h-[300px]'
                        >
                            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>
                    </div>
                    <div className="col-span-8">
                        <h3 className="text-xl md:text-2xl mb-10 text-[#0C0094] font-bold">Mock Exam</h3>
                        <p className="font-semibold text-lg">Our website's "Mock Exam" feature provides users with the ability to create custom practice exams, featuring a wide range of questions and topics. Users receive instant feedback, complete with detailed scoring and explanations, helping them identify areas for improvement. This feature offers a realistic exam environment, enhancing preparation and time management skills</p>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-10 rounded-xl bg-white shadow-lg p-2 md:p-5 w-full col-span-1 border-2 border-[#0c009455]">
                    <div className="col-span-4">
                        <Player
                            autoplay
                            loop
                            src="/live-exam-icon.json"
                            className='w-full h-[300px]'
                        >
                            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>
                    </div>
                    <div className="col-span-8">
                        <h3 className="text-xl md:text-2xl mb-10 text-[#0C0094] font-bold">Live Exam</h3>
                        <p className="font-semibold text-lg">
                            Our "Live Exam" feature offers users the opportunity to take real-time, proctored exams in a secure and controlled environment, simulating the actual exam experience. It includes timed examinations to help users practice effective time management and receive instant performance feedback. Real-time peer comparison enables users to gauge their performance relative to others, enhancing their preparation for the actual exam.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-10 rounded-xl bg-white shadow-lg p-2 md:p-5 w-full col-span-1 border-2 border-[#0c009455]">
                    <div className="col-span-4">
                        <Player
                            autoplay
                            loop
                            src="/feedback-support-icon.json"
                            className='w-full h-[300px]'
                        >
                            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>
                    </div>
                    <div className="col-span-8">
                        <h3 className="text-xl md:text-2xl mb-10 text-[#0C0094] font-bold">Feedback & Support</h3>
                        <p className="font-semibold text-lg">
                            Our "Feedback & Support" feature provides users with a direct and efficient channel for seeking assistance and sharing their suggestions or concerns. It offers a user-friendly interface for submitting feedback or inquiries, with prompt response times. This feature aims to enhance user satisfaction, improve the platform's quality, and create a sense of community by fostering open communication between users and our support team.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-10 rounded-xl bg-white shadow-lg p-2 md:p-5 w-full col-span-1 border-2 border-[#0c009455]">
                    <div className="col-span-4">
                        <Player
                            autoplay
                            loop
                            src="/performance-analysis-icon.json"
                            className='w-full h-[300px]'
                        >
                            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>
                    </div>
                    <div className="col-span-8">
                        <h3 className="text-xl md:text-2xl mb-10 text-[#0C0094] font-bold">Perfomance Analysis</h3>
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