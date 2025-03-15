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
import Suggests from "../landingPageSections/Comment";
import Comment from "../landingPageSections/Comment";
const CommentsSlider = () => {
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
        className="comments-slider"
      >
        <SwiperSlide>
          <Comment
            src="/img/org-agah.png"
            text="«پی‌گیری به‌موقع، دقیق و منظم و شیوه پاسخ‌گویی به مشتریان، اصلی‌ترین دلیل رضایت ما از مجموعه شاتل است.» "
            comp="کارگزاری آگاه"
            respon="مدیر تیم زیرساخت شبکه"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Comment
            src="/img/org-mehrafarin.png"
            text="«شاتل از لحاظ زیرساخت‌های فنی و میزان دانش کارشناسان فنی عملکرد بسیار خوبی دارد.»"
            comp="کارگزاری مهرآفرین"
            respon="مدیر زیرساخت"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Comment
            src="/img/org-kh.png"
            text="یکی از موارد مهمی که برای سازمان‌ها ارزش افزوده محسوب می‌شود، دریافت پشتیبانی و پاسخ مناسب و به‌موقع و حتی فراتر از قرارداد و تعهدها، در شرایط بحرانی و حساس است. برای مثال فراهم بودن امکان حضور در دیتاسنتر در ساعت‌های غیر کاری و عدم نیاز به پشت سر گذاشتن فرآیندهای طولانی اداری از جمله مزایای همکاری ما با شاتل بوده است."
            comp="خوشگوار"
            respon="مدیر فناوری اطلاعات"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Comment
            src="/img/org-snapp-food.png"
            text="«خوشبختانه سرویس‌هایی که از شاتل دریافت کردیم بدون اختلال و قابل اعتماد هستند.» "
            comp="اسنپ فود"
            respon="مدیر شبکه"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Comment
            src="/img/org-orkid-farmed.png"
            text="«وجه تمایز شاتل، سرویس‌دهی متفاوت و برخورد مشتری‌مدارانه است. شیوه خدمات‌دهی شاتل خاص و VIP است.»"
            comp="زیست ارکید فارمد"
            respon="مدیر فناوری اطلاعات"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Comment
            src="/img/org-nibitex.png"
            text="« با استفاده از زیرساخت و خدمات دیتاسنتر شاتل، ما در مورد تامین برق، قطعی، اینترنت و ... دغدغه‌ی کمتری داریم و این موضوع برای ما بسیار ارزشمند است.» "
            comp="نوبیتکس"
            respon="مدیر ارشد فناوری اطلاعات نوبیتکس"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Comment
            src="/img/org-goldiran.png"
            text="«مشتری‌مداری برای مجموعه ما بسیار مهم است. از این رو برای حفظ حریم شخصی مشتریان، خدمات تماس امن شاتل تاک را دریافت کرده‌ایم.»"
            comp="گلدیران"
            respon="مدیر فناوری اطلاعات"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Comment
            src="/img/org-greenweb.png"
            text="«از نظر کیفیت و سرعت سرویس، شاتل رتبه یک را دارد. مهم‌ترین وجه تمایز شاتل، کیفیت سرویس‌ها است.»"
            comp="گرین وب"
            respon="مدیر شبکه"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Comment
            src="/img/org-bijan.png"
            text="«مهم‌ترین ارزش افزوده‌ای که شاتل تاکنون برای ما داشته است، تسریع و تسهیل ارتباطات بوده است.» "
            comp="شرکت بین المللی پارسیان پخش بیژن"
            respon="مدیر انفورماتیک"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Comment
            src="/img/org-bors.png"
            text="«به‌نظرم تجربه شرکت شاتل در ارائه راهکارهای سازمانی از اهمیت بالایی برخوردار است. شاتل سال‌هاست که در زمینه ارائه راهکارهای سازمانی فعالیت دارد و به همین دلیل این شرکت برای من متمایز از سایر شرکت‌ها است. این موضوع باعث شده که من شاتل را به دوستان و اطرافیانم که به‌دنبال یک راهکار سازمانی قابل اعتماد و موثر هستند پیشنهاد کنم.» "
            comp="مدیریت فناوری بورس تهران"
            respon="TSETMC رئیس زیرساخت شبکه"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Comment
            src="/img/org-faratarh.png"
            text="«پشتیبانی قوی شاتل، وجه تمایز آن محسوب می‌شود.»"
            comp="گروه فراطرح"
            respon="کارشناس ارشد فناوری اطلاعات"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CommentsSlider;
