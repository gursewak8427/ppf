import React from "react";
import Swiper from "swiper";
import SwiperSection from "./SwiperSection";

const Projects = () => {
  return (
    <>
      <div className="flex w-full bg-primaryDark items-center gap-4 text-white h-screen">
        <div className="w-20 flex items-center justify-center">
          <h1 className="text-[70px] -rotate-90 transform translate-x-2 tracking-widest">
            PROJECTS
          </h1>
        </div>
        <div className="bg-white flex-1 h-[400px]">
          <h1>dsfjdfbkjb</h1>
        </div>
        <div className="flex max-w-full w-4/6 h-[400px]">
          <SwiperSection />
        </div>
      </div>
    </>
  );
};

export default Projects;
