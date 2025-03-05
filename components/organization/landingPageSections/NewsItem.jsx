import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewsItem = ({dayName , day , monthName , year , header , par , textBtn}) => {
  return (
    <>
      <section className="sans px-14">
        <div className="my-3.5">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="text-lg text-slate-600 align-middle"
          />
          <span className="text-xs align-middle mx-1 text-slate-700">
            {dayName} ، {day} {monthName} {year}
          </span>
        </div>
        <div>
          <h2 className="text-base sans-bold text-slate-800 relative mb-8">
            {header}
            <div className="bottom-line -bottom-4 right-0"></div>
          </h2>
          <p className="text-sm text-slate-600 text-justify">
            {par}
          </p>
          <button className="mt-7 bg-blueBtn hover:bg-blue-800 transition-all duration-300 py-2 px-7 rounded-full text-white text-sm">
            {textBtn}
          </button>
        </div>
      </section>
    </>
  );
};

export default NewsItem;
