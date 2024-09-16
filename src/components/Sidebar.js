"use client";
import { sideMenu } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = ({ setChosenNav }) => {
  const [active, setActive] = useState();

  return (
    <div className="bg-slate-200 hidden w-[90px] p-3 rounded-xl h-[90vh] lg:fixed mr-20 lg:block">
      <Image
        className="my-5 mx-auto"
        src="/assets/umbrella.png"
        alt=""
        width={25}
        height={25}
      />

      {sideMenu.map((item) => (
        <div
          className={
            active === item.label
              ? "my-5 flex items-center flex-col cursor-pointer text-blue-400"
              : "my-5 flex items-center flex-col cursor-pointer"
          }
          onClick={() => (setActive(item.label), setChosenNav(item.label))}
        >
          <item.icon />
          {/* <Image src={item.icon} alt="" width={20} height={21} /> */}
          <p className="text-sm">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
