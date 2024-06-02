import partnerImg3 from "../../assets/partner3.webp"
import partnerImg5 from "../../assets/partner5.webp"
import partnerImg6 from "../../assets/partner6.webp"
import goldsGym from "../../assets/goldsGym.webp"
import powerTime from "../../assets/powerTime Gym.png"
import fitness from "../../assets/fitness.jpg"


import { useTranslation } from "react-i18next"


export default function Partners() {

    const { t } = useTranslation();


    return (
        <div id="Partners" className="py-7">

            <div className="title text-center">
                <h2 className="text-4xl text-mainRed"> <strong>  {t("partners_title_main")}  </strong> </h2>
                <p className="mt-5 text-gray-500 text-lg">  {t("partners_title_sub")}  </p>
            </div>

            <div className="container">
                <div className="partners flex justify-between items-center flex-wrap ">


                    <div className="img w-1/2 md:w-1/3 lg:w-1/6 mt-10 p-5"> <img src={partnerImg3} className="w-40  grayscale" alt="partnerImg3" /> </div>
                    <div className="img w-1/2 md:w-1/3 lg:w-1/6 mt-10 p-5 flex justify-center items-center"> <img src={goldsGym} className="w-24  grayscale" alt="partnerImg3" /> </div>
                    <div className="img w-1/2 md:w-1/3 lg:w-1/6 mt-10 p-5 flex justify-center items-center"> <img src={powerTime} className="w-40  grayscale" alt="partnerImg3" /> </div>
                    <div className="img w-1/2 md:w-1/3 lg:w-1/6 mt-10 p-5 flex justify-center items-center flex-col"> <img src={fitness} className="w-24  grayscale" alt="partnerImg3" /> <span className="font-bold text-xl"> Fitness In Gym </span> </div>
                    <div className="img w-1/2 md:w-1/3 lg:w-1/6 mt-10 p-5"> <img src={partnerImg5} className="w-40" alt="partnerImg5" /> </div>
                    <div className="img w-1/2 md:w-1/3 lg:w-1/6 mt-10 p-5"> <img src={partnerImg6} className="w-40" alt="partnerImg6" /> </div>


                </div>
            </div>


        </div>
    )
}
