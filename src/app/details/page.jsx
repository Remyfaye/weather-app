"use client";
import Bottombar from "@/components/Bottombar";
import Cities from "@/components/Cities";
import Maps from "@/components/Maps";
import Sidebar from "@/components/Sidebar";
import Weather from "@/components/Weather";
import { airConditions, forecast, sideMenu, weeklyForecast } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [chosenNav, setChosenNav] = useState("details");
  return (
    <div className="lg:p-10 p-5 bg-slate-50 ">
      {/* left */}
      <Sidebar setChosenNav={setChosenNav} />
      <Bottombar setChosenNav={setChosenNav} />

      {chosenNav === "weather" && <Weather />}
      {chosenNav === "details" && <Weather />}
      {chosenNav === "cities" && <Cities />}
      {chosenNav === "maps" && <Maps />}
      {chosenNav === "settings" && <Cities />}
    </div>
  );
};

export default page;
