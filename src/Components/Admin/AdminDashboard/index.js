"use client";

import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data2 = [
  {
    name: "A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function AdminDashboard() {
  return (
    <div>
      
        <div className="admin-container flex primaryBg p-4">
          

          <div className="admin-right w-full  primaryBg">
            <h1 className="text-3xl font-bold primary px-1 py-2">
              Welcome !
            </h1>

            <div className="upper-container grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 px-2  primaryBg text-white ">
              <div className="w-full text-center py-7 shadow-md">
                <h1 className="text-2xl font-bold primary"> 89600</h1>
                <h1 className="text-1xl font-bold secondColor">
                  Life time total sell
                </h1>
              </div>
              <div className="w-full  text-center py-7 shadow-md">
                <h1 className="text-2xl font-bold primary">9659600</h1>
                <h1 className="text-1xl font-bold secondColor">
                  Income amounts
                </h1>
              </div>
              <div className="w-full  text-center py-7 shadow-md">
                <h1 className="text-2xl font-bold primary">34600</h1>
                <h1 className="text-1xl font-bold secondColor">Total users</h1>
              </div>
              <div className="w-full text-center py-7 shadow-md">
                <h1 className="text-2xl font-bold primary">600</h1>
                <h1 className="text-1xl font-bold secondColor">Total visits</h1>
              </div>
            </div>


            <div className="middle flex flex-col sm:flex-row px-2 mt-4 gap-2 ">
              <div className="middle-left w-full sm:w-1/2 h-[400px] py-12 primaryBg border">
                <h1 className="text-1xl font-bold px-2 py-2 primary">
                  Total Revenue
                </h1>

                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    width={500} // You can adjust this as needed
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="middle-right w-full sm:w-1/2 h-[400px] py-12 primaryBg border text-white ">
                <h1 className="text-1xl font-bold px-2 py-2 primary">
                  Total Analytics
                </h1>

                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    width={500} // You can adjust this as needed
                    height={300}
                    data={data2}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="px-2 mt-5  ">
              <div className="lower-part w-full px-2 py-5 border ">
                <div className="px-2 py-5">
                  <h1 className="text-1xl font-bold px-2 py-2 primary">
                    Contact
                  </h1>

                  <div className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>
                            <label>
                              <input type="checkbox" className="checkbox" />
                            </label>
                          </th>
                          <th className="text-2xl font-bold primary">Name</th>
                          <th className="text-2xl font-bold primary">Job</th>
                          <th className="text-2xl font-bold primary">Favorite Color</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <th>
                            <label>
                              <input type="checkbox" className="checkbox" />
                            </label>
                          </th>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  {/* image boshbe */}
                                </div>
                              </div>
                              <div>
                                <div className="font-bold primary">
                                  Hart Hagerty
                                </div>
                                <div className="text-sm opacity-50 primary">
                                  United States
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="primary">
                            Zemlak, Daniel and Leannon
                          </td>
                          <td className="primary">Purple</td>
                          <th>
                            <button className="btn btn-ghost btn-xs primary">
                              details
                            </button>
                          </th>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <th>
                            <label>
                              <input type="checkbox" className="checkbox" />
                            </label>
                          </th>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  {/* image boshbe */}
                                </div>
                              </div>
                              <div>
                                <div className="font-bold primary">
                                  Brice Swyre
                                </div>
                                <div className="text-sm opacity-50 primary">
                                  China
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="primary">
                            Carroll Group

                          </td>
                          <td className="primary">Red</td>
                          <th>
                            <button className="btn btn-ghost btn-xs primary">
                              details
                            </button>
                          </th>
                        </tr>
                        {/* row 3 */}
                        <tr>
                          <th>
                            <label>
                              <input type="checkbox" className="checkbox" />
                            </label>
                          </th>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  {/* image boshbe */}
                                </div>
                              </div>
                              <div>
                                <div className="font-bold primary">
                                  Marjy Ferencz
                                </div>
                                <div className="text-sm opacity-50 primary">
                                  Russia
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="primary">
                            Rowe-Schoen

                          </td>
                          <td className="primary">Crimson</td>
                          <th>
                            <button className="btn btn-ghost btn-xs primary">
                              details
                            </button>
                          </th>
                        </tr>
                        {/* row 4 */}
                        <tr>
                          <th>
                            <label>
                              <input type="checkbox" className="checkbox" />
                            </label>
                          </th>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  {/* image boshbe */}
                                </div>
                              </div>
                              <div>
                                <div className="font-bold primary">
                                  Yancy Tear
                                </div>
                                <div className="text-sm opacity-50 primary">
                                  Brazil
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="primary">
                            Wyman-Ledner

                          </td>
                          <td className="primary">Indigo</td>
                          <th>
                            <button className="btn btn-ghost btn-xs primary">
                              details
                            </button>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
    </div>
  );
}
