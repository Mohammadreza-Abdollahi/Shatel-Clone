import Image from "next/image";

const ServicesItem = ({src , alt , title , description}) => {
    return ( 
        <>
            <div className="w-1/3 inline-block sans">
                <section className="h-80 flex flex-col justify-around items-center bg-white mx-5 my-3 py-3 rounded-md transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 hover:scale-105">
                    <Image src={src} width={115} height={115} alt={alt}/>
                    <h2 className="sans-bold text-lg text-slate-700 mt-8 mb-4">{title}</h2>
                    <span className="text-sm text-slate-500 px-4 align-bottom h-20">{description}</span>
                </section>
            </div>
        </>
     );
}
 
export default ServicesItem;