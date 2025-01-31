import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className=" bg-primaryDark text-primaryLightest h-screen">
      <h1 className="flex justify-center items-end">
        <span className="text-[89px] leading-[89px]">H</span>
        <span className="text-[53px] tranform translate-y-2">
          ere are My Skills
        </span>
      </h1>

      <div className="relative w-full h-auto overflow-hidden">
        <motion.div
          className="flex gap-3 py-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        >
          {Array.from({ length: 50 }).map((_, index) => (
            <div
              key={index}
              className={`flex flex-col gap-3 ${
                index % 2 === 0 ? "translate-y-10" : ""
              }`}
            >
              <div className="bg-red-400 w-[150px] h-[150px]"></div>
              <div className="bg-red-400 w-[150px] h-[150px]"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
