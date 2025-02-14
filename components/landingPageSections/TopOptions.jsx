import Image from "next/image";

const TopOptions = () => {
  return (
    <>
      <section className="top-options sans flex items-center">
        <div className="mx-auto flex justify-between items-center" style={{ width: 1120 }}>
          <section className="w-1/2 px-5">
            <h2 className="sans-bold text-2xl text-slate-800">
              اینترنت فیبر نوری شاتل
            </h2>
            <span className="relative text-xs text-slate-600 block mt-3 mb-9">
              تجربه تا ۱,۰۰۰ مگابیت بر ثانیه سرعت{" "}
              <div className="bottom-line -bottom-4 right-3"></div>
            </span>
            <p className="text-slate-600">
              سرویس <span className="text-slate-800 sans-bold">اینترنت فیبر نوری</span> یکی از جدیدترین فناوری‌های ارتباطات ثابت
              است که در آن برای دسترسی به شبکه جهانی اینترنت به جای کابل مسی از
              نور برای انتقال اطلاعات استفاده می‌شود، بنابراین نویزهای
              الکترومغناطیسی تاثیری بر روی کیفیت و پایداری این سرویس ندارد.
              کیفیت بالا، عدم نیاز به خط تلفن ثابت و سرعت ارسال و دریافت تا ۱۰۰۰
              مگابیت بر ثانیه از مهم‌ترین مزایای سرویس اینترنت بر بستر فیبر نوری
              است. شاتل همگام با تکنولوژی روز دنیا اقدام به راه‌اندازی و توسعه
              بستر ارائه این سرویس در شبکه خود داشته است.
            </p>
            <button className="mt-7 bg-blueBtn py-2 px-7 rounded-full text-white text-sm hover:bg-blue-800 transition-all duration-300">اطلاعات بیشتر</button>
          </section>
          <section className="w-1/2 p-2 overflow-hidden relative">
            <Image className="w-full rounded-md" src={"/img/light-fiber.png"} width={530} height={380} alt="LightFiber"/>
            <div className="squar-line rounded-lg border-2 border-white absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10"></div>
          </section>
        </div>
      </section>
    </>
  );
};

export default TopOptions;