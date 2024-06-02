import { useTranslation } from "react-i18next";
import TransformationSlider from "./TransformationSlider"

import "./TransformationStyle.scss"




export default function Transformation() {

    const { t } = useTranslation();

    return (

        <div id="Transformation" className='Transformation  '>

            <div className="secTitle text-center">
                <h2 className="">  {t("Transformation_title")}  </h2>
                <p className="flex justify-center items-center gap-3 text-mainRed mt-3">
                    {t("Transformation_subTitle")}
                </p>
            </div>


            <div className="slider mt-14">
                <div className="slide-track">

                    <TransformationSlider />

                </div>
            </div>


        </div>
    )
}
