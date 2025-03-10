"use client";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopHeader = () => {
  const pathname = usePathname();
  const isOrganizational = pathname.includes("/org");
  return (
    <>
      <div className="h-12 text-xs bg-gradient-to-r from-cyan-500 to-blue-500">
        <div
          className="mx-auto flex justify-between items-center"
          style={{ maxWidth: 1120 }}
        >
          <div className="flex items-center">
            <Link href="/">
              <span
                className={`${
                  !isOrganizational ? "bg-gradient-to-t sans-bold" : ""
                } text-white mx-0.5 py-4 px-2 cursor-pointer hover:bg-gradient-to-t from-blueGradient1 to-blueGradient2`}
              >
                کاربران خانگی
              </span>
            </Link>
            <Link href="/org">
              <span
                className={`${
                  isOrganizational ? "bg-gradient-to-t sans-bold" : ""
                } text-white mx-0.5 py-4 px-2 cursor-pointer hover:bg-gradient-to-t from-blueGradient1 to-blueGradient2`}
              >
                کاربران سازمانی
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <ul className="flex justify-center items-center gap-3 text-white">
              <li className="cursor-pointer py-4 px-3 hover:bg-gradient-to-t from-blueGradient1 to-blueGradient2">
                درباره شاتل
              </li>
              <li className="cursor-pointer py-4 px-3 hover:bg-gradient-to-t from-blueGradient1 to-blueGradient2">
                ارتباط با ما
              </li>
              <li className="cursor-pointer py-4 px-3 hover:bg-gradient-to-t from-blueGradient1 to-blueGradient2">
                بلاگ شاتل
              </li>
              <li className="cursor-pointer py-4 px-3 hover:bg-gradient-to-t from-blueGradient1 to-blueGradient2">
                فرصت های شغلی
              </li>
              <li className="cursor-pointer py-4 px-3 hover:bg-gradient-to-t from-blueGradient1 to-blueGradient2">
                <FontAwesomeIcon icon={faPhone} className="align-middle" />{" "}
                شماره سراسری {isOrganizational ? "91000999" : "91000000"} (021)
              </li>
              <li className="cursor-pointer py-4 px-3 hover:bg-gradient-to-t from-blueGradient1 to-blueGradient2">
                English
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
