"use client";
import { sideMenu } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Bottombar = ({ setChosenNav }) => {
  const [active, setActive] = useState();

  return (
    <div className="bg-slate-100 justify-evenly fixed px-10 -mx-5 mt-10 lg:hidden bottom-0 w-full p-3 rounded-t-xl  flex gap-5 mr-20">
      <Image
        className="my-5 hidden lg:block"
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
              : "my-5 text-xl flex items-center flex-col cursor-pointer"
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

export default Bottombar;
