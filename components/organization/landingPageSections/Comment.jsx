import Image from "next/image";

const Comment = ({src = "/img/org-agah.png" , text = "متن" , comp = "شرکت" , respon = "مسئولیت"}) => {
  return (
    <>
      <section className="sans px-14 pb-16">
        <div className="mt-3 mb-14">
          <Image className="shadow-xl p-3 rounded-lg" src={src} alt=" " width={160} height={80}/>
        </div>
        <div className="mb-20 relative h-16">
          <p className="text-justify text-sm text-slate-900">{text}</p>
          <div className="bottom-line2 w-44 h-1 -bottom-16 right-0"></div>
        </div>
        <div className="t-10">
          <h2 className="sans-bold text-sm text-slate-800">{comp}</h2>
          <span className="text-xs text-slate-600">{respon}</span>
          <button className="block mt-4 px-8 py-2 rounded-full text-xs bg-greenBtn hover:bg-green-400 text-white transition-all duration-150">
            بیشتر بخوانید
          </button>
        </div>
      </section>
    </>
  );
};

export default Comment;
