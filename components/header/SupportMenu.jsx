import Image from "next/image";

const SupportMenu = () => {
  return (
    <>
      <section className="flex justify-between items-start">
        <div className="w-3/4 px-6 py-6 text-slate-800 flex justify-between items-start">
          <div className="w-1/2">
            <ul>
              <li className="relative mb-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">تست سرعت</a>
              </li>
              <li className="relative mb-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">محتوای اموزشی</a>
              </li>
              <li className="relative mb-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">اپلیکیشن مای شاتل</a>
              </li>
            </ul>
          </div>
          <div className="w-1/2">
            <ul>
              <li className="relative mb-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">سیستم هوشمند پشتیبان فنی</a>
              </li>
              <li className="relative mb-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">مرکز دانلود</a>
              </li>
              <li className="relative mb-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">درخواست SLA</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/4 relative">
          <Image
            className="w-full h-full object-cover"
            src={"/img/support-mega.jpg"}
            width={160}
            height={204}
            alt="ProductsMegaMenu"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-white mix-blend-overlay"></div>
        </div>
      </section>
    </>
  );
};

export default SupportMenu;
