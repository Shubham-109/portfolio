import React from "react";
import Particles from "./particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden">

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <div className="absolute left-1/2 top-1/2  h-[500px] w-4/5 md:w-3/5 -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[100px] bg-red-500"></div>

      <div
        className="flex flex-col item-center text-center md:flex-row gap-0 md:gap-10 leading-none font-display font-bold text-[4rem] md:text-[8rem] md:leading-loose whitespace-nowrap 
        bg-gradient-to-br from-40% bg-clip-text text-transparent from-red-500 to-white"
      >
        <span>Shubham</span> <span>Mehar</span>
      </div>

      <div className="w-4/5 md:w-2/5 mt-7 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 leading-7">
        Namaste, wanderer of the web! Step into my domain where the binary heartbeats of technology resonate. I&apos;m <span className="text-blue-500" > Shubham Mehar</span>, and this is my playground
        </h2>
      </div>
    </div>
  );
}
