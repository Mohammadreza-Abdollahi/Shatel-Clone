import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
    return ( 
        <>
            <section className={`sans absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center`}>
                <Image src={'/img/not-found.gif'} width={500} height={500} alt="404"/>
                <h1 className="text-2xl mb-5">صفحه مورد نظر یافت نشد!</h1>
                <Link href="/" className="text-white hover:text-blueBtn bg-blueBtn hover:bg-white hover:border hover:border-1 hover:border-blueBtn transition-all hover:transition-all px-8 py-1.5 rounded-full">بازگشت به خانه</Link>
            </section>
        </>
     );
}
 
export default NotFound;