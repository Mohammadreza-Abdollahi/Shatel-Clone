import Image from "next/image";

const Loading = () => {
  return (
    <>
      <section className="absolute w-full h-full bg-slate-800 bg-opacity-60">
          <Image
            className="absolute top-1/3 right-1/2 translate-x-1/2 -translate-y-1/2 shadow-lg rounded-md overflow-hidden"
            src={"/img/loading-gif.gif"}
            width={250}
            height={300}
            alt=" "
          />
      </section>
    </>
  );
};
export default Loading;
