import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed w-full top-0  z-50  backdrop-blur-md">
      <div className="flex justify-center items-center py-3 bg-black text-white">
        <div className="inline-flex gap-1 items-center">
          <p>Bli medlem redan idag</p>
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between text-white">
            <h1 className="text-1xl uppercase tracking-tighter">
              Arsenal <span className="text-red-400">Göteborg</span>
            </h1>
            <p className="md:hidden">menu</p>
            <nav className="hidden md:flex gap-6 items-center uppercase">
              <Link href="/" className="text-white/60 hover:text-white">
                Om oss
              </Link>

              <Link href="/" className="text-white/60 hover:text-white">
                Medlemskap
              </Link>
              <Link href="/" className="text-white/60 hover:text-white">
                shopen
              </Link>
              <Link href="/" className="text-white/60 hover:text-white">
                biljetter
              </Link>
              <Link href="/" className="text-white/60 hover:text-white">
                kontakt
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <Button >asd</Button>
              <Button >asd</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
