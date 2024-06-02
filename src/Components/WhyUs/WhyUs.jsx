import "./WhyUsStyle.scss"



import team from "../../assets/gr7-icon/team.png"
import goals from "../../assets/gr7-icon/goals.png"
import training from "../../assets/gr7-icon/training.png"
import planning from "../../assets/gr7-icon/planning.png"
import operator from "../../assets/gr7-icon/operator.png"
import help from "../../assets/gr7-icon/help.png"
import success from "../../assets/gr7-icon/success.png"


import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext"


export default function WhyUs() {




    const { t } = useTranslation();
    const { language } = useLanguage();

    const dataGr7 = [
        {
            title: " فريق احترافي متكامل ",
            img: team,
            desc: ` برنامجك محل غاية وتدقيق ومتابعة فريق عمل متكامل من سبعة اقسام  `,
        },
        {
            title: " صياغة هدفك ",
            img: goals,
            desc: ` نقوم بجمع وترتيب معلوماتك الصحية والبدنية لإعداد الخطط التي تناسبك  `,
        },
        {
            title: " برنامجك المخصص ",
            img: training,
            desc: ` برامج وخطط يتم إعدادها وتفصيلها بناء علي بياناتك الصحية والبدنية لتناسب هدفك 100 % `,
        },
        {
            title: "برامج وخطط متغيرة ",
            img: planning,
            desc: ` خلال رحلتك نحو هدفك نقوم بالتغيير المستمر للبرامج والخطط بما يتناسب مع التغيير الذي يحدث لجسمك `,
        },
        {
            title: " المتابعة والتواصل ",
            img: operator,
            desc: ` لا نمل من التواصل وتقديم المساعدة لحرصنا الدائم لكي تصل لأفضل نسخة منك`,
        },
        {
            title: " حل المشكلات الطارئة ",
            img: help,
            desc: ` ستجدنا دائما في إنتظارك لمتابعتك لكي تتجاوز أي عقبة نفسية أو صحية تعوق مسارك `,
        },
        {
            title: "التحفيز والتشجيع  ",
            img: success,
            desc: ` لا يقتصر دورنا بتقديم الخطط والبرامج والمتابعة فقط لكن لدينا برامج وتحديات شخصية لتحفز وتخرج أفضل ما لديك `,
        },
    ]


    const dataGr7en = [
        {
            title: "Integrated Professional Team",
            img: team,
            desc: `Your program is meticulously crafted and monitored by a fully integrated team of seven departments.`,
        },
        {
            title: "Crafting Your Goal",
            img: goals,
            desc: `We gather and organize your health and fitness information to prepare plans that suit you.`,
        },
        {
            title: "Your Customized Program",
            img: training,
            desc: `Programs and plans are prepared and detailed based on your health and fitness data to suit your goal 100%.`,
        },
        {
            title: "Adaptive Programs and Plans",
            img: planning,
            desc: `Throughout your journey towards your goal, we continuously adapt programs and plans to fit the changes happening to your body.`,
        },
        {
            title: "Follow-up and Communication",
            img: operator,
            desc: `We never tire of communication and providing assistance, always striving for you to reach your best version.`,
        },
        {
            title: "Solving Emergent Problems",
            img: help,
            desc: `You will always find us waiting to support you in overcoming any psychological or health obstacles hindering your progress.`,
        },
        {
            title: "Motivation and Encouragement",
            img: success,
            desc: `Our role extends beyond offering plans, programs, and monitoring. We have personal challenges and programs to motivate and bring out the best in you.`,
        },
    ];


    return (
        <div id="WhyUs" className="pt-4 pb-12 overflow-hidden bg-lightGrayBack">


            <div className="container">

                <div className="title my-7">
                    <h2 className="text-mainBlue  " >  {t("WhyGr7")} GR7 ؟ </h2>
                </div>


                <div className="QBoxes flex justify-center  flex-wrap px-4 md:px-0 ">


                    {language === "ar" ? <>


                        {dataGr7?.map((ele, idx) => {
                            return <div key={idx} className="wrapperBox  py-3 md:p-4 md:py-5 px-0  w-full md:w-1/2 lg:w-1/3  ">
                                <div className="box  p-6 md:p-3 rounded-2xl shadow-cardShadow bg-white relative  flex justify-between ">

                                    <div className="img  w-3/12 ">
                                        <img src={ele.img} alt="Vegetables" />
                                    </div>

                                    <div className="cardTitle flex flex-col   w-9/12 ">
                                        <h3 className="mb-3"> {ele.title} </h3>
                                        <p className="text-right"> {ele.desc} </p>
                                    </div>
                                </div>
                            </div>
                        })}

                    </> : <>


                        {dataGr7en?.map((ele, idx) => {
                            return <div key={idx} className=" dir-ltr wrapperBox  py-3 md:p-4 md:py-5 px-0  w-full md:w-1/2 lg:w-1/3  ">
                                <div className="box  p-6 md:p-3 rounded-2xl shadow-cardShadow bg-white relative  flex justify-between ">

                                    <div className="img  w-3/12 ">
                                        <img src={ele.img} alt="Vegetables" />
                                    </div>

                                    <div className="cardTitle flex flex-col   w-9/12 ">
                                        <h3 className="mb-3"> {ele.title} </h3>
                                        <p className=""> {ele.desc} </p>
                                    </div>
                                </div>
                            </div>
                        })}


                    </>}









                </div>


            </div>


        </div>
    )
}
