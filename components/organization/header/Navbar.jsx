"use client";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import MegaMenu from "./MegaMenu";
import ProductsMenu from "./ProductsMenu";
import SupportMenu from "./SupportMenu";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        console.log(window.scrollY);
        setStickyClass("sticky-nav");
      } else {
        setStickyClass("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
        <section
          className={`w-full bg-white h-24 shadow-2xl ${setStickyClass}`}
        >
          <nav
            className={`pb-4 pt-3 text-xs bg-white w-full mx-auto relative ${stickyClass}`}
            style={{ maxWidth: 1120 }}
          >
            <div className="container mx-3 flex justify-between items-center  ">
              <div className="flex items-center">
                <ul className="flex justify-center items-center gap-6">
                  <li className="cursor-pointer align-middle text-slate-700">
                    <Image
                      className="hover:scale-110 transition-all duration-300"
                      src={"/img/shatel-logo.png"}
                      alt="Shatel Logo"
                      width={52}
                      height={52}
                    />
                  </li>
                  <li className="cursor-pointer align-middle text-slate-700 text-sm hover:text-orangeBtn transition-all duration-300">
                    <MegaMenu title="محصولات و خدمات" width={900}>
                      <ProductsMenu />
                    </MegaMenu>
                  </li>
                  <li className="cursor-pointer align-middle text-slate-700 text-sm hover:text-orangeBtn transition-all duration-300">
                    محتوای اموزشی
                  </li>
                </ul>
              </div>
              <div className="flex items-center mx-3">
                <button className="w-10 h-10 rounded-full bg-grayBtn hover:bg-gray-400 text-xl text-white mx-2 transition-all duration-300">
                  <FontAwesomeIcon icon={faSearch} className="align-middle" />
                </button>
                <button className="h-10 px-7 rounded-full bg-greenBtn hover:bg-green-600 text-sm text-white mx-2 transition-all duration-300">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="align-middle text-xl ml-2"
                  />
                  <span className="align-middle">ورود به مای شاتل</span>
                </button>
              </div>
            </div>
          </nav>
        </section>
    </>
  );
};

export default Navbar;
