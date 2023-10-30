// "use client"
// import { useState } from 'react';
// import { Chart } from 'react-apexcharts';

import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


const page = () => {
    const [barChartData, setBarChartData] = useState({
        datasets: []
    })

    const [barChartOptions, setBarChartOptions] = useState({});

    useEffect(() =>{
        setBarChartData({
            labels:['Skipped', 'Wrong', 'Correct'],
            datasets:[
                {
                    labels: ['Skipped'],
                    data: [10],
                    backgroundColor: 'yellow'
                },
                {
                    label: ['Wrong'],
                    data: [20],
                    backgroundColor: 'red'
                },
                {
                    label: ['Correct'],
                    data: [70],
                    backgroundColor: 'green'
                }
            ]
        })

        setBarChartOptions({
            plugins:{
                legend:{
                    position: 'bottom'
                },
                title:{
                    display: true,
                    text: 'Exam Result'
                },
                maintainAspectRatio: false,
                responsive: true
            }
        })
    },[])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-5'>
                <div className='md:col-span-4 shadow-lg rounded-lg'></div>
                <div className='md:col-span-8 shadow-lg rounded-lg'>
                <Bar data={barChartData} options={barChartOptions}></Bar>
                </div>
            </div>
        </div>
    );
};

export default page;