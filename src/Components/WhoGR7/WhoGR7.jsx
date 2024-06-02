import "./WhoGR7Style.scss"


import Lottie from "lottie-react"
import { useRef } from "react"


import doctorGr7 from "../../assets/doctorGr7.json"
import coachGr7 from "../../assets/gymCoachGr7.json"
import doctor2 from "../../assets/doctor2Gr7.json"
import doctor3 from "../../assets/doctor3Gr7.json"
import AiAssistant from "../../assets/AiGr7.json"
import plannerGr7 from "../../assets/progrmmePlannerGr7.json"
import customerServGr7 from "../../assets/CustomerServiceGr7.json"
import { useTranslation } from "react-i18next"



export default function WhoGR7() {

    const { t } = useTranslation();
    const animteRef = useRef(null)


    return (
        <div id="WhoGR7" className="pt-6 py-7 px-3 bg-lightGrayBack overflow-hidden">


            <div className="container p-0 lg:px-40 ">

                <div className="title my-7 text-center">
                    <h2 className="text-center "> {t("WhoGR7")}<span className="text-mainBlue"> GR7 </span> </h2>
                </div>


                <div className="WhoBoxes bg-white shadow-cardShadow flex justify-center flex-wrap md:p-5 rounded-xl ">

                    <div className="titleTwo w-full mb-4 p-3 ">
                        <h2 className="text-center">  {t("whoGR7_teamTitle")}  </h2>
                    </div>

                    <div className="wrapperBox p-3 w-1/2 lg:w-1/3 xl:w-1/4 ">
                        <div className="box  md:p-4 rounded-xl shadow-cardShadow transition-all hover:bg-mainBlue hover:text-white duration-300 hover:shadow-xl bg-lightGrayBack flex justify-center flex-col items-center gap-3">
                            {/* <img src={doctor} className="w-16" alt="doctor" /> */}
                            <Lottie
                                loop={true}
                                lottieRef={animteRef}
                                animationData={doctorGr7}
                                className="scale-150"
                            />
                            <h4> {t("doctor_nutritionist")} </h4>
                        </div>
                    </div>

                    <div className="wrapperBox p-3 w-1/2 lg:w-1/3 xl:w-1/4 ">
                        <div className="box  md:p-4 rounded-xl shadow-cardShadow transition-all hover:bg-mainBlue hover:text-white duration-300 hover:shadow-xl bg-lightGrayBack flex justify-center flex-col items-center gap-3">
                            {/* <img src={coach} className="w-16" alt="doctor" /> */}
                            <Lottie
                                loop={true}
                                lottieRef={animteRef}
                                animationData={coachGr7}
                                className="scale-150"
                            />
                            <h4> {t("professional_trainer")} </h4>
                        </div>
                    </div>

                    <div className="wrapperBox p-3 w-1/2 lg:w-1/3 xl:w-1/4 ">
                        <div className="box  md:p-4 rounded-xl shadow-cardShadow transition-all hover:bg-mainBlue hover:text-white duration-300 hover:shadow-xl bg-lightGrayBack flex justify-center flex-col items-center gap-3">
                            {/* <img src={Physiotherapist} className="w-16" alt="doctor" /> */}
                            <Lottie
                                loop={true}
                                lottieRef={animteRef}
                                animationData={doctor2} />
                            <h4> {t("physiotherapist")} </h4>
                        </div>
                    </div>

                    <div className="wrapperBox p-3 w-1/2 lg:w-1/3 xl:w-1/4 ">
                        <div className="box  md:p-4 rounded-xl shadow-cardShadow transition-all hover:bg-mainBlue hover:text-white duration-300 hover:shadow-xl bg-lightGrayBack flex justify-center flex-col items-center gap-3">
                            {/* <img src={psychologist} className="w-16" alt="doctor" /> */}
                            <Lottie
                                loop={true}
                                lottieRef={animteRef}
                                animationData={doctor3}
                                className="scale-110"
                            />
                            <h4> {t("psychologist")} </h4>
                        </div>
                    </div>

                    <div className="wrapperBox p-3 w-1/2 lg:w-1/3 xl:w-1/4 ">
                        <div className="box  md:p-4 rounded-xl shadow-cardShadow transition-all hover:bg-mainBlue hover:text-white duration-300 hover:shadow-xl bg-lightGrayBack flex justify-center flex-col items-center gap-3">
                            {/* <img src={ai} className="w-16" alt="doctor" /> */}
                            <Lottie
                                loop={true}
                                lottieRef={animteRef}
                                animationData={AiAssistant} />
                            <h4>  {t("ai_assistant")}  </h4>
                        </div>
                    </div>

                    <div className="wrapperBox p-3 w-1/2 lg:w-1/3 xl:w-1/4 ">
                        <div className="box  md:p-4 rounded-xl shadow-cardShadow transition-all hover:bg-mainBlue hover:text-white duration-300 hover:shadow-xl bg-lightGrayBack flex justify-center flex-col items-center gap-3">
                            {/* <img src={program} className="w-16" alt="doctor" /> */}
                            <Lottie
                                loop={true}
                                lottieRef={animteRef}
                                animationData={plannerGr7} />
                            <h4> {t("program_reviewer")} </h4>
                        </div>
                    </div>

                    <div className="wrapperBox p-3 w-1/2 lg:w-1/3 xl:w-1/4 ">
                        <div className="box  md:p-4 rounded-xl shadow-cardShadow transition-all hover:bg-mainBlue hover:text-white duration-300 hover:shadow-xl bg-lightGrayBack flex justify-center flex-col items-center gap-3">
                            {/* <img src={customerS} className="w-16" alt="doctor" /> */}
                            <Lottie
                                loop={true}
                                lottieRef={animteRef}
                                animationData={customerServGr7} />
                            <h4> {t("customer_service")} </h4>
                        </div>
                    </div>

                </div>


            </div>


        </div>
    )
}
