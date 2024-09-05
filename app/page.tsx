import Image from "next/image";
import Hero from "./_components/sections/Hero";
import Games from "./_components/sections/Games";
import News from "./_components/sections/News";


export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Games />
      <News />
    </main>
  );
}
