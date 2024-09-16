"use client";
import Sidebar from "@/components/Sidebar";
import { forecast, sideMenu, weeklyForecast } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { MdOutlineWindPower } from "react-icons/md";
import { IoRainyOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { FcSearch } from "react-icons/fc";
import { BiSearchAlt } from "react-icons/bi";
import { MdAir } from "react-icons/md";
import { AiOutlineHeatMap } from "react-icons/ai";

const Weather = () => {
  const [location, setLocation] = useState("abuja");
  const [weatherData, setWeatherData] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  setShowSearch;
  const airConditions = [
    {
      id: "001",
      temp: !weatherData ? "30" : weatherData?.current.feelslike_c + " °C",
      icon: FaTemperatureThreeQuarters,
      text: "Real feel",
    },
    {
      id: "002",
      text: "Wind mph",
      temp: !weatherData ? "30" : weatherData?.current.wind_mph + " mph",
      icon: MdOutlineWindPower,
    },
    {
      id: "003",
      text: "Humidity",
      temp: !weatherData ? "30" : weatherData?.current.humidity + " q",
      icon: IoRainyOutline,
    },
    {
      id: "004",
      text: "Uv index",
      temp: !weatherData ? "30" : weatherData?.current.uv,
      icon: IoSettingsOutline,
    },
    {
      id: "004",
      text: "pressure",
      temp: !weatherData ? "30" : weatherData?.current.pressure_in + " in",
      icon: MdAir,
    },
    {
      id: "004",
      text: "Heat index",
      temp: !weatherData ? "30" : weatherData?.current.heatindex_c + " °C",
      icon: AiOutlineHeatMap,
    },
  ];

  const fetchData = async () => {
    const fetchedWeatherData = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=022f1c30b1c54c498eb104421241609&q=${location}&aqi=no`
    );
    const data = await fetchedWeatherData.json();
    setWeatherData(data);
    console.log(data);
  };
  return (
    <div className="lg:px-10 lg:flex bg-slate-50 justify-between">
      <div className="lg:w-[60%] lg:ml-32">
        {/* search */}
        <div className=" flex items-center  py-3 rounded-xl px-5">
          <input
            onChange={(e) => (setShowSearch(true), setLocation(e.target.value))}
            className="bg-slate-200 py-3 mr-3 rounded-3xl px-5 w-[80%]"
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
        </div>

        {/* city */}
        <div className="lg:flex  lg:flex-row flex flex-col mx-auto gap-2 justify-between my-10 items-center lg:px-10">
          <div className="flex items-center flex-col ">
            <h1 className="font-bold text-2xl capitalize">
              {!weatherData ? "lagos" : weatherData?.location.name} (
              {!weatherData ? "Nigeria" : weatherData?.location.country})
            </h1>
            <p className="text-gray-400">
              {!weatherData ? "sunny" : weatherData?.current.condition.text}
            </p>
            <p className="text-gray-400">
              {!weatherData ? "" : weatherData?.forecast.forecastday[0].date}
            </p>

            <h1 className="font-extrabold text-3xl mt-5">
              {!weatherData ? (
                <>
                  {/* <span className="font-thin">Temperature: </span> */}
                  <span>27.1°C</span>
                </>
              ) : (
                <>
                  {/* <span className="font-thin">Temperature: </span> */}
                  {weatherData?.current.temp_c}
                  <span className="">°C</span>
                </>
              )}
            </h1>
          </div>

          <Image
            className="my-5 "
            src={
              !weatherData
                ? "/assets/sun.png"
                : "https:" + weatherData?.current.condition.icon
            }
            alt=""
            width={150}
            height={150}
          />
        </div>

        {/* air conditions */}
        <div className="bg-slate-200 p-3 rounded-xl  my-10 ">
          <p className="mx-5 my-3">Weather Conditions</p>
          <div className="grid grid-cols-2 gap-5 mt-3 lg:px-10">
            {airConditions.map((item) => (
              <div className=" flex gap-5">
                <div className="text-2xl text-gray-500">
                  <item.icon />
                </div>

                <div className="">
                  <p>{item.text}</p>

                  <p className="font-bold text-2xl">{item.temp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* todays forecast */}
        <div className="bg-slate-200 p-3 rounded-xl  ">
          <p className="mx-5 my-3">Today's forecast</p>
          <div className="lg:flex grid grid-cols-3 gap-4 my-3 w-full justify-evenly ">
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

      {/* right */}
      <div className="lg:mt-0 mt-10 bg-slate-200 lg:fixed right-10 rounded-xl lg:w-[300px] h-[60vh] mb-32 lg:h-[90vh]">
        <p className="p-5 text-gray-500 text-bold">7-day forecast</p>
        <div className=" ">
          {weeklyForecast.map((item) => (
            <div className="flex w-[90%] mx-auto border-b-[0.1px] border-black/10 py-2 items-center capitalize gap-4 justify-evenly">
              <p>{item.day}</p>
              <div className="flex items-center gap-3">
                {/* <item.icon /> */}
                {/* 022f1c30b1c54c498eb104421241609 */}
                <Image
                  className="my-5 mx-auto"
                  src={item.icon}
                  alt=""
                  width={25}
                  height={25}
                />
                <p className="font-bold">{item.status}</p>
              </div>
              <p>{item.temp}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
