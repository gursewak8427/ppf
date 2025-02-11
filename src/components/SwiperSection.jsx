import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MySwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="w-full"
    >
      {[...Array(8)].map((_, index) => (
        <SwiperSlide key={index}>
          <div className="h-full px-4 pr-0 rounded-lg">
            <div className="bg-white text-black p-2 h-full rounded-md">
              Slide {index + 1}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;
