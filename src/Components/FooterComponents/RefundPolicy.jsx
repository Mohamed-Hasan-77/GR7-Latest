import Footer from "../Footer/Footer";

import { useEffect } from "react";

import "./FCompStyle.scss"
import SubNav from "../subNav/subNav";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";


export default function RefundPolicy() {



    const { t } = useTranslation();
    const { language } = useLanguage();


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    return <>

        <SubNav />

        <div id="RefundPolicy" className=" py-16 ">

            <div className={` container px-4 lg:px-28  ${language == "en" ? "dir-ltr" : "dir-rtl"}`}>

                <div className="backHome mb-10   text-gray-500 text-2xl ">
                    <span> <Link to={"/"} className="hover:text-gray-800 transition-colors ">  {t("navLinks_home")}  </Link> |   {t("refund_policy_title")} </span>
                </div>

                <p className="my-4 font-bold"> {t("refund_policy_title")}  </p>
                <div><p dir="" className="font-bold text-2xl ">  {t("refund_policy_content")} </p>

                    <p dir="">==============</p>
                    <p dir=" mb-4 font-bold text-2xl ">  {t("refund_policy_title2")}  </p>



                    <p className="mt-3 text-xl">  {t("refund_policy_conditions1")}  </p>
                    <p className="mt-3 text-xl">  {t("refund_policy_conditions2")}  </p>
                    <p className="mt-3 text-xl">  {t("refund_policy_conditions3")}  </p>
                    <p className="mt-3 text-xl">  {t("refund_policy_conditions4")}  </p>
                    <p className="mt-3 text-xl">  {t("refund_policy_conditions5")}  </p>
                    <p className="mt-3 text-xl">  {t("refund_policy_conditions6")}  </p>

                    <p className="mt-5 text-xl">  {t("refund_policy_additional_note")} </p>

                </div>


            </div>
        </div>
        <Footer />

    </>
}
