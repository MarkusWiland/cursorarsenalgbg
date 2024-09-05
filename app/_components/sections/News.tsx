import Image from "next/image";
import React from "react";
import arsenalLogo from "@/app/assets/arsenallogo.webp";
import { Button } from "@/components/ui/button";

export default function News() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="pb-6 flex items-center justify-between">
       <div className="flex flex-col ">
       <h1 className="text-2xl font-bold">Senaste nytt</h1>
       <p className="text-sm text-gray-500">Se alla nyheter</p>
       </div>
       <Button>Se alla nyheter</Button>
        </div>
        
          <div className="grid grid-cols-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                style={{ background: `url(${arsenalLogo.src})` }}
                className="flex flex-col  gap-4 pb-4 px-8 items-center justify-end text-white min-h-[200px] relative group-odd:before:content-[''] group-odd:before:absolute group-odd:before:inset-0 group-odd:before:bg-black/60"
              >
                <h3 className="text-sm font-bold relative z-10">
                  Arsenal på väg att värva Raheem Sterling
                </h3>
                <div className="flex items-center w-full gap-4 relative z-10">
                  <Image
                    src={arsenalLogo}
                    alt="news"
                    width={50}
                    height={50}
                    className="rounded-full flex items-center border border-white justify-center object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[12px]">Markus Wiland</h3>
                    <p className="text-[12px]">2024-05-01</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
   
      </div>
    </section>
  );
}
