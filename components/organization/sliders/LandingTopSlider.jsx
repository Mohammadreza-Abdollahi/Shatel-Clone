import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const LandingTopSlider = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        loop
        className="landing-top-slider"
      >
        <SwiperSlide>
          <Image
            className="slide-item"
            src={"/img/org-slide1.png"}
            width={1669}
            height={521}
            alt="Slide1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="slide-item"
            src={"/img/org-slide2.png"}
            width={1669}
            height={521}
            alt="Slide2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="slide-item"
            src={"/img/org-slide3.png"}
            width={1669}
            height={521}
            alt="Slide3"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default LandingTopSlider;
