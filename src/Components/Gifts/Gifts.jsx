import "./GiftsStyle.scss"


import gift1 from "../../assets/gift1.webp"
import gift2 from "../../assets/gift2.webp"
import gift3 from "../../assets/gift2.webp"
import gift5 from "../../assets/Book1.png"
import gift6 from "../../assets/gift6.png"
import gift7 from "../../assets/gift7.png"
import gift8 from "../../assets/gift8.png"
import gift9 from "../../assets/gift9.png"
import { useTranslation } from "react-i18next"
import { useLanguage } from "../../contexts/LanguageContext"



export default function Gifts() {


    const { t } = useTranslation();
    const { language } = useLanguage();

    return (
        <div id="Gifts" className="py-7 pb-1 overflow-hidden bg-lightGrayBack">


            <div className={` container px-10 lg:px-48 ${language == "en" && "dir-ltr"} `}>

                <div className="title my-7 ">
                    <h2>   {t("gifts_title")} <span className="text-mainRed">  {t("gifts_title2")}  </span> </h2>
                    <p className="mt-5  text-center">  <strong>  {t("gifts_description")}  </strong>  </p>
                </div>




                <div className=" giftBox bg-white rounded p-5 shadow-cardShadow mt-10 flex justify-between flex-wrap">

                    <div className="text w-full lg:w-1/2 order-1 lg:order-none   ">
                        <div>
                            <h3 className="mb-3 mt-7 lg:mt-0 px-4 ">  <strong>        {t("gift1_title")} </strong>  </h3>
                            <p className="pl-10 pr-4">
                                {t("gift1_description")}
                            </p>
                        </div>

                        <div>
                            <p className="Aprice mt-4 pl-10 pr-4 ">  {t("gift1_actualPrice")}  </p>
                            <p className="Dprice my-2 pl-10 pr-4">  {t("gift1_discountedPrice")}</p>
                        </div>

                    </div>

                    <div className="img w-full lg:w-1/2 flex justify-center items-start lg:justify-end ">
                        <img src={gift1} className="rounded " alt="Instructor" />
                    </div>

                </div>


                <div className=" giftBox bg-white rounded p-5 shadow-cardShadow mt-10 flex justify-between flex-wrap">

                    <div className="text w-full lg:w-1/2 order-1 lg:order-none  ">
                        <h3 className="mb-3 mt-7 lg:mt-0 px-4 ">  <strong>        {t("gift2_title")} </strong>  </h3>
                        <p className="pl-10 pr-4">
                            {t("gift2_description")}
                        </p>

                        <p className="Aprice mt-4 pl-10 pr-4 ">  {t("gift2_actualPrice")}  </p>
                        <p className="Dprice my-2 pl-10 pr-4"> {t("gift2_discountedPrice")} </p>

                    </div>


                    <div className="img w-full lg:w-1/2 flex justify-center items-start lg:justify-end ">
                        <img src={gift2} className="rounded h-auto" alt="Instructor" />
                    </div>

                </div>


                <div className=" giftBox bg-white rounded p-5 shadow-cardShadow mt-10 flex justify-between flex-wrap">

                    <div className="text w-full lg:w-1/2 order-1 lg:order-none  ">
                        <h3 className="mb-3 mt-7 lg:mt-0 px-4 ">  <strong>       {t("gift3_title")} </strong>  </h3>
                        <p className="pl-10 pr-4">
                            {t("gift3_description")}
                        </p>

                        <p className="Aprice mt-4 pl-10 pr-4 ">  {t("gift3_actualPrice")} </p>
                        <p className="Dprice my-2 pl-10 pr-4"> {t("gift3_discountedPrice")} </p>

                    </div>


                    <div className="img w-full lg:w-1/2 flex justify-center items-start lg:justify-end ">
                        <img src={gift3} className="rounded h-auto" alt="Instructor" />
                    </div>

                </div>


                <div className=" giftBox bg-white rounded p-5 shadow-cardShadow mt-10 flex justify-between flex-wrap">

                    <div className="text w-full lg:w-1/2 order-1 lg:order-none  ">
                        <h3 className="mb-3 mt-7 lg:mt-0 px-4 ">  <strong>       {t("gift4_title")}  </strong>  </h3>
                        <p className="pl-10 pr-4">
                            {t("gift4_description")}
                        </p>

                        <p className="Aprice mt-4 pl-10 pr-4 ">   {t("gift4_actualPrice")}  </p>
                        <p className="Dprice my-2 pl-10 pr-4">  {t("gift4_discountedPrice")} </p>

                    </div>


                    <div className="img w-full lg:w-1/2 flex justify-center items-start lg:justify-end ">
                        <img src={gift5} className="rounded h-auto" alt="Instructor" />
                    </div>

                </div>

                <div className=" giftBox bg-white rounded p-5 shadow-cardShadow mt-10 flex justify-between flex-wrap">

                    <div className="text w-full lg:w-1/2 order-1 lg:order-none  ">
                        <h3 className="mb-3 mt-7 lg:mt-0 px-4 ">  <strong>        {t("gift5_title")}   </strong>  </h3>
                        <p className="pl-10 pr-4">
                            {t("gift5_description")}
                        </p>

                        <p className="Aprice mt-4 pl-10 pr-4 ">   {t("gift5_actualPrice")}   </p>
                        <p className="Dprice my-2 pl-10 pr-4">  {t("gift5_discountedPrice")} </p>

                    </div>


                    <div className="img w-full lg:w-1/2 flex justify-center items-start lg:justify-end ">
                        <img src={gift6} className="rounded h-auto" alt="Instructor" />
                    </div>

                </div>


                <div className=" giftBox bg-white rounded p-5 shadow-cardShadow mt-10 flex justify-between flex-wrap">

                    <div className="text w-full lg:w-1/2 order-1 lg:order-none  ">
                        <h3 className="mb-3 mt-7 lg:mt-0 px-4 ">  <strong>    {t("gift6_title")}  </strong>  </h3>
                        <p className="pl-10 pr-4">
                            {t("gift6_description")}
                        </p>

                        <p className="Aprice mt-4 pl-10 pr-4 ">   {t("gift6_actualPrice")}  </p>
                        <p className="Dprice my-2 pl-10 pr-4">   {t("gift6_discountedPrice")} </p>

                    </div>


                    <div className="img w-full lg:w-1/2 flex justify-center items-start lg:justify-end ">
                        <img src={gift7} className="rounded h-auto" alt="Instructor" />
                    </div>

                </div>


                <div className=" giftBox bg-white rounded p-5 shadow-cardShadow mt-10 flex justify-between flex-wrap">

                    <div className="text w-full lg:w-1/2 order-1 lg:order-none  ">
                        <h3 className="mb-3 mt-7 lg:mt-0 px-4 ">  <strong>     {t("gift7_title")}  </strong>  </h3>
                        <p className="pl-10 pr-4">
                            {t("gift7_description")}
                        </p>

                        <p className="Aprice mt-4 pl-10 pr-4 ">  {t("gift7_actualPrice")}  </p>
                        <p className="Dprice my-2 pl-10 pr-4">  {t("gift7_discountedPrice")} </p>

                    </div>


                    <div className="img w-full lg:w-1/2 flex justify-center items-start lg:justify-end ">
                        <img src={gift8} className="rounded h-auto" alt="Instructor" />
                    </div>

                </div>


                <div className=" giftBox bg-white rounded p-5 shadow-cardShadow mt-10 flex justify-between flex-wrap">

                    <div className="text w-full lg:w-1/2 order-1 lg:order-none  ">
                        <h3 className="mb-3 mt-7 lg:mt-0 px-4 ">  <strong>     {t("gift8_title")}   </strong>  </h3>
                        <p className="pl-10 pr-4">
                            {t("gift8_description")}
                        </p>

                        <p className="Aprice mt-4 pl-10 pr-4 ">   {t("gift8_actualPrice")}   </p>
                        <p className="Dprice my-2 pl-10 pr-4">  {t("gift8_discountedPrice")} </p>

                    </div>


                    <div className="img w-full lg:w-1/2 flex justify-center items-start lg:justify-end ">
                        <img src={gift9} className="rounded h-auto" alt="Instructor" />
                    </div>

                </div>


            </div>




        </div>
    )
}
