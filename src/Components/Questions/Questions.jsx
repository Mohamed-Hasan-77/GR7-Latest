import "./QueStyle.scss"

import celebrate from "../../assets/celbreate2.json"
import Lottie from "lottie-react"
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Questions() {

    const { t } = useTranslation();
    const { language } = useLanguage();

    return (
        <div id="Questions" className="py-7 pb-2 overflow-hidden ">


            <div className={` container  ${language == "en" && "dir-ltr"}`}>

                <div className="title my-7 text-mainRed">
                    <h2>   {t("Questions_title")} </h2>
                </div>


                <div className="QBoxes flex justify-center flex-wrap ">

                    <div className="wrapperBox p-5 pb-1 w-full lg:w-3/4 ">
                        <div className="box  p-6  rounded shadow-cardShadow">
                            <ul>
                                <li>   {t("question_1")} </li>
                                <li>   {t("question_2")} </li>
                                <li>   {t("question_3")} </li>
                                <li>   {t("question_4")} </li>
                                <li>   {t("question_5")} </li>
                                <li>   {t("question_6")} </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="titleTwo my-5">
                    <h2 className="celebrate flex flex-wrap items-center justify-center">
                        <strong>     {t("solution_reassurance")} </strong>
                        <Lottie
                            loop={true}
                            animationData={celebrate} />
                    </h2>
                </div>

            </div>


        </div>
    )
}
