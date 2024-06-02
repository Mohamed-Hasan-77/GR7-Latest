import QuestionsFooter from '../QuestionsFooter/QuestionsFooter'
import Footer from '../Footer/Footer'
import SubNav from '../subNav/subNav';

import { useEffect, useRef, useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
import Lottie from 'lottie-react';

import MoneyBackImg from "../../assets/moneyBack.webp"
import sucess from "../../assets/sucess.json"


import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';

import "./ContactUsStyle.scss"

export default function ContactUs() {


    const [phoneNumber, setPhoneNumber] = useState("");

    const { t } = useTranslation();
    const { language } = useLanguage();


    function handlePhoneNumber(value) {
        setPhoneNumber(value)
    }

    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const messageInputRef = useRef(null);


    async function senUserData(userData) {

        // try and catch if you are not sure if there will be an error with api 
        try {
            let { data } = await axios.post("https://sheetdb.io/api/v1/9cdfuvdskp32f", userData);

            // catch the error 
        } catch (err) {
            // console.log(err.response);

            alert("something Wrong happened please try again")

        }

    }


    const handleSubmit = (event) => {
        event.preventDefault();


        let userInfo = {};



        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${day}-${month}-${year}`;

        // store User Data 
        userInfo["Date"] = currentDate;
        userInfo.Name = nameInputRef.current.value;
        userInfo.Phone = phoneNumber;
        userInfo.Email = emailInputRef.current.value;
        userInfo.Note = messageInputRef.current.value;



        senUserData(userInfo)



        let loader = document.querySelector(".loader");
        let success = document.querySelector(".suc");

        loader.classList.remove("hidden")

        // show success message 
        setTimeout(() => {
            // Reset input fields
            nameInputRef.current.value = '';
            setPhoneNumber('');
            emailInputRef.current.value = '';
            messageInputRef.current.value = '';
            loader.classList.add("hidden")
            success.classList.remove("hidden")
        }, 1000)

        setTimeout(() => {
            success.classList.add("hidden")
        }, 2220)

    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

    }, [])



    return <>


        <div id='ContactUs'>

            <SubNav />

            <div id="SubscribeForm" className=" bg-lightGrayBack" >


                <div className="container formSub flex flex-wrap py-12 justify-center ">


                    <h1 className=' text-3xl md:text-5xl font-bold w-full text-white text-center mt-1 md:mt-12 mb-5'>  {t("contact_heading_primary")}   </h1>
                    <h1 style={{ color: "#ffec00" }} className=' text-xl md:text-2xl font-bold w-full  text-center mb-10 '>  {t("contact_heading_secondary")}   </h1>


                    <div className={`formWrapper grid w-full lg:w-2/3  p-3 ${language == "en" ? "dir-ltr" : "dir-rtl"}`}>
                        <div className="w-full p-12 bg-white rounded-2xl shadow-cardShadow">
                            <h1 className=" font-bold text-2xl "> {t("personal_info_heading")}  </h1>
                            <form onSubmit={handleSubmit} className="mt-6">


                                <label htmlFor="firstname" className="block text-xl font-semibold text-gray-700 uppercase"> {t("form_labels_name")} </label>
                                <input id="firstname" type="text" name="firstname" placeholder="Name" autoComplete="given-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner" required ref={nameInputRef} />


                                <label htmlFor="email" className="block mt-2 text-xl font-semibold text-gray-700 uppercase"> {t("form_labels_email")} </label>
                                <input id="email" type="email" name="email" placeholder="example@email.com" autoComplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner" required ref={emailInputRef} />



                                <label htmlFor="phoneNumber" className="block mt-2 text-xl font-semibold text-gray-700 uppercase">  {t("form_labels_phoneNumber")} </label>
                                <PhoneInput country={'eg'} placeholder=" Phone Number " inputProps={{ required: true, }} className=" block w-full p-3 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner " required="required" onChange={handlePhoneNumber} value={phoneNumber} />


                                <label htmlFor="message" className="block mt-2 text-xl font-semibold text-gray-700 uppercase"> {t("form_labels_message")} </label>
                                <textarea id="message" type="message" name="message" placeholder="Message" autoComplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner" required ref={messageInputRef} />


                                <button type="submit" className="w-full py-3 mt-6 flex items-center justify-center gap-2 font-medium tracking-widest text-white uppercase bg-mainBlue rounded-lg shadow-lg focus:outline-none hover:bg-blue-900 hover:shadow-none">
                                    {t("submit_button_text")}
                                    <div className="loader hidden "></div>
                                    <div className='w-7  suc relative hidden' >
                                        <Lottie
                                            loop={true}
                                            animationData={sucess}
                                            className='absolute top-0 left-0 -translate-y-1/2'
                                        /> </div>
                                </button>
                            </form>
                        </div>
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

        </div>
    </>
}
