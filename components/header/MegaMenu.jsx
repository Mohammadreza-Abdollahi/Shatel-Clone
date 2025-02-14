'use client'

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const MegaMenu = ({title = "عنوان" , href = "#" , width = 1020 , children}) => {
    const [isOpen , setIsOpen] = useState(false)
  return <>
    <section className="relative mega-real">
        <div onMouseLeave={()=>setIsOpen(false)}>
            <a href={href} onMouseMove={()=>setIsOpen(true)}>{title} <FontAwesomeIcon icon={faAngleDown} className={`${isOpen ? "rotate-180 transition-all duration-150" : "transition-all duration-150"}`}/></a>

                <div onMouseMove={()=>setIsOpen(true)} className={`${isOpen ? "mega-show" : ""} mega-menu-content text-black bg-white shadow-2xl rounded-b-lg overflow-hidden transition-all duration-150 translate-y-12 opacity-0`} style={{width: width}}>
                    {children}
                </div>
        </div>
    </section>
  </>;
};

export default MegaMenu;
