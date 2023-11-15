'use client'

import React, { useContext, useEffect, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import CommonTitle from '@/Components/CommonTitle/CommonTitle';
import { GetExam_reviews } from '@/services/exam-reviews';
import { GlobalContext } from '@/GlobalState';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);


const page = () => {
    const { user } = useContext(GlobalContext)
    const [analysisData, setAnalysisData] = useState(null);
    const [subjectLabels, setSubjectLabels] = useState([]);
    const [wrongPerSubject, setWrongPerSubject] = useState([]);
    const [correctPerSubject, setCorrectPerSubject] = useState([]);
    const [ScriptPerSubject, setScriptPerSubject] = useState([]);
    const [totalAccuracy,setTotalAccuracy] = useState({})

    // abdur rahman Code
    const GetExamData = async (email) => {
        const data = await GetExam_reviews(email);
        console.log('Analysis Data', data);
        setAnalysisData(data)

    }

    

    useEffect(() => {
        if (user) {
            GetExamData(user?.email)
        }

    }, [user])

    useEffect(() => {
        const examNameLengths = {};
        let totalCorrect = 0;
        let totalWrong = 0;
        let totalScript = 0;
    
        // Iterate over the analysisData
        analysisData?.forEach(item => {
            const examName = item.exam_name;
            const wrong = item.wrong.length;
            const right = item.right.length;
            const script = item.number;
    
            // Update totalCorrect and totalWrong
            totalCorrect += right;
            totalWrong += wrong;
            totalScript += script;
    
            // Check if the exam name is already in the object
            if (examName in examNameLengths) {
                // Accumulate the lengths for the existing exam name
                examNameLengths[examName].wrong += wrong;
                examNameLengths[examName].right += right;
                examNameLengths[examName].script += script;
            } else {
                // Add the exam name to the object
                examNameLengths[examName] = {
                    wrong,
                    right,
                    script
                };
            }
        });
    
        // Convert the object values to arrays
        const examNamesArray = Object.keys(examNameLengths);
        const wrongArray = examNamesArray.map(examName => examNameLengths[examName].wrong);
        const rightArray = examNamesArray.map(examName => examNameLengths[examName].right);
        const scriptArray = examNamesArray.map(examName => examNameLengths[examName].script);
    
        // Set state with the arrays
        setSubjectLabels(examNamesArray);
        setCorrectPerSubject(rightArray);
        setWrongPerSubject(wrongArray);
        setScriptPerSubject(scriptArray);
    
        // Set state for totalAccuracy
        setTotalAccuracy({
            totalCorrect,
            totalWrong,
            totalScript
        });
    
        console.log('SubjectLabels:', subjectLabels, 'rightPerSubject:', correctPerSubject, 'wrongPerSubject:', wrongPerSubject);
        console.log('Total Accuracy:', totalAccuracy);
    }, [analysisData]);


    // end



    // horizontal bar chart configurations
    const horizontalBarChartData = {
        labels: subjectLabels,
        datasets: [
            {
                label: 'Wrong',
                data: wrongPerSubject.map(stringNumbers => parseInt(stringNumbers)), // Replace with your 'Wrong' data
                backgroundColor: 'red',
            },
            {
                label: 'Correct',
                data: correctPerSubject.map(stringNumbers => parseInt(stringNumbers)), // Replace with your 'Correct' data
                backgroundColor: 'green',
            },
            {
                label: 'Skipped',
                data: ScriptPerSubject.map(stringNumbers => parseInt(stringNumbers)),
                backgroundColor: 'yellow',
            },
        ],
    };
    const horizontalBarChartOptions = {
        indexAxis: 'y', // This sets the x-axis to be vertical
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    };

    // doughnut chart configurations
    console.log(totalAccuracy);
    const dougnutData = {
        labels: ['Wrong', 'Correct',"Script"],
        datasets: [
            {
                data: [totalAccuracy.totalWrong, totalAccuracy.totalCorrect,totalAccuracy?.totalScript],
                backgroundColor: ['red', 'green',"yellow"],
            },
        ],
    };
    console.log(dougnutData);
    const doughnutOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom'
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };

    // for all vertical bar chart
    const verticalBarChartOptions = {
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };



    return (
        <div>

            <CommonTitle title={"performance-analysis"}></CommonTitle>
            <div className='grid grid-cols-1  md:grid-cols-12 gap-5 '>
                <div className='col-span-12 xl:col-span-4 p-2 lg:p-5 text-white rounded-lg  secondBg shadow-lg'>
                    <h3 className='text-xl  capitalize mb-5 primary'>accuracy</h3>
                    <div className='h-[250px] w-[250px] mx-auto'>
                        <Doughnut data={dougnutData} options={doughnutOptions} />
                    </div>
                </div>
                <div className='col-span-12 text-white xl:col-span-8 p-2 lg:p-5 secondBg rounded-lg shadow-lg'>
                    <h3 className='text-xl mb-5 capitalize primary'>Subjective accuracy</h3>
                    <Bar  className=' capitalize' data={horizontalBarChartData} options={horizontalBarChartOptions} />
                </div>
            </div>
        </div>
    );
};

export default page;