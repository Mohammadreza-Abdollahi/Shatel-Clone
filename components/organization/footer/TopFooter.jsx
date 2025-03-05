import { faInstagram, faLinkedin, faLinkedinIn, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopFooter = () => {
  return <>
    <section className="mx-auto sans text-white flex justify-between mb-12" style={{width: 1120}}>
      <div className="w-full px-12 flex justify-start">
        <section className="w-1/2">
          <ul className="text-xs text-slate-200">
            <li className="my-5"><span className="pb-1 hover:text-yellowColor hover:border-b border-1 border-yellowColor transition-all duration-150 cursor-pointer">ارتباط با ما</span></li>
            <li className="my-5"><span className="pb-1 hover:text-yellowColor hover:border-b border-1 border-yellowColor transition-all duration-150 cursor-pointer">فرصت های شغلی</span></li>
            <li className="my-5"><span className="pb-1 hover:text-yellowColor hover:border-b border-1 border-yellowColor transition-all duration-150 cursor-pointer">نمایندگان فروش</span></li>
            <li className="my-5"><span className="pb-1 hover:text-yellowColor hover:border-b border-1 border-yellowColor transition-all duration-150 cursor-pointer">سوالات متداول</span></li>
          </ul>
        </section>
        <section className="w-1/2">
          <ul className="text-xs text-slate-200">
            <li className="my-5"><span className="pb-1 hover:text-yellowColor hover:border-b border-1 border-yellowColor transition-all duration-150 cursor-pointer">اخبار</span></li>
            <li className="my-5"><span className="pb-1 hover:text-yellowColor hover:border-b border-1 border-yellowColor transition-all duration-150 cursor-pointer">صدای مشتری</span></li>
            <li className="my-5"><span className="pb-1 hover:text-yellowColor hover:border-b border-1 border-yellowColor transition-all duration-150 cursor-pointer">مناقصه ها و مزایده ها</span></li>
            <li className="my-5"><span className="pb-1 hover:text-yellowColor hover:border-b border-1 border-yellowColor transition-all duration-150 cursor-pointer">سامانه رضایت سنجی</span></li>
          </ul>
        </section>
        <section className="w-1/2"></section>
      </div>
      <div className="flex justify-end text-white pt-5">
        <div className="flex justify-center items-center w-14 h-14 hover:-translate-y-2 transition-all duration-150 rounded-full mx-3 bg-gradient-to-tr from-insta1 via-insta2 to-insta3">
          <FontAwesomeIcon icon={faInstagram} className="text-3xl text-white"/>
        </div>
        <div className="flex justify-center items-center w-14 h-14 hover:-translate-y-2 transition-all duration-150 hover-group rounded-full mx-3 bg-linkedin">
          <FontAwesomeIcon icon={faLinkedinIn} className="text-3xl text-white"/>
        </div>
        <div className="flex justify-center items-center w-14 h-14 hover:-translate-y-2 transition-all duration-150 hover-group rounded-full mx-3 bg-tellegram">
          <FontAwesomeIcon icon={faTelegram} className="text-3xl text-white"/>
        </div>
        <div className="flex justify-center items-center w-14 h-14 hover:-translate-y-2 transition-all duration-150 hover-group rounded-full mx-3 bg-twitter">
          <FontAwesomeIcon icon={faTwitter} className="text-3xl text-white"/>
        </div>
      </div>
    </section>
  </>;
};

export default TopFooter;
