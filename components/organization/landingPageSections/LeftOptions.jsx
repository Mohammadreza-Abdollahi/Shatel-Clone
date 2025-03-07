import Image from "next/image";

const LeftOptions = ({title = "عنوان" , subTitle = "عنوان کمکی" , par = "متن" , btn = "دکمه" , src = "/img/forbidden.png"}) => {
  return (
    <>
      <section className="top-options sans flex items-center my-20">
        <div className="mx-auto flex justify-between items-center" style={{ width: 1120 }}>
          <section className="w-1/2 px-5">
            <h2 className="sans-bold text-2xl text-slate-800">
              {title}
            </h2>
            <span className="relative text-xs text-slate-600 block mt-3 mb-9">
              {subTitle}
              <div className="bottom-line -bottom-4 right-3"></div>
            </span>
            <p className="text-slate-600">
              {par}
            </p>
            <button className="mt-7 bg-blueBtn py-2 px-7 rounded-full text-white text-sm hover:bg-blue-800 transition-all duration-300">{btn}</button>
          </section>
          <section className="w-1/2 p-2 overflow-hidden relative">
            <Image className="w-full rounded-md" src={src} width={530} height={380} alt="LightFiber"/>
            <div className="squar-line rounded-lg border-2 border-white absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10"></div>
          </section>
        </div>
      </section>
    </>
  );
};

export default LeftOptions;