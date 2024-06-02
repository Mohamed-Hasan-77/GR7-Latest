import "./trainingStyle.scss"

import gymCoach from "../../assets/gym.jpg"
import doctorWhyGr7 from "../../assets/doctorWhyGr7.jpg"
import weContact from "../../assets/weContact.jpg"
import homeWorkout from "../../assets/homeWorkout.jpg"
import healthyMeal from "../../assets/healthyMeal.jpg"


import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext"


export default function TrainingProgram() {

    const { t } = useTranslation();
    const { language } = useLanguage();


    const dataGr7 = [
        {
            title: " برنامج تمارين المقاومة ",
            img: gymCoach,
            desc: ` برنامج تدريب القوة هو الأساس لزيادة العضلات. باستخدام منهج علمي، نقدم نظامًا مخصصًا لتحقيق أقصى نتائج بسرعة. `,
        },
        {
            title: " برنامج تدريب منزلي ",
            img: homeWorkout,
            desc: ` إذا كان وقتك لا يسمح بالتدريب في الصالة الرياضية فنحن نعد لك برنامج تدريبي مخصص `,
        },
        {
            title: " خطة تغذية شخصية ",
            img: healthyMeal,
            desc: `  تحقيق أهدافك يعتمد على التغذية السليمة. برنامج التغذية لدينا شامل، حيث نأخذ في اعتبارنا أهدافك، وتفضيلاتك الغذائية، وإحتياجاتك الغذائية، وحتى ظروف عملك. `,
        },
        {
            title: "  دمج العلاج الطبيعي  ",
            img: doctorWhyGr7,
            desc: `  صحتك هي أولويتنا. نتعامل مع الإصابات أو القيود في برنامج تدريب القوة الخاص بك، مضمونين سلامتك وتقدمك. `,
        },
        {
            title: "نصائح ومتابعة ",
            img: weContact,
            desc: ` نقوم بمتابعتك علي مدار الساعه لتحفيزك وضمان الإلتزام بالبرامج`,
        },

    ]


    const dataGr7en = [
        {
            title: "Resistance Training Program",
            img: gymCoach,
            desc: `A strength training program is fundamental for muscle growth. Using a scientific approach, we offer a customized system to achieve maximum results quickly.`,
        },
        {
            title: "Home Workout Program",
            img: homeWorkout,
            desc: `If your schedule doesn't allow for gym workouts, we provide you with a tailored home workout program.`,
        },
        {
            title: "Personalized Nutrition Plan",
            img: healthyMeal,
            desc: `Success is linked to balanced nutrition. Our program is thorough, considering your goals, food choices, health needs, and work environment for optimal results.`,
        },
        {
            title: "Integration of Physical Therapy",
            img: doctorWhyGr7,
            desc: `Your health is our priority. We address injuries or limitations in your strength training program, ensuring your safety and progress.`,
        },
        {
            title: "Tips and Follow-up",
            img: weContact,
            desc: `Success hinges on proper nutrition tailored to your goals, preferences, and lifestyle. Our program covers all aspects, ensuring effective results.`,
        },
    ];




    return (
        <div id="trainingProgram" className="py-7 overflow-hidden ">


            <div className="container">

                <div className="title my-7 text-white">
                    <h2 > {t("TrainingProgram")}   <span className="text-mainRed"> {t("Program_includes")}  :</span>   </h2>
                </div>


                <div className="QBoxes flex justify-center  flex-wrap px-4 md:px-0 ">




                    {language === "ar" ? <>


                        {dataGr7?.map((ele, idx) => {
                            return <div key={idx} className="wrapperBox  py-3 md:p-4 md:py-7 px-0  w-full md:w-1/2 lg:w-1/3  ">

                                <div className="box relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-cardShadow">
                                    <div className="relative mx-4 -mt-6  h-60  overflow-hidden rounded-xl  bg-clip-border text-white shadow-cardShadow  ">
                                        <img src={ele.img} className="object-cover h-full w-full" alt="gymCoach" />
                                    </div>
                                    <div className="cardTitle p-6 ">
                                        <h3 className="mb-3 text-white "> . {ele.title} </h3>
                                        <p className="">   {ele.desc}  </p>

                                    </div>

                                </div>

                            </div>

                        })}


                    </> : <>


                        {dataGr7en?.map((ele, idx) => {
                            return <div key={idx} className="wrapperBox  py-3 md:p-4 md:py-7 px-0  w-full md:w-1/2 lg:w-1/3 dir-ltr ">

                                <div className="box relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-cardShadow">
                                    <div className="relative mx-4 -mt-6  h-60  overflow-hidden rounded-xl  bg-clip-border text-white shadow-cardShadow  ">
                                        <img src={ele.img} className="object-cover h-full w-full" alt="gymCoach" />
                                    </div>
                                    <div className="cardTitle p-6 ">
                                        <h3 className="mb-3 text-white "> . {ele.title} </h3>
                                        <p className="">   {ele.desc}  </p>

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
