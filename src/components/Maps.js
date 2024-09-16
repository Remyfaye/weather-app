"use client";
import Sidebar from "@/components/Sidebar";
import {
  airConditions,
  forecast,
  listOfCities,
  sideMenu,
  weeklyForecast,
} from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Maps = () => {
  const [chosenNav, setChosenNav] = useState();
  return (
    <div className="rounded-xl lg:ml-20 lg:px-10 lg:flex gap-10 lg:w-[90%] justify-between">
      <Image
        className="lg:ml-10 rounded-xl my-5 w-full h-[80vh] lg:w-[600px] lg:h-[87vh] object-cover"
        src="/assets/mpas2.jpg"
        alt=""
        width={1000}
        height={1000}
      />
      {/* middle */}
      <div className="hidden lg:block w-full ml-10">
        {/* 1 */}
        <div className="bg-slate-200  mb-10 py-3 rounded-xl px-5 ">
          <input className="bg-slate-200" placeholder="search for cities" />
        </div>

        {/* 2 */}
        <div className="  ">
          <p className="mx-5 my-3">Today's forecast</p>
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
    </div>
  );
};

export default Maps;
