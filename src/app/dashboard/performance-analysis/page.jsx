"use client"

import React, { useState } from 'react';
import Chart from 'react-apexcharts'

const page = () => {
    const [options, setOptions] = useState({
        labels: ['skipped', 'wrong', 'correct']
    })

    const [series, setSeries] = useState([10, 30, 60])

    return (
        <div className='p-5 border'>
            <h2 className='text-xl font-semibold mb-5'>পারফর্মেন্স এনালাইসিস</h2>
            <div className='grid grid-cols-1 gap-y-10 md:grid-cols-12 md:gap-x-5'>
                <div className='p-5 shadow-lg col-span-1 md:col-span-4 w-full'>
                    <h3 className='text-lg font-semibold mb-5'>একুরেসি</h3>
                    <Chart options={options} series={series} type={'donut'} width={300}></Chart>
                </div>
                <div className='p-5 shadow-lg col-span-1 md:col-span-8 w-full'>
                <h3 className='text-lg font-semibold mb-5'>বিষয়ভিত্তিক একুরেসি</h3>
                    <Chart
                        type="bar"
                        width={500}
                        height={300}
                        series={[
                            {
                                name: "Correct",
                                data: [10, 30, 50],
                                //color: '#f90000'
                            },
                            {
                                name: "Skipped",
                                data: [20, 30, 50],
                                // color: '#000000'
                            },
                            {
                                name: "Incorrect",
                                data: [15, 35, 50],
                                // color: '#000000'
                            },
                        ]}

                        options={{
                            chart: {
                                stacked: true,
                            },
                            plotOptions: {
                                bar: {
                                    horizontal: true,
                                    columnWidth: '100%'
                                }
                            },
                            stroke: {
                                width: 1,
                            },
                            xaxis: {
                                categories: ['গনিত', 'তথ্য ও যোগাযোগ প্রযুক্তি', 'বাংলা', 'ইংরেজি', 'হিসাববিজ্ঞান', 'ব্যবসায় সংগঠন ও ব্যবস্থাপনা', 'উৎপাদন ব্যবস্থাপনা ও বিপণন', 'ফিন্যান্স, ব্যাংকিং ও বিমা', 'অর্থনীতি']
                            },
                            legend: {
                                position: 'bottom'
                            },
                            dataLabels: {
                                enabled: true,
                            },
                            grid: {
                                show: true,
                                xaxis: {
                                    lines: {
                                        show: true
                                    }
                                },
                                yaxis: {
                                    lines: {
                                        show: true
                                    }
                                }

                            }

                        }}

                    />
                </div>
                <div className='p-5 shadow-lg col-span-1 md:col-span-6 w-full'>
                <h3 className='text-lg font-semibold mb-5'>দুর্বলতাঃ তথ্য ও যোগাযোগ প্রযুক্তি</h3>
                    <Chart
                        type="bar"
                        width={500}
                        height={300}
                        series={[
                            {
                                name: "Correct",
                                data: [10, 30, 50],
                                //color: '#f90000'
                            },
                            {
                                name: "Skipped",
                                data: [20, 30, 50],
                                // color: '#000000'
                            },
                            {
                                name: "Incorrect",
                                data: [15, 35, 50],
                                // color: '#000000'
                            },
                        ]}

                        options={{
                            chart: {
                                stacked: true,
                            },
                            plotOptions: {
                                bar: {
                                    vertical: true,
                                    columnWidth: '100%'
                                }
                            },
                            stroke: {
                                width: 1,
                            },
                            xaxis: {
                                categories: ['বিশ্ব ও বাংলাদেশ পরিচিতি', 'কমিউনিকেশন ও সিস্টেমস নেটওয়ার্কিং', 'সংখ্যা পদ্বতি ও ডিজিটাল ডিভাইস', 'প্রোগামিং ভাষা', 'ডিজাইন পরিচিতি এবং এইচটিএমএল']
                            },
                            legend: {
                                position: 'bottom'
                            },
                            dataLabels: {
                                enabled: false,
                            },
                            grid: {
                                show: true,
                                xaxis: {
                                    lines: {
                                        show: true
                                    }
                                },
                                yaxis: {
                                    lines: {
                                        show: true
                                    }
                                }

                            }

                        }}

                    />
                </div>
            </div>
        </div>
    );
};

export default page;