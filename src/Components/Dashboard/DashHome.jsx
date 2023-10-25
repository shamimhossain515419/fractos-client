import React from "react";
import "./DashHome.css";

const DashHome = () => {
  return (
    <div className="py-10 bg-white mt-2 p-2">
      <h2 className="text-xl font-bold textColor">Dashboard</h2>

      <div className="mark-container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 mt-5">
        <div className="item w-full bg-white rounded  flex flex-row py-10 px-3 shadow-xl">
          <div className="py-12">
            <h2 className="text-2xl font-bold">Mostafizur Rahman</h2>
            <h4 className="text-1xl font-bold textColor">Collage</h4>
            <p className="lg:text-5xl md:text-3xl sm:text-2xl font-bold text-orange-600">
              1200th
            </p>
          </div>

          <div className="text-right py-12">
            <p>logo</p>
            <p>
              <button className="block py-2 px-2 bg-orange-700 rounded text-white mt-10">
                Point: 85.5 .Exam-1
              </button>
            </p>
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

      <div className="bottom-container grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-2">
        <div className="bottom-left w-3/4 h-[300px] bg-green-400"></div>
        <div className="bottom-right w-3/4 h-[300px] bg-green-400"></div>
      </div>
    </div>
  );
};

export default DashHome;
