import "./QuestionsFooterStyle.scss"

import CountDown from "../CountDown/CountDown"
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";


export default function QuestionsFooter() {

    const { t } = useTranslation();
    const { language } = useLanguage();

    const Questions = [
        {
            question: " ما هو الضمان للحصول علي نتيجة ؟  ",
            answer: `نحن نضمن لك أفضل البرامج والخطط والمتابعة والتحفيز لتحقق هدفك ولكن نسبة كبيرة في تحقيق ذلك تعتمد علي مرونتك في الإلتزام والمتابعة وأنت مستعد الان لتنضم بقصة نجاحك مع القصص والتحولات التي رأيتها علي موقعنا  `,
        },
        {
            question: "  أنا ليس لدي القدرة علي الإلتزام بالدايت، ودائما أشعر بالجوع فلا أستطيع الإلتزام بالدايت ! ",
            answer: ` لا تصدق شعورك بإحساس الجوع لأن أوقات بيبقي مش حقيقي ولكن نحن نعالج هذا الشعور
            بالأكل الذي يحتوي علي الألياف حتي لا تشعر بالجوع
            و ثانيا هنظبط ال mindset حتي نقاوم شهواتنا لكي نصل لأهدافنا.  `,
        },
        {
            question: " انا خايف من الترهلات بعد ما اخس ؟ ",
            answer: ` هذا يحدث في حالة واحدة فقط وهي الإعتماد علي أساليب الدايت التي تجعلك تفقد وزن كبير في فترة قليله لأنها تكون سبب في مشكلة الترهلات وأيضا تجعلك ترجع للوراء لنفس وزنك `,
        },
        {
            question: " هو أنا ممكن اخس دهون وازيد عضلات! ",
            answer: `  بالطبع وهذا هو  هدفنا الأساسي! `,
        },
        {
            question: " إيه رأيك في ال Keto diet ؟  ",
            answer: `  خلينا علي إتفاق أن في أنواع دايت كثيرة ومختلفة زي Keto  والصيام المتقطع و السعرات لكن في النهاية لا يوجد إجابة نموذجية الموضوع بيعتمد علي متغيرات كثيرة و وهذا دورنا وبنحددوا بناء علي جسدك و هدفك من غير ما نتبع  ترند معين `,
        },
        {
            question: " لا أستطيع أكل أي نشويات مرة أخري من السبت القادم حتي أخس؟ ",
            answer: ` لا تجعل النشويات  هي عدوك عندما تقطع النشويات بتخس وزن وهمي وده بسبب نزول كميه كبيرة من المياه في جسدك بشكل سريع و لكن بمجرد العودة لاكل النشويات مرة اخري جسمك بيمتلئ بالمياه وتصور لنفسك وزنك ولكن في الحقيقه الدايت المنظم لابد أن يحتوي علي كل ماكرو/ميكرونيتريتك اللازمه لجسدك و لكن تكون محسوبه بنسب معينه طبقا لهدفك `,
        },
        {
            question: "  أنا لا أستطيع الإلتزام مع مدرب أونلاين! ",
            answer: ` أنا بتواجد معاك بنفسي خطوه بخطوه بدون وجود تيم كوسيط بنا فدائما هيكون فيه إجابه موثوقة 100% مني غير إني بقدملك خدمه تصحيح الأداء للتمارين التي لا تستطيع فعلها عن طريق إنك تقوم بعمل  فيديو ليك و إنت تقوم به ودوري إني أصححلك لو فيه خطأ في تمرينك، وأيضا التمارين مشروحية بالفيديو حتي تستطيع فهم كل تمرين  وأكون معاك علي مدار اليوم لأي إستفسار . `,
        },
        {
            question: " كيف يمكنك أن تساعدني  لتحقيق أهداف اللياقة؟ ",
            answer: ` بنقدملك خطط تدريب وبرامج تغذية مُخصصة تم تصميمها من قبل خبراء حتي نساعدك بفعالية في تحقيق أهداف لياقتك الشخصية. `,
        },
        {
            question: " هل يمكن أن أتابع البرامج بالمنزل ام لابد من الإلتزام  بالحضور في الجيم؟ ",
            answer: ` هذا يعتمد علي اختيارك  فبرامجنا تستطيع  التكيف بها مع التمارين في المنزل أو في الجيم بناء على ظروفك وتوفر المعدات. `,
        },
        {
            question: " هل يوجد نظام دعم أو خدمة عملاء متاحة؟ ",
            answer: ` بالطبع نحن نقدم خدمة عملاء سريعة الإستجابة. لديك القدرة علي التواصل مع فريقنا في أي وقت حت نساعدك ونحفزك ونجاوب على أسئلتك وإهتماماتك. `,
        },

    ];

    const QuestionsEn = [
        {
            question: "What is the guarantee to get results?",
            answer: `We guarantee you the best programs, plans, follow-up, and motivation to achieve your goal, but a large percentage of achieving that depends on your flexibility in commitment and follow-up. You are ready now to join with your success story along with the stories and transformations you have seen on our website.`
        },
        {
            question: "I don't have the ability to commit to the diet, and I always feel hungry, so I can't commit to the diet!",
            answer: `Do not believe your feeling of hunger because sometimes it's not real, but we treat this feeling by eating foods that contain fiber so you don't feel hungry. Secondly, we will adjust the mindset to resist our desires to reach our goals.`
        },
        {
            question: "I'm afraid of sagging after losing weight?",
            answer: `This only happens in one case, which is relying on diet methods that make you lose a lot of weight in a short period because they are the cause of the problem of sagging and also make you regress to the same weight.`
        },
        {
            question: "Can I lose fat and gain muscles?",
            answer: `Of course, this is our main goal!`
        },
        {
            question: "What do you think of the Keto diet?",
            answer: `Let's agree that there are many different types of diets like Keto, intermittent fasting, and calorie counting, but in the end, there is no typical answer. It depends on many variables, and this is our role to determine based on your body and your goal without following a specific trend.`
        },
        {
            question: "I can't eat any carbohydrates again from next Saturday until I lose weight?",
            answer: `Do not make carbohydrates your enemy. When you cut carbohydrates, you lose weight, but it is just because of a large amount of water loss in your body quickly. But once you return to eating carbohydrates again, your body fills up with water, and you imagine your weight, but in reality, the diet should be regular and contain all the necessary macronutrients/micronutrients for your body but calculated at specific proportions according to your goal.`
        },
        {
            question: "I can't commit to an online coach!",
            answer: `I'm here with you personally step by step without the presence of a team as a mediator, so there will always be a 100% reliable answer from me, besides, I provide you with a performance correction service for exercises you can't do by recording a video of yourself doing it, and my role is to correct it if there's any mistake in your exercise. Also, the exercises are explained in videos so you can understand each exercise, and I will be with you throughout the day for any inquiries.`
        },
        {
            question: "How can you help me achieve fitness goals?",
            answer: `We provide you with customized training plans and nutrition programs designed by experts to help you effectively achieve your personal fitness goals.`
        },
        {
            question: "Can I follow the programs at home or do I have to commit to attending the gym?",
            answer: `It depends on your choice. Our programs can adapt to exercises at home or at the gym based on your circumstances and equipment availability.`
        },
        {
            question: "Is there a support system or customer service available?",
            answer: `Of course, we provide fast-response customer service. You have the ability to communicate with our team at any time to help and motivate you, answer your questions, and address your concerns.`
        }
    ];




    return (
        <div id='QuestionsFooter' className="p-2 pt-10 pb-10">

            <div className="title my-7 text-center">
                <h2> <strong>  {t("QuestionsFooter_title_main")} </strong> </h2>
                <p className="my-7">   {t("QuestionsFooter_title_sub")}  </p>
            </div>


            <div className="container flex justify-center ">

                <div className="wrapper shadow-cardShadow rounded-lg p-2 md:p-3 lg:p-5">
                    <div className=" Qaccordion space-y-3">


                        {language === "ar" ? <>


                            {Questions.map((ele, idx) => {
                                return <div key={idx} className="accordion">
                                    <div className="accordion-tab">
                                        <input id={`toggle${idx + 1}`} type="checkbox" className="accordion-toggle" name="toggle" />
                                        <label htmlFor={`toggle${idx + 1}`}><span className="text-mainYellow ml-3 font-bold" >  </span> {ele.question} </label>
                                        <div className="accordion-content">
                                            <p>
                                                {ele.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            })}

                        </> : <>


                            {QuestionsEn.map((ele, idx) => {
                                return <div key={idx} className="accordion dir-ltr">
                                    <div className="accordion-tab">
                                        <input id={`toggle${idx + 1}`} type="checkbox" className="accordion-toggle" name="toggle" />
                                        <label htmlFor={`toggle${idx + 1}`}><span className="text-mainYellow mr-3 font-bold" >  </span> {ele.question} </label>
                                        <div className="accordion-content">
                                            <p>
                                                {ele.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            })}


                        </>}


                    </div>
                </div>

            </div>


            <div className="count flex justify-center mt-10">

                <CountDown TimeColor="text-red-600" textColor="text-gray-400" fs="text-3xl" justify="justify-center" />

            </div>


            <p className="text-center pFooter px-4 my-7 text-xl lg:text-3xl text-white"> <strong>  {t("QuestionsFooter_discount_text")}   <span className="text-mainRed">  {t("QuestionsFooter_discount_text2")}   </span> </strong> </p>

            <div className="SubBtn my-7 flex justify-center px-7">

                <a href="#" data-scroll-to="ChoosePlan">
                    <button className='p-4 px-10 bg-mainBlue flex flex-col justify-center items-center text-white shadow-cardShadow rounded'>
                        <span className="mb-2 text-xl lg:text-3xl flex items-center gap-3 ">  {t("header_Button_subscribeNow")}  </span>
                        <span> {t("subscribeNow_sub")}  </span>
                    </button>
                </a>

            </div>

        </div>
    )
}
