import Image from "next/image";

const ProductsMenu = () => {
  return (
    <>
      <section className="flex justify-between items-start">
        <div className="w-3/4 px-6 py-7 text-slate-800 flex justify-between items-start">
          <div className="w-2/5">
            <ul>
              <li className="relative mb-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">خدمات اینترنت پر سرعت</a>
                <div className="bottom-line -bottom-3"></div>
              </li>
              <li className="my-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">اینترنت فیبر نوری</a>
              </li>
              <li className="my-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">سرویس اسکای فایبر (Sky Fiber)</a>
              </li>
              <li className="my-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">مجتمع های مسکونی و تجاری</a>
              </li>
              <li className="my-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">+ADSL2</a>
              </li>
              <li className="mt-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">VDSL</a>
              </li>
            </ul>
          </div>
          <div className="w-1/5">
            <ul>
              <li className="relative mb-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">خدمات تلفن</a>
                <div className="bottom-line -bottom-3"></div>
              </li>
              <li className="my-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">خدمات تلفن خانگی</a>
              </li>
            </ul>
          </div>
          <div className="w-1/5">
            <ul>
              <li className="relative mb-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">خدمات همراه</a>
                <div className="bottom-line -bottom-3"></div>
              </li>
              <li className="my-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">شاتل موبایل</a>
              </li>
              <li className="my-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">FMC</a>
              </li>
            </ul>
          </div>
          <div className="w-1/5">
            <ul>
              <li className="relative mb-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">خدمات محتوا</a>
                <div className="bottom-line -bottom-3"></div>
              </li>
              <li className="my-5 hover:text-orangeBtn transition-all duration-150">
                <a href="#">نماوا</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/4">
          <Image
            className="shadow-2xl w-full h-full"
            src={"/img/products-mega.jpg"}
            width={160}
            height={204}
            alt="ProductsMegaMenu"
          />
        </div>
      </section>
    </>
  );
};

export default ProductsMenu;
