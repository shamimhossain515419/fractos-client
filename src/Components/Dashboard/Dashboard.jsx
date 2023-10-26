'use client'
import React, { useContext } from "react";
import Image from "next/image";
import reChart from "../../assets/images/r9Yvz.png"
import "./Dashboard.css";
import { GlobalContext } from "@/GlobalState";
import CommonImage from "../CommonImage/CommonImage";

const Dashboard = () => {


  const { user, userinfo } = useContext(GlobalContext)
  return (
    <div>
      <div className="py-10 bg-white mt-2">
        <h2 className="text-4xl font-bold textColor ps-2">Dashboard</h2>

        <div className="mark-container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 mt-5 px-2">
          <div className="item w-full  bg-white rounded  flex flex-row py-10 px-3 shadow-xl">
            <div className="py-12 w-full">
              <div className=" flex justify-between items-center gap-2 w-full">
                <h2 className="text-2xl font-bold">{user?.displayName ? user?.displayName : null}</h2>

                <CommonImage data={user}></CommonImage>
              </div>

              <div className=" flex justify-between gap-2 items-center  w-full">
                <div>
                  <h4 className="text-1xl font-bold textColor"> {userinfo?.collage ? userinfo?.collage : "collage"}</h4>
                  <p className="lg:text-5xl md:text-3xl sm:text-2xl font-bold text-orange-600">
                    {userinfo?.rank ? userinfo?.rank : null}
                  </p>
                </div>

                <div className="text-right py-12">

                  <p>
                    <button className="block py-2 px-2 bg-orange-600 rounded text-white mt-10">
                      Point:  {userinfo?.mark ? userinfo?.mark : null} .Exam-  {userinfo?.exam ? userinfo?.exam : null}
                    </button>
                  </p>
                </div>
              </div>



            </div>


          </div>
          <div className="item w-full bg-white shadow-xl rounded h-[300px] py-10 px-3">
            <h1 className="lg:text-4xl md:text-2xl sm:text-2xl font-bold textColor mt-7">
              Practice Fast{" "}
            </h1>
            <h4 className="lg:text-2xl md:text-2xl sm:text-1xl font-bold textColor mt-2">
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
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Subjects..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
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
            <button className="px-2 py-2 bg-orange-600 rounded text-white font-bold mt-2 float-right">
              Start Now
            </button>
          </div>
          <div className="item w-full bg-white shadow-xl rounded h-[300px] px-10 py-3">
            <h1 className="lg:text-4xl md:text-2xl sm:text-2xl font-bold textColor mt-14">
              Mock Test{" "}
            </h1>
            <h4 className="lg:text-2xl md:text-2xl sm:text-1xl font-bold textColor mt-2">
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
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Subjects..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
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
            <button className="px-2 py-2 bg-orange-600 rounded text-white font-bold mt-2 float-right">
              Start Now
            </button>
          </div>
        </div>

        <div className="bottom-container grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-2 mt-4 px-2">
          <div className="bottom-left lg:w-full  md:w-[30%]  py-3 bg-white shadow-xl  px-2 rounded">
            <Image
              className="img"
              src={reChart}
              width="full"
              height="full"
              alt=""
            />
          </div>
          <div className="bottom-right  lg:w-70 w-full py-3 bg-white shadow-xl rounded px-2">
            <div className="overflow-x-auto">
              <table className="table">

                <thead>
                  <tr className="bg-orange-600 text-white font-bold uppercase">

                    <th>ID</th>
                    <th>Name</th>
                    <th>Marks</th>
                  </tr>
                </thead>
                <tbody className="bg-slate-200">
                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">01</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Mostafiz

                    </td>
                    <td>99</td>

                  </tr>

                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">02</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Ratri khan
                    </td>
                    <td>95</td>

                  </tr>
                  <tr>

                    <td>
                      <div className="flex items-center space-x-3">

                        <div>
                          <div className="font-bold">03</div>

                        </div>
                      </div>
                    </td>
                    <td>
                      Shamim Chowdhury

                    </td>
                    <td>97</td>

                  </tr>

                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">04</div>

                        </div>
                      </div>
                    </td>
                    <td>
                      Abdur Rahman
                    </td>
                    <td>95.5</td>

                  </tr>
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
