
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import logo from "../../assets/Logo3.png"
import close from "../../assets/close1.svg"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";



export default function SubNav() {

    const [nav, setNav] = useState(false)

    const { t } = useTranslation();
    const { i18n, language, changeLanguage } = useLanguage();


    return <>
        <div id="formNavbar" className="bottomNavBar bg-mainBlue text-white py-2 px-4  w-full  shadow-cardShadow sticky z-20 top-0">
            <div className="container flex justify-between items-center">
                <div className="logo ">
                    <Link to={"/"} className="flex items-center gap-3">
                        <img src={logo} className="w-28" alt="logo" />
                    </Link>
                </div>
                <div className="Navbar flex items-center">


                    <ul className=" items-center justify-center gap-7 hidden lg:flex ">

                        <li> <Link to={"/"} className="transition-all duration-300 hover:text-mainRed font-bold"> {t("navLinks_programs")}  </Link> </li>
                        <li> <Link to={"/"} className="transition-all duration-300 hover:text-mainRed font-bold" > {t("navLinks_transformations")}  </Link> </li>
                        <li> <Link to={"/"} className="transition-all duration-300 hover:text-mainRed font-bold" > {t("navLinks_traineeReviews")}     </Link> </li>
                        <li> <Link to={"/"} className="transition-all duration-300 hover:text-mainRed font-bold" >  {t("navLinks_team")}  </Link> </li>
                        <li> <Link to={"/"} className="transition-all duration-300 hover:text-mainRed font-bold" >  {t("navLinks_subscribe")}  </Link> </li>
                        <li> <Link to={"/"} className="transition-all duration-300 hover:text-mainRed font-bold" > {t("navLinks_partners")}   </Link> </li>
                    </ul>


                    <div className="btn w-full lg:w-auto mr-3 ">
                        <a href="#" >  <button className="bg-mainRed text-white px-4 py-3 text-sm lg:text-base rounded-lg h-full w-full transition-colors duration-300 hover:bg-red-700">  {t("header_Button_subscribeNow")} </button> </a>
                    </div>

                    <label className="burger block lg:hidden" htmlFor="burger">
                        <input onClick={() => setNav(!nav)} type="checkbox" id="burger" className={`${nav == true ? "checked" : ""} `} />
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>


                    {i18n.language === "en" && <>


                        <div className="en text-white text-xl font-bold mr-3 cursor-pointer transition-all duration-300 hover:text-mainRed"
                            onClick={() => { changeLanguage("ar") }}>  عربي  </div>

                    </>}
                    {i18n.language === "ar" && (
                        <div className="en text-white text-xl font-bold mr-3 cursor-pointer transition-all duration-300 hover:text-mainRed"
                            onClick={() => { changeLanguage("en") }}>  EN  </div>
                    )}

                </div>
            </div>
        </div>


        <AnimatePresence>
            {nav &&

                <motion.ul
                    initial={{
                        x: 200
                    }}
                    animate={{ x: 0 }}
                    transition={{ ease: "linear", duration: 0.2 }}
                    exit={{
                        x: 200
                    }}
                    className="flex items-center justify-start pt-24 text-xl flex-col bg-white text-black w-3/4 h-full  gap-7 fixed top-0 right-0 z-50 shadow-cardShadow  ">

                    <img onClick={() => setNav(!nav)} width="40" height="40" src={close} className="close absolute top-5 left-5 cursor-pointer border p-1 rounded transition-colors bg-black hover:bg-mainRed  " alt="close" />

                    <li> <Link to={"/"} className="transition-all duration-300 hover:text-mainRed font-bold" > {t("navLinks_home")}  </Link> </li>
                    <li> <Link to={"/"} className="transition-all duration-300 hover:text-mainRed font-bold" > {t("navLinks_whyUs")}  </Link> </li>
                    <li> <Link to={"/"} className="transition-all duration-300 hover:text-mainRed font-bold" > {t("navLinks_programs")} </Link> </li>
                    <li> <Link to={"/"} className="transition-all duration-300 hover:text-mainRed font-bold" > {t("navLinks_transformations")} </Link> </li>
                    <li> <Link to={"/"} className="transition-all duration-300 hover:text-mainRed font-bold" > {t("navLinks_traineeReviews")}   </Link> </li>
                    <li> <Link to={"/"} className="transition-all duration-300 hover:text-mainRed font-bold" > {t("navLinks_team")} </Link> </li>
                    <li> <Link to={"/"} className="transition-all duration-300 hover:text-mainRed font-bold" > {t("navLinks_gifts")}  </Link> </li>
                    <li> <Link to={"/"} className="transition-all duration-300 hover:text-mainRed font-bold" > {t("navLinks_subscribe")}  </Link> </li>
                    <li> <Link to={"/"} className="transition-all duration-300 hover:text-mainRed font-bold" > {t("navLinks_partners")}  </Link> </li>
                    <li> <Link to={"/"} className="transition-all duration-300 hover:text-mainRed font-bold" > {t("navLinks_faq")}  </Link> </li>

                </motion.ul>
            }
        </AnimatePresence>


    </>
}
