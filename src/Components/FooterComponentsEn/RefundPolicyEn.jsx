import FooterEn from "../FooterEn/FooterEn";
import MoneyBackGuarantee from "../../assets/money-back-guarantee-png-101.webp"
import "./FCompStyleEn.scss"

import { useEffect } from "react";

import SubNav from "../../Components/subNav/subNav";
import NavSecEn from './../../Components/NavSecEn/NavSecEn';

export default function RefundPolicyEn() {





    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    return <>


        <NavSecEn />



        <div id="RefundPolicy" className=" overflow-hidden ">

            <div className="container px-10 lg:px-28 mt-36 ">


                <div className=" RefundPolicy mt-10 flex justify-between flex-wrap">

                    <div className="text w-full lg:w-1/2 order-1 lg:order-none">
                        <h3 className="mb-3 mt-7 lg:mt-0 px-4 text-gray-400 dir-rtl">
                            <strong>You have a 30-day money-back guarantee while keeping the gifts!</strong>
                        </h3>
                        <p className="pl-10 pr-4">
                            <strong>
                                Because we guarantee the quality of our courses, we offer all trainees a 30-day full refund guarantee while keeping all the gifts
                                <span>"In case what was promised is not delivered."</span>
                            </strong>
                        </p>
                    </div>



                    <div className="img w-full lg:w-1/2 flex justify-center ">
                        <img src={MoneyBackGuarantee} className="rounded-xl" alt="MoneyBackGuarantee" />
                    </div>

                </div>


            </div>




        </div>
        <FooterEn />

    </>
}
