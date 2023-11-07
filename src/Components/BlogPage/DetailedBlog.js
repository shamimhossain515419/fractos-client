import Image from 'next/image';
import React from 'react';
import BlogCard from './BlogCard';
import { BsArrowLeftSquareFill } from 'react-icons/bs';
import Link from 'next/link';

const DetailedBlog = () => {
    return (
        <div className='w-full p-2 md:w-8/12 mx-auto lg:w-7/12'>
            <Link href={'/blogs'} className='flex items-center text-xl gap-2 mt-5 mb-3 md:mt-8 lg:mt-5 text-[#0EE6B8] hover:text-[#0ee6b7d3]'>
            <BsArrowLeftSquareFill />
            <span>Back</span>
            </Link>
            <h1 className={`mb-5 text-2xl lg:text-3xl font-semibold leading-[1.2] lg:leading-[1.4] text-[#E8EAED]`}>Higher Studies After HSC? Know the Top 10 Tips and Tricks part4</h1>
            <Image src={'/blogsPage/demo-thumb.webp'} width={1000} height={0} className='max-h-[463.5px] mx-auto rounded-md mb-2 w-full'></Image>
            {/* Author Information */}
            <div className='flex items-center gap-2 mb-10'>
                <Image src={'/bannerImage.png'} width={60} height={50} className='rounded-full min-h-[60px] border border-[#0EE6B8]'></Image>
                <p className='flex flex-col text-[#E8EAED]'>
                    <span>Abdur Rahman</span>
                    <span>2 November, 2023</span>
                </p>
            </div>

            {/* FULL BLOG */}
            <p className='text-[#E8EAED] mb-[80px]'>
                For Arts students, LAW is a very demanding subject. There are many more lucrative subjects such as Economics, International Relationship (IR), Journalism, and Communication.

                Arts students generally believe they have fewer options than Science and Business Studies students, but this is not entirely true. They have a variety of subjects to choose from, but one issue is that they have to share seats with other groups. As a result, they face far more competition than others.

                Arts students can switch streams and get into Business Studies. They may have fewer seats here, but the bright side is that this opportunity broadens their subject options and increases their chances of admission.

                In general, most public universities offer Political Science, Sociology, Humanities and Social Science, English (and many other languages), History, and Psychology, among many other subjects.

                Students in the arts can earn a diploma in their subjects as well as in business studies.
                <br />

                Now you know, for which faculty or university you are going to compete. And to do so you need to be prepared in a smart way.

                During this period of admission, many students become trapped by selecting the incorrect coaching center or mentor. So, all I can say is choose wisely, use common sense, and seek coaching or preparation style advice from anyone who has been admitted to your desired university in the previous year.

                Now it is time to get preparation
                <br />
                If you had prepared well for the HSC exam, you would have had an advantage at this stage because the majority of questions will come from the HSC syllabus.

                On a general view for science faculties,  Engineering and technology universities give questions on Physics, Chemistry, Maths, and English. So these are the subjects you prepare for if you want to be admitted into Engineering and Technology universities. Science and Technology Universities also follow the same pattern.

                There will be a faculty-wise exception question segment. For the Architecture faculty, there will be one Drawing section.

                Math, Physics, and English questions are asked in the Textile varsity. And then for Medical College preparation try to be the boss of Biology.

                Overall try to master the HSC level book’s syllabus and other necessary parts. And if you want to change the stream, then prepare according to that syllabus.

                <br />

                In general, for Subject BBA, prepare for Accounting, Management, Finance, and Marketing, as well as Bangla, English, and General Knowledge.

                Program BBA, on the other hand, takes the game to a whole new level. You will be tested on Math, Analytical Ability, English, and General Knowledge, as well as Bangla in some universities.

                Math will be based on class 8, 9/10 general mathematics level. Analytical Ability questions can be challenging, but if you can figure out the main part of the question, it will become the most interesting part of the entire question paper. And GK is mostly based on current events. And in the English section, it is most likely related to grammar and comprehension.

                As I said before, it is important to study smartly. I mean, questions won’t be that hard but in that small amount of time, it only matters how many you can answer correctly, not how you have done that. Try math tricks to answer quickly and efficiently.

                Same tips for Analytical Ability. Find out the main part cause there will be some part just meant to confuse you. So narrow and cut down the unnecessary parts and that will help you to answer quickly. For GK try to learn the current events more and some basic and common general knowledge from a basic GK book. And in this part, some questions will be business-related.

                And finally, if you want to change the stream, follow that unit’s syllabus.

                <br />

                Arts students usually give exams under the D unit and the question will be on Bangla, English, General Knowledge (Bangladesh and International), and a written part.

                Here Bangla will be on grammar and HSC level Bangla First Paper textbook. And then English will be based on basic grammar and comprehension. The GK part will be on a lot of Bangladesh and International parts, and to answer this one must have a thorough understanding of these two topics. And finally the written part. There will be translation, Correction Passage, and Paragraph writing.

                To change the stream, you can follow the business studies syllabus.

                <br />

                For Post HSC education, you may want to study abroad. The question now is how you’re going to do it.

                There will generally be two types of ways to study abroad. With a Full Free Scholarship and with No Scholarship.

                First, let’s talk about the requirements:

                On a basic level, you’ll need to get a score of more than 6 on the IELTS. GRE and SAT scores are also required by some universities. They also pay attention to your academic CGPA and English proficiency. Extracurricular activities are also beneficial here.

                Now let’s know the opportunities that will motivate you:

                The educational quality is far superior to ours. You can have more faculties and subjects on the plate to choose your desired one.

                This opportunity includes free exploration and earning a new experience of living in a new country.

                To know more about higher studies abroad please visit the following links:
            </p>
        </div>
    );
};

export default DetailedBlog;