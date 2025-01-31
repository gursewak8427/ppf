import React from "react";
import Swiper from "swiper";
import SwiperSection from "./ui/SwiperSection";

const Projects = () => {
  return (
    <>
      <div className=" flex  bg-primaryDark items-center gap-4   text-white h-screen">
        <div className="bg-red-300 w-28 flex items-center justify-center">
          <h1 className="text-[70px] -rotate-90">PROJECTS</h1>
        </div>
        <div className="bg-white  w-[320px] h-[400px]"> 
            <h1>dsfjdfbkjb</h1>
        </div>
        <div className="flex w-auto h-[400px]">
          {/* <SwiperSection /> */}
        </div>
      </div>
    </>
  );
};

export default Projects;
