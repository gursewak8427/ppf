import React from "react";
import Button from "./ui/Button";

export const Hero = () => {
  return (
    <div className="w-full bg-custom-gradient flex flex-col justify-center items-center h-screen text-center text-primaryLightest space-y-8 relative">
      <img
        src="/images/hero1.png"
        alt="hero-1"
        className="w-[300px] absolute top-[19%] left-0 z-50"
      />
      <img
        src="/images/hero2.png"
        alt="hero-2"
        className="w-[200px] absolute top-[15%] right-0 z-50"
      />
      <img
        src="/images/hero3.png"
        alt="hero-3"
        className="w-[200px] absolute bottom-[10%] left-0 z-50"
      />
      <img
        src="/images/hero4.png"
        alt="hero-4"
        className="w-[250px] absolute bottom-[10%] right-0 z-50"
      />

      <h1 className="text-[40px] leading-[60px] tracking-widest text-primaryDark font-bold">
        Simplifying complexity with <br /> designs that speak and <br /> code
        that delivers.
      </h1>
      <div className="space-x-5">
        <Button type="primary">Projects</Button>
        <Button type="secondary">Ping me</Button>
      </div>
    </div>
  );
};
