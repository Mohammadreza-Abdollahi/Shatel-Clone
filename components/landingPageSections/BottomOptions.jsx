import Image from "next/image";

const BottomOptions = () => {
  return (
    <>
      <section className="bottom-options sans flex items-center">
        <div
          className="mx-auto flex justify-between items-center"
          style={{ width: 1120 }}
        >
          <section className="w-1/2 p-2 overflow-hidden relative">
            <Image
              className="w-full rounded-md"
              src={"/img/light-fiber.png"}
              width={530}
              height={380}
              alt="LightFiber"
            />
            <div className="squar-line rounded-lg border-2 border-white absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10"></div>
          </section>
          <section className="w-1/2 px-5">
            <h2 className="sans-bold text-2xl text-slate-800">
              خدمات اینترنت پرسرعت ثابت VDSL
            </h2>
            <span className="relative text-xs text-slate-600 block mt-3 mb-9">
              بالاترین سرعت، با مناسب‌‌ترین هزینه برای کاربران خانگی{" "}
              <div className="bottom-line"></div>
            </span>
            <p className="text-slate-600">
              سرویس{" "}
              <span className="text-slate-800 sans-bold">
                اینترنت فیبر نوری
              </span>{" "}
              در این روش می‌توانید اینترنت پرسرعت را با سرعت متوسط ۷۰ مگابیت بر
              ثانیه، با قیمتی به مراتب ارزان‌تر از ADSL دریافت کنید. این سرویس
              هم برای کاربران خانگی و هم برای کسب‌وکارها مورد استفاده قرار
              می‌گیرد.
              <br /><br />
              شاتل ارائه خدمات اینترنت پرسرعت بر بستر FTTC را برای نخستین بار در
              کشور آغاز کرده است.
            </p>
            <button className="mt-7 bg-blueBtn py-2 px-7 rounded-full text-white text-sm">
              اطلاعات بیشتر
            </button>
          </section>
        </div>
      </section>
    </>
  );
};

export default BottomOptions;
