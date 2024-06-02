import stars from "../../assets/stars.svg"
import avtars1 from "../../assets/avatar4.jpg"
import avtars2 from "../../assets/avatar2.jpg"
import avtars3 from "../../assets/avatar3.jpg"


import { useEffect } from "react"


import { useTranslation } from "react-i18next"
import { useLanguage } from "../../contexts/LanguageContext"

import "./HeroStyle.scss"

export default function Hero() {

    const { t } = useTranslation();
    const { language } = useLanguage();


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
                        block: 'start' // Adjust as needed, e.g., 'center', 'end'
                    });
                }
            });
        });
    }, [])

    return <>

        <div id="hero" className=" relative bg-lightGrayBack overflow-hidden">

            <div className="mobile ">

                <div className="container px-4 mg:px-10 lg:px-20 ">
                    <div className="title text-center pt-5 md:pt-12">
                        <h1 >
                            <strong>  {t("header_Title")} </strong>
                        </h1>
                        <p className="my-4">  {t("header_subTitle")}  </p>
                    </div>
                </div>


                <div className="videoBack w-5/6 lg:w-3/5 m-auto mt-7 ">


                    {language === "ar" ? <>

                        <iframe src="https://player.vimeo.com/video/937660173?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow={{ autoplay: 1, muted: 1, fullscreen: true, pictureInPicture: true, clipboardWrite: true }} className="w-full h-full" title="GR7 Arabic"></iframe>

                    </> : <>

                        <iframe src="https://player.vimeo.com/video/937662099?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow={{ autoplay: 1, muted: 1, fullscreen: true, pictureInPicture: true, clipboardWrite: true }} className="w-full h-full" title="GR7 Arabic"></iframe>

                    </>}


                </div>


                <div className=" flex items-center ">
                    <div className="container relative z-10 ">

                        <div className="content ">

                            <div className="btn my-2 mx-auto w-3/4  ">
                                <a href="#" data-scroll-to="ChoosePlan" > <button className="w-full flex justify-center items-center py-2  bg-mainBlue shadow-cardShadow text-white text-2xl lg:text-3xl font-bold rounded-lg"> {t("header_Button_subscribeNow")} </button>  </a>
                                <button className="w-full flex justify-center items-center py-2 mt-3  bg-mainBlue shadow-cardShadow text-white text-2xl lg:text-3xl font-bold rounded-lg"> <a href="#" data-scroll-to="Samples"> {t("header_Button_seeTraineeReviews")} </a> </button>
                            </div>

                            <div className="stars  flex justify-center items-center gap-7 mt-10">

                                <div className="text-stars  flex flex-col justify-center items-center text-white text-sm md:text-base  ">
                                    <p className="flex flex-col">
                                        <strong className="flex"> {t("header_trustText")} </strong>
                                        <span> {t("header_trustText2")}  </span>
                                    </p>
                                    <div className="starsImg ">
                                        <img src={stars} className="w-36 saturate-150" alt="stars" />
                                    </div>
                                </div>

                                <div className="pics w-fit h-fit flex justify-center items-center ">
                                    <img src={avtars1} className="w-16 border-2 -ml-3 rounded-full" alt="avtars" />
                                    <img src={avtars2} className="w-16 border-2 -ml-3 rounded-full" alt="avtars" />
                                    <img src={avtars3} className="w-16 border-2 -ml-3 rounded-full" alt="avtars" />
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>



    </>

}
