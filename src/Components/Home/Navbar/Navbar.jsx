import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import CountDown from "../../CountDown/CountDown";

import logo from "../../../assets/Logo3.png"
import close from "../../../assets/close1.svg"

import { useTranslation } from "react-i18next"


import "./navStyle.scss"
import { useLanguage } from "../../../contexts/LanguageContext";

export default function Navbar() {

    const [nav, setNav] = useState(false)
    const { t } = useTranslation();
    const { i18n, language, changeLanguage } = useLanguage();


    useEffect(() => {

        const links = document.querySelectorAll('a[data-scroll-to]');

        links.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const targetId = this.getAttribute('data-scroll-to');
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }, [])


    useEffect(() => {

        const links = document.querySelectorAll('a[data-scroll-to]');

        links.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const targetId = this.getAttribute('data-scroll-to');
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }, [nav])



    return <>

        <div id="Navbar" className="" >

            <a className="topBar bg-mainRed  py-2 px-4 text-white flex justify-between items-center flex-wrap font-bold   lg:text-base cursor-pointer" data-scroll-to="ChoosePlan" >
                <div className="container flex justify-between items-center flex-wrap">
                    <div className="discount text-center md:text-start  w-1/2  lg:w-3/5">
                        {t("discount_text")}
                    </div>

                    <div className="countDown  flex  justify-end items-center gap-2 lg:gap-7  lg:flex-nowrap w-1/2 lg:w-2/5 mt-3 md:mt-0   ">
                        <CountDown TimeColor="text-white" textColor="text-white" fs="text-xsm  lg:text-base" justify="justify-end" />
                    </div>
                </div>

            </a>


        </div>

        <div className="bottomNavBar bg-mainBlue text-white py-2 px-4  w-full  shadow-cardShadow sticky z-20 top-0">
            <div className="container flex justify-between items-center">
                <div className="logo ">
                    <Link to={"/"} href="#" className="flex items-center ">
                        <img src={logo} className="w-28" alt="logo" />
                    </Link>
                </div>
                <div className="Navbar flex items-center">


                    <ul className=" items-center justify-center gap-7 hidden lg:flex ">

                        <li> <a className="transition-all duration-300 hover:text-mainRed font-bold" href="#" data-scroll-to="trainingProgram"> {t("navLinks_programs")}  </a> </li>
                        <li> <a className="transition-all duration-300 hover:text-mainRed font-bold" href="#" data-scroll-to="Transformation"> {t("navLinks_transformations")}  </a> </li>
                        <li> <a className="transition-all duration-300 hover:text-mainRed font-bold" href="#" data-scroll-to="Samples">   {t("navLinks_traineeReviews")}  </a> </li>
                        <li> <a className="transition-all duration-300 hover:text-mainRed font-bold" href="#" data-scroll-to="Instructors"> {t("navLinks_team")}  </a> </li>
                        <li> <a className="transition-all duration-300 hover:text-mainRed font-bold" href="#" data-scroll-to="ChoosePlan"> {t("navLinks_subscribe")}   </a> </li>
                        <li> <a className="transition-all duration-300 hover:text-mainRed font-bold" href="#" data-scroll-to="Partners" > {t("navLinks_partners")}   </a> </li>
                    </ul>

                    <div className="btn w-full lg:w-auto mr-3 ">
                        <a href="#" data-scroll-to="ChoosePlan">  <button className="bg-mainRed text-white px-4 py-3 text-sm lg:text-base rounded-lg h-full w-full transition-colors duration-300 hover:bg-red-700">  {t("header_Button_subscribeNow")} </button> </a>
                    </div>


                    <label className="burger block lg:hidden" htmlFor="burger">
                        <input onClick={() => setNav(!nav)} type="checkbox" id="burger" className={`${nav == true ? "checked" : ""} `} />
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>


                    {i18n.language === "en" && (

                        <div className="en text-white text-xl font-bold mr-3 cursor-pointer transition-all duration-300 hover:text-mainRed"
                            onClick={() => { changeLanguage("ar") }}>  عربي  </div>

                    )}
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
                    className="flex items-center justify-start pt-24 text-xl flex-col bg-white text-black w-2/3 h-full  gap-7 fixed top-0 right-0 z-50 shadow-cardShadow  ">

                    <img onClick={() => setNav(!nav)} width="40" height="40" src={close} className="close absolute top-5 left-5 cursor-pointer border p-1 rounded transition-colors bg-black hover:bg-mainRed  " alt="close" />

                    <li> <a className="transition-all duration-300 hover:text-mainRed font-bold" href="#" data-scroll-to="hero"> {t("navLinks_home")}   </a> </li>
                    <li> <a className="transition-all duration-300 hover:text-mainRed font-bold" href="#" data-scroll-to="WhyUs"> {t("navLinks_whyUs")}   </a> </li>
                    <li> <a className="transition-all duration-300 hover:text-mainRed font-bold" href="#" data-scroll-to="trainingProgram"> {t("navLinks_programs")}  </a> </li>
                    <li> <a className="transition-all duration-300 hover:text-mainRed font-bold" href="#" data-scroll-to="Transformation"> {t("navLinks_transformations")}  </a> </li>
                    <li> <a className="transition-all duration-300 hover:text-mainRed font-bold" href="#" data-scroll-to="Samples">   {t("navLinks_traineeReviews")}  </a> </li>
                    <li> <a className="transition-all duration-300 hover:text-mainRed font-bold" href="#" data-scroll-to="Instructors"> {t("navLinks_team")}  </a> </li>
                    <li> <a className="transition-all duration-300 hover:text-mainRed font-bold" href="#" data-scroll-to="Gifts"> {t("navLinks_gifts")}   </a> </li>
                    <li> <a className="transition-all duration-300 hover:text-mainRed font-bold" href="#" data-scroll-to="ChoosePlan"> {t("navLinks_subscribe")}   </a> </li>
                    <li> <a className="transition-all duration-300 hover:text-mainRed font-bold" href="#" data-scroll-to="Partners"> {t("navLinks_partners")}   </a> </li>
                    <li> <a className="transition-all duration-300 hover:text-mainRed font-bold" href="#" data-scroll-to="QuestionsFooter" > {t("navLinks_faq")}   </a> </li>

                </motion.ul>
            }
        </AnimatePresence>
    </>
}

