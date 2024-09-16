"use client";
import { TfiMenuAlt } from "react-icons/tfi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegMap } from "react-icons/fa6";

const sideMenu = [
  {
    label: "weather",
    icon: TiWeatherPartlySunny,
  },
  {
    label: "cities",
    icon: TfiMenuAlt,
  },
  {
    label: "maps",
    icon: FaRegMap,
  },
  {
    label: "settings",
    icon: IoSettingsOutline,
  },
];

const forecast = [
  {
    id: "001",
    temp: "25",
    icon: "/assets/sun.png",
    time: "6:00am",
  },
  {
    id: "002",
    time: "9:00am",
    temp: "28",
    icon: "/assets/sun.png",
  },
  {
    id: "003",
    time: "2:00pm",
    temp: "33",
    icon: "/assets/sun.png",
  },
  {
    id: "004",
    time: "9:00am",
    temp: "34",
    icon: "/assets/sun.png",
  },
  {
    id: "005",
    temp: "32",
    icon: "/assets/cloudd.png",
    time: "11:00am",
  },
];

const weeklyForecast = [
  {
    id: "001",
    temp: "36/22",
    icon: "/assets/sun.png",
    status: "sunny",
    day: "Today",
  },
  {
    id: "002",
    day: "tue",
    temp: "28",
    status: "sunny",
    icon: "/assets/sun.png",
  },
  {
    id: "003",
    day: "wed",
    temp: "33",
    status: "cloudy",
    icon: "/assets/cloudd.png",
  },
  {
    id: "004",
    day: "thu",
    temp: "34",
    status: "cloudy",
    icon: "/assets/cloudd.png",
  },
  {
    id: "005",
    temp: "32",
    icon: "/assets/sun.png",
    status: "sunny",
    day: "fri",
  },
];

const listOfCities = [
  {
    id: "001",
    temp: "36/22",
    icon: "/assets/sun.png",
    name: "lagos",
    time: "10:23",
  },
  {
    id: "002",
    time: "11:21",
    temp: "28",
    name: "awka",
    icon: "/assets/sun.png",
  },
  {
    id: "003",
    time: "10:23",
    temp: "33",
    name: "abuja",
    icon: "/assets/cloudd.png",
  },
  {
    id: "004",
    time: "12:14",
    temp: "34",
    name: "madrid",
    icon: "/assets/cloudd.png",
  },
  {
    id: "005",
    temp: "32",
    icon: "/assets/sun.png",
    name: "lagos",
    time: "09:23",
  },
];

export { listOfCities, sideMenu, forecast, weeklyForecast };
