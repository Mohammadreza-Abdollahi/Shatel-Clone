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
import Suggests from "../landingPageSections/Suggests";
const SuggestionsSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        loop
        className="suggestion-slider"
      >
        <SwiperSlide className="flex justify-center items-center">
          <Suggests
            src="/img/skee.png"
            header="شروع جشنواره زمستانی شاتل برای مشترکین اولیه"
            text="در جشنواره زمستانی، شاتل فرصتی ویژه را برای مشترکین اولیه در نظر گرفته است، سرویس‌هایی با ترافیک بالا و قیمتی اقتصادی."
            special="جشنواره زمستانی"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <Suggests
            src="/img/shatel-digikala.png"
            header="اینترنت پرسرعت شاتل، این‌بار در دیجی‌کالا‌"
            text="شاتل که همواره به دنبال ارائه شیوه‌های نوین در دسترسی کاربران به سرویس اینترنت پرسرعت بوده، با ارائه بسته‌های سرویس اینترنت ویژه در..."
            special="پیشنهاد ویژه"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <Suggests
            src="/img/coffe.png"
            header="تخفیف‌ بسته‌های ترافیک نقره‌ای شاتل"
            text="تخفیف بسته‌های ترافیک نقره‌ای، فقط تا ۱۰ اسفند! ویژه کاربران فعلی شاتل!"
            special="جشنواره ترافیک"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <Suggests
            src="/img/special.png"
            header="دوستان خود را شاتلی کنید و هر دو تخفیف بگیرید!"
            text="با دعوت از دوستان و آشنایان خود برای پیوستن به خانواده بزرگ شاتل، به ازای هر دعوت موفق، از تخفیف‌های ویژه روی سرویس اینترنت خود بهره‌مند شوید."
            special="دعوت دوستان"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <Suggests
            src="/img/wifi.png"
            header="تماشای فیلم و سریال در نماوا با ترافیک رایگان حتی در صورت اتمام ترافیک یا دوره سرویس!"
            text="شاتلی‌ها حتی در زمان قطعی سرویس اینترنت به دلیل اتمام ترافیک یا دوره سرویس نیز می‌توانند با ترافیک رایگان در نماوا فیلم و سریال تماشا کنند."
            special="نماوا"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SuggestionsSlider;
