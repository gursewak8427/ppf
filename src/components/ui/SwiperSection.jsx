import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

const SwiperSection = () => {
  return (
    <div className="h-full w-full">
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      {/* <Swiper slidesPerView={4} className="h-full">
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <SwiperSlide
              key={index}
              className="text-black m-2 border-2 !w-auto !h-full bg-gray-200"
            >
              Slide {index + 1}
            </SwiperSlide>
          );
        })}
      </Swiper> */}
    </div>
  );
};

export default SwiperSection;
