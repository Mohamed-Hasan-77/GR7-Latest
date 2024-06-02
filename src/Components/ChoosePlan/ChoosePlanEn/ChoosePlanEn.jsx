import "./planEnStyle.scss"


import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

import silverPlan from "../../../assets/silver1.json"
import goldenPlan from "../../../assets/golden11.json"
import vipPlan from "../../../assets/golden1.json"
import Lottie from "lottie-react"


export default function ChoosePlanEn() {


    const [price, setPrice] = useState(false)
    const [Dprice, setDPrice] = useState(false)


    const [price1, setPrice1] = useState(false)
    const [Dprice1, setDPrice1] = useState(false)

    const [price2, setPrice2] = useState(false)
    const [Dprice2, setDPrice2] = useState(false)


    function updatePrice(newPrice, DPrice) {
        setPrice(newPrice);
        setDPrice(DPrice)
    }


    function updatePrice1(newPrice, DPrice) {
        setPrice1(newPrice);
        setDPrice1(DPrice)
    }

    function updatePrice2(newPrice, DPrice) {
        setPrice2(newPrice);
        setDPrice2(DPrice)
    }


    const planData = [
        {
            title: "Silver Plan",
            disCount: " ",
            planDataLi: [
                "Weekly direct follow-up via video call",
                "Nutrition plan designed to achieve your goal with economical food options",
                "Training plan tailored to your goal and training location (home gym)",
                "Vitamins and supplements program (optional)",
                "Daily follow-up via appropriate communication method with the GR7 team",
                "Nutritional program update every 14 days",
                "Training program update every month according to your goal",
                "Recording file to track your progress and achievements",
                "Plan to organize time between meals and exercise",
                "Dealing with injuries, improving movement performance, and complete recovery",
                "Review of all reports, analyses, and measurements before preparing the programs",
            ],
            id: "silver",
            discountPrice: "1,499EGP",
            priceThree: "1,999EGP",
            priceSix: "3,499EGP",
            priceTwelve: "5,999EGP",
            three: "1,499EGP",
            six: "2,999EGP",
            twelve: "4,999EGP",
        },
        {
            title: "Golden Plan",
            disCount: " ",
            planDataLi: [
                "Video call follow-up every 3 days",
                "Nutrition plan designed to achieve your goal with economical food options",
                "Training plan tailored to your goal and training location (home gym)",
                "Vitamins and supplements program (optional)",
                "Daily follow-up via appropriate communication method with the GR7 team",
                "Nutritional program update every 14 days",
                "Training program update every month according to your goal",
                "Recording file to track your progress and achievements",
                "Plan to organize time between meals and exercise",
                "Dealing with injuries, improving movement performance, and complete recovery",
                "Review of all reports, analyses, and measurements before preparing the programs",
            ],
            id: "golden",
            discountPrice: "6,000EGP",
            three: "6,000EGP",
            six: "10,999EGP",
            twelve: "20,000EGP",
        },
        {
            title: "VIP Plan",
            disCount: " ",
            planDataLi: [
                "Daily video call follow-up",
                "Follow-up during exercise",
                "Follow-up during meal preparation",
                "Nutrition plan designed to achieve your goal with economical food options",
                "Training plan tailored to your goal and training location (home gym)",
                "Vitamins and supplements program (optional)",
                "Daily follow-up via appropriate communication method with the GR7 team",
                "Nutritional program update every 14 days",
                "Training program update every month according to your goal",
                "Recording file to track your progress and achievements",
                "Plan to organize time between meals and exercise",
                "Dealing with injuries, improving movement performance, and complete recovery",
                "Review of all reports, analyses, and measurements before preparing the programs",
            ],
            id: "VIP",
            discountPrice: "12,000EGP",
            three: "12,000EGP",
            six: "20,000EGP",
            twelve: "35,000EGP",
        }
    ];




    useEffect(() => {

        const boxes = document.querySelectorAll('.DrationBox');

        boxes.forEach(box => {
            box.addEventListener('click', () => {

                boxes.forEach(b => b.classList.remove('active'));

                box.classList.add('active');
            });
        });

    }, [])

    return (
        <div id="ChoosePlan" className="ChoosePlanEn py-7 bg-lightGrayBack overflow-hidden">

            <div className="container">

                <div className="title mt-7 ">
                    <h2>  Subscriptions and Plans </h2>
                </div>


                <div className="planBox flex justify-center flex-wrap ">


                    <div className="wrapperBox p-3  w-full lg:w-1/2 xl:w-1/3  ">
                        <div className="box  p-5 rounded-2xl shadow-cardShadow transition-all duration-500 cursor-pointer bg-white relative  ">
                            <div className="boxTitle ">

                                <Lottie
                                    loop={true}
                                    animationData={silverPlan} />
                                <h3 className="mb-3 "> {planData[0].title}   </h3>
                            </div>

                            <ul className="mt-5">

                                <li>Weekly direct follow-up via video call</li>
                                <li>Nutrition plan designed to achieve your goal with economical food options</li>
                                <li>Training plan tailored to your goal and training location <span className="text-mainRed font-bold">(home gym)</span></li>
                                <li>Vitamins and supplements program <span className="text-mainRed font-bold">(optional)</span></li>
                                <li>Daily follow-up via appropriate communication method with the GR7 team</li>
                                <li>Nutritional program update every 14 days</li>
                                <li>Training program update every month according to your goal</li>
                                <li>Recording file to track your progress and achievements</li>
                                <li>Plan to organize time between meals and exercise</li>
                                <li>Dealing with injuries, improving movement performance, and complete recovery</li>
                                <li>Review of all reports, analyses, and measurements before preparing the programs</li>
                            </ul>


                            <div className="duration my-5 flex justify-between items-center flex-wrap mt-10 pr0">
                                {/* <h3 className="pb-3 text-xl w-full font-bold"> اختر مدة الاشتراك :  </h3> */}
                                <div className="px-3 w-1/3 ">
                                    <div onClick={() => { updatePrice(planData[0].three, planData[0].priceThree) }} className="DrationBox active flex justify-center items-center cursor-pointer hover:bg-blue-500 transition-colors py-2  bg-mainBlue text-white  md:text-xl font-bold rounded-lg"> 3 Months </div>
                                </div>

                                <div className="px-3 w-1/3 ">
                                    <div onClick={() => { updatePrice(planData[0].six, planData[0].priceSix) }} className="DrationBox flex justify-center items-center cursor-pointer hover:bg-blue-500 transition-colors py-2  bg-mainBlue text-white  md:text-xl font-bold rounded-lg"> 6 Months </div>
                                </div>

                                <div className="px-3 w-1/3 ">
                                    <div onClick={() => { updatePrice(planData[0].twelve, planData[0].priceTwelve) }} className="DrationBox flex justify-center items-center cursor-pointer hover:bg-blue-500 transition-colors py-2  bg-mainBlue text-white  md:text-xl font-bold rounded-lg"> 12 Months </div>
                                </div>
                            </div>


                            <div className={`price flex justify-between items-center font-bold text-2xl  `}>
                                <span className="text-decoration-line-through   "> <del>  {Dprice ? Dprice : planData[0].priceThree} </del>   </span>
                                <span className="font-bold text-mainBlue"> {price ? price : planData[0].discountPrice} </span>
                            </div>

                            <Link to={`/SubscribeForm/${planData[0].id}-${price ? price : planData[0].discountPrice}`} className="btn mt-5  ">
                                <button className="w-full flex justify-center items-center py-2 mt-3  text-2xl lg:text-xl font-bold rounded-lg"> <span> Choose Plan </span> </button>
                            </Link>

                        </div>
                    </div>


                    <div className="wrapperBox p-3  w-full lg:w-1/2 xl:w-1/3  ">
                        <div className="box  p-5 rounded-2xl shadow-cardShadow transition-all duration-500 cursor-pointer bg-white relative  ">
                            <div className="boxTitle ">

                                <Lottie
                                    loop={true}
                                    animationData={goldenPlan} />
                                <h3 className="mb-3 "> {planData[1].title}   </h3>

                            </div>

                            <ul className="mt-5">
                                <li>Video call follow-up every 3 days</li>
                                <li>Nutrition plan designed to achieve your goal with economical food options</li>
                                <li>Training plan tailored to your goal and training location <span className="text-mainRed font-bold">(home gym)</span></li>
                                <li>Vitamins and supplements program <span className="text-mainRed font-bold">(optional)</span></li>
                                <li>Daily follow-up via appropriate communication method with the GR7 team</li>
                                <li>Nutritional program update every 14 days</li>
                                <li>Training program update every month according to your goal</li>
                                <li>Recording file to track your progress and achievements</li>
                                <li>Plan to organize time between meals and exercise</li>
                                <li>Dealing with injuries, improving movement performance, and complete recovery</li>
                                <li>Review of all reports, analyses, and measurements before preparing the programs</li>
                            </ul>


                            <div className="duration my-5 flex justify-between items-center flex-wrap mt-10 pr1">
                                {/* <h3 className="pb-3 text-xl w-full font-bold"> اختر مدة الاشتراك :  </h3> */}
                                <div className="px-3 w-1/3 ">
                                    <div onClick={() => { updatePrice1(planData[1].three, planData[1].priceThree) }} className="DrationBox  flex justify-center items-center cursor-pointer hover:bg-blue-500 transition-colors py-2  bg-mainBlue text-white  md:text-xl font-bold rounded-lg"> 3 Months </div>
                                </div>

                                <div className="px-3 w-1/3 ">
                                    <div onClick={() => { updatePrice1(planData[1].six, planData[1].priceSix) }} className="DrationBox flex justify-center items-center cursor-pointer hover:bg-blue-500 transition-colors py-2  bg-mainBlue text-white  md:text-xl font-bold rounded-lg"> 6 Months </div>
                                </div>

                                <div className="px-3 w-1/3 ">
                                    <div onClick={() => { updatePrice1(planData[1].twelve, planData[1].priceTwelve) }} className="DrationBox flex justify-center items-center cursor-pointer hover:bg-blue-500 transition-colors py-2  bg-mainBlue text-white  md:text-xl font-bold rounded-lg"> 12 Months </div>
                                </div>
                            </div>


                            <div className={`price flex justify-between items-center font-bold text-2xl   `}>
                                <span className="text-decoration-line-through   "> <del>  {Dprice1 ? Dprice1 : planData[1].priceThree} </del>   </span>
                                <span className="font-bold text-mainBlue"> {price1 ? price1 : planData[1].discountPrice} </span>
                            </div>

                            <Link to={`/SubscribeForm/${planData[1].id}-${price1 ? price1 : planData[1].discountPrice}`} className="btn mt-5  ">
                                <button className="w-full flex justify-center items-center py-2 mt-3  text-2xl lg:text-xl font-bold rounded-lg"> <span> Choose Plan  </span> </button>
                            </Link>

                        </div>
                    </div>



                    <div className="wrapperBox p-3  w-full lg:w-1/2 xl:w-1/3  ">
                        <div className="box  p-5 rounded-2xl shadow-cardShadow transition-all duration-500 cursor-pointer bg-white relative  ">
                            <div className="boxTitle ">
                                <Lottie
                                    loop={true}
                                    animationData={vipPlan} />
                                <h3 className="mb-3 "> {planData[2].title}   </h3>

                            </div>

                            <ul className="mt-5">

                                <li>Daily video call follow-up</li>
                                <li>Follow-up during exercise</li>
                                <li>Follow-up during meal preparation</li>
                                <li>Nutrition plan designed to achieve your goal with economical food options</li>
                                <li>Training plan tailored to your goal and training location <span className="text-mainRed font-bold">(home gym)</span></li>
                                <li>Vitamins and supplements program <span className="text-mainRed font-bold">(optional)</span></li>
                                <li>Daily follow-up via appropriate communication method with the GR7 team</li>
                                <li>Nutritional program update every 14 days</li>
                                <li>Training program update every month according to your goal</li>
                                <li>Recording file to track your progress and achievements</li>
                                <li>Plan to organize time between meals and exercise</li>
                                <li>Dealing with injuries, improving movement performance, and complete recovery</li>
                                <li>Review of all reports, analyses, and measurements before preparing the programs</li>
                            </ul>


                            <div className="duration my-5 flex justify-between items-center flex-wrap mt-10">
                                {/* <h3 className="pb-3 text-xl w-full font-bold"> اختر مدة الاشتراك :  </h3> */}
                                <div className="px-3 w-1/3 ">
                                    <div onClick={() => { updatePrice2(planData[2].three, planData[2].priceThree) }} className="DrationBox  flex justify-center items-center cursor-pointer hover:bg-blue-500 transition-colors py-2  bg-mainBlue text-white  md:text-xl font-bold rounded-lg"> 3 Months </div>
                                </div>

                                <div className="px-3 w-1/3 ">
                                    <div onClick={() => { updatePrice2(planData[2].six, planData[2].priceSix) }} className="DrationBox flex justify-center items-center cursor-pointer hover:bg-blue-500 transition-colors py-2  bg-mainBlue text-white  md:text-xl font-bold rounded-lg"> 6 Months </div>
                                </div>

                                <div className="px-3 w-1/3 ">
                                    <div onClick={() => { updatePrice2(planData[2].twelve, planData[2].priceTwelve) }} className="DrationBox flex justify-center items-center cursor-pointer hover:bg-blue-500 transition-colors py-2  bg-mainBlue text-white  md:text-xl font-bold rounded-lg"> 12 Months </div>
                                </div>
                            </div>


                            <div className={`price flex justify-between items-center font-bold text-2xl  `}>
                                <span className="text-decoration-line-through   "> <del>  {Dprice2 ? Dprice2 : planData[2].priceThree} </del>   </span>
                                <span className="font-bold text-mainBlue"> {price2 ? price2 : planData[2].discountPrice} </span>
                            </div>

                            <Link to={`/SubscribeForm/${planData[2].id}-${price2 ? price2 : planData[2].discountPrice}`} className="btn mt-5  ">
                                <button className="w-full flex justify-center items-center py-2 mt-3  text-2xl lg:text-xl font-bold rounded-lg"> <span> Choose Plan  </span> </button>
                            </Link>

                        </div>
                    </div>



                </div>



            </div>


        </div>
    )
}
