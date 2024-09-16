"use client";
import Sidebar from "@/components/Sidebar";
import { BiSearchAlt } from "react-icons/bi";

import {
  airConditions,
  forecast,
  listOfCities,
  sideMenu,
  weeklyForecast,
} from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Weather = () => {
  const [chosenNav, setChosenNav] = useState();
  const [weatherData, setWeatherData] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  const fetchData = async () => {
    const fetchedWeatherData = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=022f1c30b1c54c498eb104421241609&q=${location}&aqi=no`
    );
    const data = await fetchedWeatherData.json();
    setWeatherData(data);
    console.log(data);
  };

  return (
    <div className="lg:px-10  lg:flex w-full gap-5">
      {/* middle */}
      <div className="w-full lg:ml-32">
        {/* search
        <div className=" flex items-center  py-3 rounded-xl">
          <input
            onChange={(e) => (setShowSearch(true), setLocation(e.target.value))}
            className="bg-slate-200 py-3 mr-3 rounded-3xl px-5 w-[85%]"
            placeholder="Search for cities"
          />
          <div className="flex flex-col items-center gap-1">
            <button
              className="text-4xl p-1 bg-slate-200 rounded-full"
              onClick={() => (setShowSearch(false), fetchData())}
            >
              <BiSearchAlt />
            </button>
            {showSearch ? (
              <p className="text-[10px] text-center ">Click here to search</p>
            ) : (
              <></>
            )}
          </div>
        </div> */}

        {/* cities */}
        <div className=" mt-3 ">
          <p className="mx-5 mt-7 mb-4">Today's forecast</p>
          <div className="">
            {listOfCities.map((item) => (
              <div className="flex items-center justify-between bg-slate-200 px-10  rounded-xl my-3">
                <div className="flex items-center gap-5">
                  <Image
                    className="my-5"
                    src={item.icon}
                    alt=""
                    width={60}
                    height={60}
                  />
                  <div>
                    <p className="font-bold text-lg mt-3 mb-2 capitalize">
                      {item.name}
                    </p>
                    <p className="mb-5">{item.time}</p>
                  </div>
                </div>
                <p>{item.temp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* right */}
      <div className="ml-20 hidden lg:block">
        <div className="flex justify-between my-5 items-center px-10">
          <div>
            <h1 className="font-bold text-2xl">Madrid</h1>
            <p>Chance of rain: 0%</p>

            <h1 className="font-bold text-2xl mt-10">31</h1>
          </div>

          <Image
            className="my-5 "
            src="/assets/sun.png"
            alt=""
            width={150}
            height={150}
          />
        </div>
        {/* 3 */}
        <div className="bg-slate-200 p-3 rounded-xl  ">
          <p className="mx-5 my-3">Today's forecast</p>
          <div className="flex gap-4 my-3 w-full justify-evenly">
            {forecast.map((item) => (
              <div className="flex flex-col items-center">
                <p>{item.time}</p>
                <Image
                  className="my-5 mx-auto"
                  src={item.icon}
                  alt=""
                  width={30}
                  height={30}
                />
                <p className="font-bold text-2xl">{item.temp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className=" bg-slate-200 fixed right-10 rounded-xl w-[300px] h-[90vh]">
        <p className="p-5">{chosenNav}</p>
        <div className=" ">
          {weeklyForecast.map((item) => (
            <div className="flex w-[90%] mx-auto border-b-[0.1px] border-black/10 py-2 items-center capitalize gap-4 justify-evenly">
              <p>{item.day}</p>
              <div className="flex items-center gap-3">
                <Image
                  className="my-5 mx-auto"
                  src={item.icon}
                  alt=""
                  width={25}
                  height={25}
                />
                <p>{item.status}</p>
              </div>
              <p>{item.temp}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Weather;
