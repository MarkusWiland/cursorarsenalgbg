import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";
import arsenal from "@/app/assets/arsenal.jpg";
import Image from "next/image";
import { MovingButton } from "@/app/_components/Moving-border";
export default function Hero() {
  return (
    <>
      <section className="pt-8 pb-20 md:pt-5 md:pb-10 min-h-screen relative flex flex-col items-center justify-center">
        {/* Container för bakgrundsbild och röd overlay */}
        <div className="absolute inset-0 w-full h-full">
          {/* Röd bakgrund med opacitet */}
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          {/* Bakgrundsbild */}
          <Image
            src={arsenal}
            alt="arsenal"
            layout="fill"
            objectFit="cover"
            className="z-0" // Se till att bilden ligger bakom overlayn
          />
        </div>

        {/* Innehåll ovanpå bilden och overlayn */}
        <div className="relative container z-20 text-white -mt-10">
          <div className="md:flex md:flex-col md:items-center">
            {/*<div className="relative inline-flex  w-fit overflow-hidden rounded-full p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#EF0107_50%,#E2CBFF_100%)]" />
              <p className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                Lyssna på senaste podcast avsnittet här <button>Lyssna</button>
              </p>
            </div>*/}
            <MovingButton
              borderRadius="1.75rem"
              className=" py-1 px-4 bg-black text-whit"
              duration={5000}
            >
              Lyssna på senaste podcast avsnittet
            </MovingButton>
            <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter mt-6 uppercase  bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(220,20,60,.5))] bg-white text-transparent bg-clip-text">
              Arsenal Göteborg
            </h1>
            <p className="text-lg md:text-xl tracking-tight mt-6 max-w-[642px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              perferendis, tempore labore laboriosam facere suscipit commodi
              aperiam ad quos nam doloremque deserunt nesciunt animi
              reprehenderit aliquam nihil officiis sapiente eum?
            </p>
            <div className="flex gap-1 tracking-tight mt-[30px]">
              <Button>Starta här</Button>
              <Button>Starta här</Button>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-[#111] text-white p-8">
        <div className="grid grid-cols-2 gap-8">
          {/* Next Game Section 
          <div className="bg-white text-black p-6 rounded-md shadow-lg">
            <h2 className="text-sm font-semibold text-[#111] uppercase mb-4">
              Next Game
            </h2>
            <div className="text-center">
              <p className="text-sm text-gray-500">Champions League</p>
              <p className="text-xs text-gray-400">
                Round 5 - B | 11/24/2015 | 20:45
              </p>
            </div>
            <div className="flex items-center justify-around mt-6">
              <div className="flex items-center">
                <span>arsenal</span>
                <p className="ml-2 font-semibold">Manchester United</p>
              </div>
              <p className="text-2xl font-bold text-gray-400 ">VS</p>
              <div className="flex items-center">
               <span>arsenal</span>
                <p className="ml-2 font-semibold">PSV Eindhoven</p>
              </div>
            </div>
          </div>

       Last Game Section 
          <div className="bg-[#222] p-6 rounded-md shadow-lg">
            <h2 className="text-sm font-semibold text-white uppercase mb-4">
              Last Game
            </h2>
            <div className="text-center">
              <p className="text-sm text-gray-400">Barclays Premier League</p>
            </div>
            <div className="flex items-center justify-around mt-6">
              <div className="flex items-center">
                <span>arsenal</span>{" "}
                <p className="ml-2 font-semibold">Manchester United</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-white">3 - 1</p>
                <p className="text-xs text-gray-400 mt-1">Giggs (35)</p>
                <p className="text-xs text-gray-400">Rooney (40, 44)</p>
              </div>
              <div className="flex items-center">
                <span>yunited</span>
                <p className="ml-2 font-semibold">Arsenal</p>
              </div>
            </div>
            <p className="text-center text-red-600 font-semibold mt-4">
              SUMMARY
            </p>
          </div>
        </div>
      </section> */}
    </>
  );
}
