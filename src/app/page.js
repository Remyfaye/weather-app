import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center h-[90vh] lg:h-screen p-20 gap-20 justify-center">
      <div className="bg-slate-100 hidden h-[90vh] w-[45%] rounded-2xl p-5 lg:flex items-center justify-center">
        <Image
          className=""
          src="/assets/umbrella.png"
          alt="Next.js logo"
          width={180}
          height={38}
        />
      </div>
      <div className="flex lg:w-[35%] flex-col gap-5 items-center ">
        <Image
          className="mb-10 w-[100px] h-[100px] lg:w-[30px] lg:h-[30px]"
          src="/assets/umbrella.png"
          alt="Next.js logo"
          width={50}
          height={50}
          priority
        />
        <div className="my-3 flex flex-col items-center">
          <h1 className="font-bold text-4xl">Breeze</h1>
          <p className="text-sm lg:text-medium text-gray-500 my-2">
            Weather App
          </p>
        </div>

        <Link href="/details">
          <button className="bg-blue-400 rounded-full px-10 mt-5 py-3 text-white ">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
