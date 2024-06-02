import Footer from "../Footer/Footer"

import "./formStyle.scss"

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';



import MoneyBackImg from "../../assets/moneyBack.webp"

import silverPlan from "../../assets/silver1.json"
import goldenPlan from "../../assets/golden11.json"
import vipPlan from "../../assets/golden1.json"
import Lottie from "lottie-react"
import SubNav from './../subNav/subNav';
import QuestionsFooter from "../QuestionsFooter/QuestionsFooter";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";

export default function FormSub() {

    let { planId } = useParams()
    const [phoneNumber, setPhoneNumber] = useState("");

    const { t } = useTranslation();
    const { language } = useLanguage();

    function handlePhoneNumber(value) {
        setPhoneNumber(value)
    }


    let planData = []


    if (language === "ar") {

        if (planId.split("-")[0] == "silver") {
            planData = [
                {
                    title: "الخطة الفضية",
                    disCount: "  ",
                    img: silverPlan,
                    planData: [
                        " متابعة مباشرة أسبوعية من خلال مكالمة فديو ",
                        " خطة تغذية مصممة لتحقيق هدفك من أكلك المفضل بخيارات اقتصادية  ",
                        `  خطة تدريب تلائم هدفك ومكان تدريبك (الجيم المنزلي)`,
                        "برنامج فيتامينات ومكملات (اختياري)",
                        " متابعة يومية عن طريق وسيلة التواصل المناسبة لك مع فريق GR7 ",
                        " تحديث البرنامج الغذائي كل 14 يوم  ",
                        " تحديث برنامج تدريبي كل شهر حسب هدفك ",
                        " فايل تسجيل لتتبع تقدمك وانجازاتك  ",
                        " خطة لتنظيم الوقت بين الوجبات والتمرين   ",
                        " التعامل مع الاصابات وتحسين الأداء الحركي والاستشفاء الكامل  ",
                        " مراجعة كافة التقارير والتحاليل والقياسات قبل إداد البرامج ",

                    ],
                    id: "silver",
                    discountPrice: planId.split("-")[1],
                    price: "1,999EGP",
                }
            ]
        } else if (planId.split("-")[0] == "golden") {
            planData = [
                {
                    title: "الخطة الذهبية",
                    disCount: " ",
                    img: goldenPlan,
                    planData: [
                        " متابعة مكالمة فديو كل 3 أيام  ",
                        " خطة تغذية مصممة لتحقيق هدفك من أكلك المفضل بخيارات اقتصادية  ",
                        `  خطة تدريب تلائم هدفك ومكان تدريبك (الجيم المنزلي)`,
                        "برنامج فيتامينات ومكملات (اختياري)",
                        " متابعة يومية عن طريق وسيلة التواصل المناسبة لك مع فريق GR7 ",
                        " تحديث البرنامج الغذائي كل 14 يوم  ",
                        " تحديث برنامج تدريبي كل شهر حسب هدفك ",
                        " فايل تسجيل لتتبع تقدمك وانجازاتك  ",
                        " خطة لتنظيم الوقت بين الوجبات والتمرين   ",
                        " التعامل مع الاصابات وتحسين الأداء الحركي والاستشفاء الكامل  ",
                        " مراجعة كافة التقارير والتحاليل والقياسات قبل إداد البرامج ",

                    ],
                    id: "golden",
                    discountPrice: planId.split("-")[1],
                },
            ]



        } else if (planId.split("-")[0] == "VIP") {
            planData = [
                {
                    title: "خطة VIP",
                    disCount: " ",
                    img: vipPlan,
                    planData: [
                        " متابعة مكالمة فديو يومية  ",
                        " متابعة اثناء التمرين ",
                        " متابعة اعداد الوجبات ",
                        " خطة تغذية مصممة لتحقيق هدفك من أكلك المفضل بخيارات اقتصادية  ",
                        `  خطة تدريب تلائم هدفك ومكان تدريبك (الجيم المنزلي)`,
                        "برنامج فيتامينات ومكملات (اختياري)",
                        " متابعة يومية عن طريق وسيلة التواصل المناسبة لك مع فريق GR7 ",
                        " تحديث البرنامج الغذائي كل 14 يوم  ",
                        " تحديث برنامج تدريبي كل شهر حسب هدفك ",
                        " فايل تسجيل لتتبع تقدمك وانجازاتك  ",
                        " خطة لتنظيم الوقت بين الوجبات والتمرين   ",
                        " التعامل مع الاصابات وتحسين الأداء الحركي والاستشفاء الكامل  ",
                        " مراجعة كافة التقارير والتحاليل والقياسات قبل إداد البرامج ",

                    ],
                    id: "VIP",
                    discountPrice: planId.split("-")[1],
                }
            ]
        } else {
            planData = [
                { title: "لم يتم اختيار خطة " }
            ]
        }

    } else {
        if (planId.split("-")[0] === "silver") {
            planData = [
                {
                    title: "Silver Plan",
                    disCount: " ",
                    img: silverPlan,
                    planData: [
                        "Weekly direct follow-up via video call",
                        "Customized nutrition plan tailored to your favorite meals with economical options",
                        "Training plan tailored to your goals and training location (home gym)",
                        "Vitamins and supplements program (optional)",
                        "Daily follow-up via suitable communication method with GR7 team",
                        "Nutrition program update every 14 days",
                        "Training program update every month according to your goals",
                        "File recording to track your progress and achievements",
                        "Plan to organize time between meals and workouts",
                        "Dealing with injuries and improving movement performance and full recovery",
                        "Review of all reports, tests, and measurements before program preparation",
                    ],
                    id: "silver",
                    discountPrice: planId.split("-")[1],
                    price: "1,999EGP",
                }
            ]
        } else if (planId.split("-")[0] === "golden") {
            planData = [
                {
                    title: "Golden Plan",
                    disCount: " ",
                    img: goldenPlan,
                    planData: [
                        "Video call follow-up every 3 days",
                        "Customized nutrition plan tailored to your favorite meals with economical options",
                        "Training plan tailored to your goals and training location (home gym)",
                        "Vitamins and supplements program (optional)",
                        "Daily follow-up via suitable communication method with GR7 team",
                        "Nutrition program update every 14 days",
                        "Training program update every month according to your goals",
                        "File recording to track your progress and achievements",
                        "Plan to organize time between meals and workouts",
                        "Dealing with injuries and improving movement performance and full recovery",
                        "Review of all reports, tests, and measurements before program preparation",
                    ],
                    id: "golden",
                    discountPrice: planId.split("-")[1],
                },
            ]
        } else if (planId.split("-")[0] === "VIP") {
            planData = [
                {
                    title: "VIP Plan",
                    disCount: " ",
                    img: vipPlan,
                    planData: [
                        "Daily video call follow-up",
                        "Follow-up during exercise",
                        "Follow-up during meal preparation",
                        "Customized nutrition plan tailored to your favorite meals with economical options",
                        "Training plan tailored to your goals and training location (home gym)",
                        "Vitamins and supplements program (optional)",
                        "Daily follow-up via suitable communication method with GR7 team",
                        "Nutrition program update every 14 days",
                        "Training program update every month according to your goals",
                        "File recording to track your progress and achievements",
                        "Plan to organize time between meals and workouts",
                        "Dealing with injuries and improving movement performance and full recovery",
                        "Review of all reports, tests, and measurements before program preparation",
                    ],
                    id: "VIP",
                    discountPrice: planId.split("-")[1],
                }
            ]
        } else {
            planData = [
                { title: "No plan selected" }
            ]
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

    }, [])



    return <>


        <SubNav />

        <div id="SubscribeForm" className={`SubscribeForm bg-lightGrayBack ${language == "en" && "dir-ltr"} `} >


            <div className="container formSub flex flex-wrap py-12 justify-between">

                <div className="grid w-full lg:w-2/3  p-3 ">
                    <div className="w-full p-12 bg-white rounded-2xl shadow-cardShadow">
                        <h1 className=" font-bold text-2xl "> {t("personal_info_heading")}  </h1>
                        <form className="mt-6">


                            <label htmlFor="firstname" className="block text-xl font-semibold text-gray-700 uppercase"> {t("form_labels_name")} </label>
                            <input id="firstname" type="text" name="firstname" placeholder="Name" autoComplete="given-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner" required />


                            <label htmlFor="email" className="block mt-2 text-xl font-semibold text-gray-700 uppercase"> {t("form_labels_email")} </label>
                            <input id="email" type="email" name="email" placeholder="example@email.com" autoComplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner" required />



                            <label htmlFor="phoneNumber" className="block mt-2 text-xl font-semibold text-gray-700 uppercase">  {t("form_labels_phoneNumber")}</label>
                            <PhoneInput country={'eg'} placeholder=" Phone Number " inputProps={{ required: true, }} className=" block w-full p-3 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner " required="required" onChange={handlePhoneNumber} value={phoneNumber} />

                            <h3 className="pb-3 text-xl w-full font-bold">    </h3>

                            <div className="paymentInfo py-5 mt-5 flex flex-wrap ">
                                <h3 className="mb-3 font-bold w-full text-2xl  ">
                                    {t("payment_methodes")}
                                </h3>

                                <div className="w-full md:w-1/2 p-3 py-5" id="stripe-option">
                                    <div className=" flex items-center gap-3 rounded-lg cursor-pointer bg-lightGrayBack shadow-cardShadow p-3 border ">
                                        <input type="radio" id="stripePay" name="payment_method" value="stripePay" className="payment-method-js" required="" />
                                        <label htmlFor="stripePay" className="w-100 mb-0">
                                            <img className="h-20 " src="https://www.momaher.com/site/images/credit.svg" alt="" id="amazon-pay-img" />
                                            <h4 className="font-bold py-1" id="stripe-title"> {language == "ar" && "بطاقة إئتمان /"}  Credit Card</h4>
                                        </label>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 p-3 py-5" id="fawaterak-option-2">
                                    <div className=" flex items-center gap-3 rounded-lg cursor-pointer bg-lightGrayBack shadow-cardShadow p-3 border ">
                                        <input type="radio" id="fawaterakPay2" name="payment_method" value="fawaterakPay" data-payment-id="2" className="payment-method-js fwaterk-payment" required="" />
                                        <label htmlFor="fawaterakPay2" className="w-100 mb-0">
                                            <img className="h-20 " src="https://app.fawaterk.com/clients/payment_options/Visa_mastercardpng" alt="" />
                                            <h4 className="font-bold py-1" id="fawaterak-title"> Master Card Or Visa</h4>
                                        </label>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 p-3 py-5" id="fawaterak-option-3">
                                    <div className=" flex items-center gap-3 rounded-lg cursor-pointer bg-lightGrayBack shadow-cardShadow p-3 border ">
                                        <input type="radio" id="fawaterakPay3" name="payment_method" value="fawaterakPay" data-payment-id="3" className="payment-method-js fwaterk-payment" required="" />
                                        <label htmlFor="fawaterakPay3" className="w-100 mb-0">
                                            <img className="h-20 " src="https://app.fawaterk.com/clients/payment_options/fawrypng" alt="" />
                                            <h4 className="font-bold py-1" id="fawaterak-title"> fawry</h4>
                                        </label>
                                    </div>
                                </div>

                            </div>

                            <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-mainBlue rounded-lg shadow-lg focus:outline-none hover:bg-blue-900 hover:shadow-none">
                                اشترك الان
                            </button>
                        </form>
                    </div>
                </div>


                <div className="plan w-full lg:w-1/3">


                    {planData.map((ele, idx) => {
                        return <div key={idx} className="wrapperBox p-3  w-full   ">
                            <div className="box  p-5 rounded-2xl shadow-cardShadow   bg-white relative  ">


                                <div className="boxTitle ">
                                    <Lottie
                                        loop={true}
                                        animationData={ele.img} />
                                    <h3 className="mb-3"> {ele.title} </h3>

                                </div>

                                <ul className="mt-5">

                                    {ele.planData.map((li, idx) => {
                                        return <li key={idx}> {li} </li>
                                    })}
                                </ul>

                                <div className="price flex justify-between items-center font-bold text-2xl">
                                    <span className="font-bold text-mainBlue">  {ele.discountPrice} </span>
                                </div>

                            </div>
                        </div>
                    })}


                </div>
            </div>

            <div className="footWraper pt-20">
                <div className="container flex justify-center flex-wrap ">

                    <div className="titleFirst  text-center text-white">
                        <h2> <strong> {t("stillHesitant_heading")} </strong> </h2>
                        <p className="mb-4"> <strong>  {t("stillHesitant_text")}   </strong> </p>
                    </div>

                    <div className=" RefundPolicy  flex justify-center flex-wrap  ">

                        <div className="text w-full lg:w-1/2 flex items-center text-white ">
                            <p className=" text-2xl ">
                                <strong>  {t("refund_policy_text")}
                                    <span>  {t("refund_policy_note")} </span> </strong>
                            </p>
                        </div>


                        <div className="img w-full lg:w-1/2 flex justify-center ">
                            <img src={MoneyBackImg} className=" imgArrow rounded-xl w-60" alt="MoneyBackGuarantee" />
                        </div>

                    </div>


                    <QuestionsFooter />

                </div>
            </div>

        </div>

        <Footer />
    </>
}
