'use client'
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import reChart from "../../assets/images/r9Yvz.png"
import "./Dashboard.css";
import { GlobalContext } from "@/GlobalState";
import CommonImage from "../CommonImage/CommonImage";
import { getAllUser } from "@/services/users";
import Link from "next/link";
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
import { GetExam_reviews } from "@/services/exam-reviews";
import { RxAvatar } from "react-icons/rx";

const data2 = [
  {
    name: "bangla",
    right: 23,
    wrong: 23,

  },
  {
    name: "bangla",
    right: 23,
    wrong: 23,

  },
  {
    name: "bangla",
    right: 23,
    wrong: 23,
    subject: "bangla",
  },

];


const Dashboard = async () => {


  const { user, userinfo } = useContext(GlobalContext);
  const [allUser, setAllUser] = useState([]);
  const [rank, setRank] = useState(0);
  const [Exam, setExam] = useState([]);
  const [charData, setChartData] = useState([])
  const getAllData = async () => {
    const result = await getAllUser();
    const sortData = result?.data.sort((a, b) => b?.rank - a?.rank);
    setAllUser(sortData)
    if (user) {
      const data = await GetExam_reviews(user?.email);
      setExam(data)
    }
    sortData?.map((item, index) => {
      if (item?.email === user?.email) {
        setRank(index);
      }
    })
  }


  useEffect(() => {
    getAllData();

  }, [user])




  console.log(charData);
  console.log(allUser);
  console.log(rank);
  console.log(Exam, "shnmimadf");



  return (
    <div>
      <div className="py-10  mt-2">
        <h2 className=" text-xl   md:text-xl   primary  xl:text-3xl font-bold  ps-2">Dashboard</h2>

        <div className="mark-container py-3 grid lg:grid-cols-3  md:grid-cols-2 items-center gap-3 sm:grid-cols-1  mt-5 px-2">

          <div className="item w-full   primaryBg rounded h-full  flex flex-row  p-3 shadow-xl">
            <div className="  w-full">
              <div className=" flex justify-between items-center gap-2 w-full">
                <h2 className="text-2xl font-bold  capitalize">{user?.displayName ? user?.displayName : null}</h2>

                <CommonImage data={user}></CommonImage>
              </div>

              <div className=" flex justify-between gap-2 items-center  w-full">
                <div>
                  <h4 className="text-1xl font-bold  secondColor "> {userinfo?.collage ? userinfo?.collage : "collage"} </h4>
                  <p className="lg:text-5xl md:text-3xl sm:text-2xl font-bold  primary">
                    {userinfo?.rank ? userinfo?.rank : 0}
                  </p>
                </div>

                <div className="text-right ">

                  <p>
                    <button className="block py-2 px-2 text-xl   primaryBg rounded text-white mt-10">
                      Point:  {userinfo?.mark ? userinfo?.mark : 0}  Exam:  {userinfo?.exam ? userinfo?.exam : 0}
                    </button>
                  </p>
                </div>
              </div>



            </div>


          </div>

          <div className="item w-full primaryBg shadow-md rounded h-full  primaryBg  py-2 px-3">
            <h1 className="lg:text-3xl md:text-2xl sm:text-xl font-bold primary ">
              Practice Fast{" "}
            </h1>
            <h4 className="lg:text-xl md:text-lg  font-bold secondColor mt-2">
              Save Your Time
            </h4>

            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            ></label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md bg-transparent  border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Subjects..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="h-full rounded-md border-0 bg-transparent primaryBg py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                  <option>Math</option>
                  <option>English</option>
                  <option>Higher Math</option>
                </select>
              </div>
            </div>
            <Link href={'/dashboard/mock-exam'} className="px-2 py-2  rounded  buttonColor text-black font-bold mt-2 float-right">
              Start Now
            </Link>
          </div>

          <div className="item w-full primaryBg shadow-md rounded  h-full   primary    py-3 px-3">
            <h1 className="lg:text-3xl md:text-2xl sm:text-xl font-bold  primary ">
              Mock Test{" "}
            </h1>
            <h4 className="lg:text-xl md:text-lg  secondColor  font-bold  mt-2">
              Topic,Chapter and choose subject
            </h4>

            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            ></label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 bg-transparent  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Subjects..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="h-full    rounded-md border-0  py-0 pl-2 pr-7 bg-transparent  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                  <option>Math</option>
                  <option>English</option>
                  <option>Higher Math</option>
                </select>
              </div>
            </div>
            <Link href={'/dashboard/mock-exam'} className="px-2 py-2  rounded buttonColor text-black font-bold mt-2 float-right">
              Start Now
            </Link>
          </div>

        </div>

        <div className="middle flex flex-col sm:flex-row px-2 mt-4 gap-2 ">
          <div className="middle-left w-full sm:w-1/2 h-[400px] py-12 primaryBg border">
            <h1 className="text-xl font-bold px-2 py-2 primary">
              Total Analytics
            </h1>

            <ResponsiveContainer className={"w-full"} width="100%" height={300}>
              <LineChart
                width={500} // You can adjust this as needed
                height={300}
                data={Exam?.map(item => {
                  const data = {
                    name: item?.exam_name?.slice(0, 8),
                    right: item?.right?.length,
                    wrong: item?.wrong?.length

                  }
                  return data



                })}
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
                  dataKey="wrong"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="right" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="middle-right w-full sm:w-1/2 h-[400px] py-12 primaryBg border primary ">
            <div className="overflow-x-auto">
              <table className="table w-full h-full">

                <thead className=" w-full">
                  <tr className=" primaryBg text-white font-bold uppercase w-full">

                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Marks</th>
                  </tr>
                </thead>
                <tbody className="primaryBg w-full  ">
                  {
                    allUser?.slice(rank, rank + 4)?.map((item, index) => <tr key={item?._id} className={` ${item?.email === user?.email ? "bg-[#0202021e]" : "  bg-transparent  rounded p-[2px] "} my-2 px-2 w-full `}  >
                      <td>
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="font-bold ">{index + 1}</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center  mx-auto  py-3">
                        {/* Displaying Rx Avatar if user has no image. */}
                        {
                          item?.photo ?
                            <Image className="w-[50px] object-fill h-[50px] rounded-full" width={50} height={50} src={item?.photo} alt=""></Image>
                            :
                          <RxAvatar className="w-[50px] h-[50px] rounded-full"></RxAvatar>
                          }

                      </td>
                      <td className="text-center">
                        {item?.name}

                      </td>
                      <td className=" text-center">{item?.mark}</td>

                    </tr>)
                  }



                </tbody>


              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
