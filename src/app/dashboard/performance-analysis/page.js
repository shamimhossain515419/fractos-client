"use client"
// import { useState } from 'react';
// import { Chart } from 'react-apexcharts';

import React from 'react';
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


    // horizontal bar chart configurations
    const horizontalBarChartData = {
        labels: ['Math', 'Science', 'History', 'English'],
        datasets: [
            {
                label: 'Wrong',
                data: [8, 4, 5, 2], // Replace with your 'Wrong' data
                backgroundColor: 'red',
            },
            {
                label: 'Correct',
                data: [5, 6, 7, 3], // Replace with your 'Correct' data
                backgroundColor: 'green',
            },
            {
                label: 'Skipped',
                data: [3, 2, 1, 4], // Replace with your 'Skipped' data
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
    const dougnutData = {
        labels: ['Skipped', 'Wrong', 'Correct'],
        datasets: [
            {
                data: [15, 30, 55],
                backgroundColor: ['yellow', 'red', 'green'],
            },
        ],
    };
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


    // bangla weakness chart
    const BanWeaknessBarChartData = {
        labels: ['সোনার তরী', 'আমার পথ', 'বিলাসি', 'অপরিচিতা', 'লালসালু', 'প্রতিদান'],
        datasets: [
            {
                label: 'Wrong',
                data: [8, 4, 5, 2], // Replace with your 'Wrong' data
                backgroundColor: 'red',
            },
            {
                label: 'Correct',
                data: [5, 6, 7, 3], // Replace with your 'Correct' data
                backgroundColor: 'green',
            },
            {
                label: 'Skipped',
                data: [3, 2, 1, 4], // Replace with your 'Skipped' data
                backgroundColor: 'yellow',
            },
        ],
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
            <h2 className='text-2xl md:text-4xl text-[#0C0094] mb-10'>পারফর্মেন্স অ্যানালাইসিস</h2>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-5'>
                <div className='col-span-12 xl:col-span-4 p-2 lg:p-5 rounded-lg shadow-lg'>
                    <h3 className='text-xl mb-5'>অ্যাকুরেসি</h3>
                    <div className='h-[250px] w-[250px] mx-auto'>
                        <Doughnut data={dougnutData} options={doughnutOptions} />
                    </div>
                </div>
                <div className='col-span-12 xl:col-span-8 p-2 lg:p-5 rounded-lg shadow-lg'>
                    <h3 className='text-xl mb-5'>বিষয়ভিত্তিক অ্যাকুরেসি</h3>
                    <Bar data={horizontalBarChartData} options={horizontalBarChartOptions} />
                </div>
                <div className='col-span-12 xl:col-span-6 p-2 lg:p-5 rounded-lg shadow-lg'>
                    <h3 className='text-xl mb-5'>দুর্বলতাঃ বাংলা</h3>
                    <Bar data={BanWeaknessBarChartData} options={verticalBarChartOptions}></Bar>
                </div>
            </div>
        </div>
    );
};

export default page;