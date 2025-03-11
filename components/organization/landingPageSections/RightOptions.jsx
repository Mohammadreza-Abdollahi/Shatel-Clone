import Image from "next/image";

const RightOptions = ({
  title = "عنوان",
  par = "متن",
  btn = "دکمه",
  btn2 = "ذکمه 2",
  src = "/img/forbidden.png",
}) => {
  return (
    <>
      <section className="bottom-options sans flex items-center my-10">
        <div
          className="mx-auto flex justify-between items-center"
          style={{ width: 1120 }}
        >
          <section className="w-1/2 p-2 overflow-hidden relative">
            <Image
              className="w-full rounded-md"
              src={src}
              width={530}
              height={380}
              alt="LightFiber"
            />
            <div className="squar-line rounded-lg border-2 border-white absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10"></div>
          </section>
          <section className="w-1/2 px-5">
            <h2 className="sans-bold mb-3.5 relative text-xl text-slate-800">
              {title}
              <div className={`bottom-line -bottom-2 right-3`}></div>
            </h2>
            <p className="text-slate-800 text-justify text-sm">{par}</p>
            <button className="mt-7 mx-2 bg-blueBtn hover:bg-orangeBtn transition-all duration-300 py-2 px-7 rounded-full text-white text-sm">
              {btn}
            </button>
            <button className="mt-7 mx-2 text-blueBtn border border-1 border-blueBtn bg-white hover:border-orangeBtn hover:text-white hover:bg-orangeBtn transition-all duration-300 py-2 px-7 rounded-full text-sm">
              {btn2}
            </button>
          </section>
        </div>
      </section>
    </>
  );
};

export default RightOptions;
