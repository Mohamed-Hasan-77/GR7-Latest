import "./MoneyGuaranteeStyle.scss"

import MoneyBackGuarantee from "../../assets/money-back-guarantee-png-101.webp"
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


export default function MoneyGuarantee() {

    const { t } = useTranslation();

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


    return (
        <div id="MoneyGuarantee" className="py-7 overflow-hidden">


            <div className="container px-10 lg:px-28 ">


                <div className="instructor instructorTwo mt-10 flex justify-between flex-wrap">

                    <div className="text w-full lg:w-1/2 order-1 lg:order-none  ">
                        <h4 className="mb-3 mt-7 lg:mt-0 px-4 ">    {t("risk_free_title")}  </h4>
                        <h3 className="mb-3 mt-7 lg:mt-0 px-4 ">  <strong>   {t("guarantee_title")}  </strong>  </h3>
                        <p className="pl-10 pr-4">
                            {t("guarantee_description")}
                        </p>
                    </div>


                    <div className="img w-full lg:w-1/2 flex justify-center ">
                        <img src={MoneyBackGuarantee} className="rounded-xl" alt="Instructor" />
                    </div>

                </div>

            </div>


            <div className="SubBtn mt-16 flex justify-center px-7">
                <a href="#" data-scroll-to="ChoosePlan">
                    <button className='p-4 px-10 bg-mainBlue flex flex-col justify-center items-center text-white shadow-cardShadow rounded'>
                        <span className="mb-2 text-xl lg:text-3xl flex items-center gap-3 ">  {t("header_Button_subscribeNow")}  </span>
                    </button>
                </a>
            </div>

        </div>
    )
}
