import Image from "next/image";

const ProductsMenu = () => {
  return (
    <>
      <section className="flex justify-between items-start">
        <div className="w-5/6 px-6 pt-6 text-slate-800 flex justify-between items-start">
          <div className="w-2/12">
            <ul>
              <li className="relative mb-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">اینترنت سازمانی</a>
                <div className="bottom-line -bottom-3"></div>
              </li>
              <li className="my-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">پهنای باند اختصاصی</a>
              </li>
              <li className="my-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">پهنای باند حجمی</a>
              </li>
            </ul>
          </div>
          <div className="w-2/12">
            <ul>
              <li className="relative mb-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">تلفن سازمانی (VoIP)</a>
                <div className="bottom-line -bottom-3"></div>
              </li>
              <li className="my-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">تلفن ثابت سازمانی</a>
              </li>
              <li className="my-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">مرکز تماس ابری</a>
              </li>
            </ul>
          </div>
          <div className="w-2/12">
            <ul>
              <li className="relative mb-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">دیتاسنتر</a>
                <div className="bottom-line -bottom-3"></div>
              </li>
              <li className="my-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">کو لوکیشن (میزبانی سرور)</a>
              </li>
            </ul>
          </div>
          <div className="w-3/12">
            <ul>
              <li className="relative mb-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">شبکه خصوصی</a>
                <div className="bottom-line -bottom-3"></div>
              </li>
              <li className="my-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">VPN | APN | VPLS | MPLS</a>
              </li>
            </ul>
          </div>
          <div className="w-2/12">
            <ul>
              <li className="relative mb-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">شاتل موبایل</a>
                <div className="bottom-line -bottom-3"></div>
              </li>
              <li className="my-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">سیمکارت سازمانی</a>
              </li>
            </ul>
          </div>
          <div className="w-1/12">
          <ul>
            <li className="relative mb-5 hover:text-orangeBtn transition-all duration-150">
              <a href="#">خدمات محتوا</a>
              <div className="bottom-line -bottom-3"></div>
            </li>
            <li className="my-5 hover:text-orangeBtn transition-all duration-150">
              <a href="#">نماوا سازمانی</a>
            </li>
          </ul>
        </div>
        </div>
        <div className="w-1/6 relative">
          <Image
            className="w-full h-full object-cover"
            src={"/img/org-products-mega.jpg"}
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

export default ProductsMenu;
