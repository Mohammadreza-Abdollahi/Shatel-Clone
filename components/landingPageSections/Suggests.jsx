import Image from "next/image";

const Suggests = ({src = "/img/forbidden.png" , header = "سر برگ" , text = "بدون متن" , special = ""}) => {
  return (
    <>
      <section className="py-16 px-10 relative overflow-hidden sans bg-white rounded-lg my-auto flex justify-center items-center">
        <div className="w-2/5">
          <Image
            src={src}
            width={80}
            height={70}
            alt="Suggest-Image"
            className="suggest-img"
          />
        </div>
        <div className="w-3/5">
          <h3 className="sans-bold text-base text-slate-800 mb-3">{header}</h3>
          <p className="text-sm text-slate-600">
            {text}
          </p>
          <button className="bg-greenBtn py-1 px-6 rounded-full text-sm text-white mt-4">بیشتر بخوانید</button>
        </div>
        <div className="absolute top-8 -right-56 py-2 text-xs text-center rotate-45 bg-yellowColor w-full">
          <span>{special}</span>
        </div>
      </section>
    </>
  );
};

export default Suggests;
