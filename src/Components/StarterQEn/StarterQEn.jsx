import { useRef, useState } from "react"
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

import backArrow from "../../assets/down-arrow.png"

import "./StarterQStyleEn.scss"

export default function StarterQEn({ done }) {

    const [firstSlide, setFirstSlide] = useState(true)
    const [secondSlide, setSecondSlide] = useState(false)
    const [ThirdSlide, setThirdSlide] = useState(false)
    const [FourthSlide, setFourthSlide] = useState(false)
    const [FifthSlide, setFifthSlide] = useState(false)
    const [SixthSlide, setSixthSlide] = useState(false)
    const [SeventhSlide, setSeventhSlide] = useState(false)
    const [WrongData, setWrongData] = useState(false)



    const genderRef = useRef(null);






    function SlideForward1() {

        let checkedInput = ""

        let ele = document.querySelectorAll('.gender input');
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked == true) {
                checkedInput = ele[i]
            }
        }

        if (checkedInput.value) {
            setFirstSlide(false)
            setSecondSlide(true)
            setWrongData("")
        } else {
            setWrongData(true)
        }
    }


    function SlideForward2() {


        let checkedInput = []

        let ele = document.querySelectorAll('.checkbox-wrapper input');
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked == true) {
                checkedInput.push(ele[i].value)
            }
        }


        if (checkedInput[0]) {
            setSecondSlide(false)
            setThirdSlide(true)
            setWrongData(false)
        } else {
            setWrongData(true)
        }



    }

    function SlideForward3() {


        let checkedInput = ""

        let ele = document.querySelectorAll('.checkbox-wrapper input');
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked == true) {
                checkedInput = ele[i]
            }
        }



        if (checkedInput.value) {
            setThirdSlide(false)
            setFourthSlide(true)
            setWrongData(false)
        } else {
            setWrongData(true)
        }
    }

    function SlideForward4() {

        let checkedInput = ""

        let ele = document.querySelectorAll('.checkbox-wrapper input');
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked == true) {
                checkedInput = ele[i]
            }
        }



        if (checkedInput.value) {
            setFourthSlide(false)
            setFifthSlide(true)
            setWrongData(false)
        } else {
            setWrongData(true)
        }



    }

    function SlideForward5() {


        let checkedInput = []

        let ele = document.querySelectorAll('.checkbox-wrapper input');
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked == true) {
                checkedInput.push(ele[i].value)
            }
        }




        if (checkedInput[0]) {
            setFifthSlide(false)
            setSixthSlide(true)
            setWrongData(false)
        } else {
            setWrongData(true)
        }


    }


    function Finish() {

        let checkedInput = []

        let ele = document.querySelectorAll('.wrapper input');

        for (let i = 0; i < ele.length; i++) {
            if (ele[i].value !== "") {
                checkedInput.push(ele[i].value)
            }
        }


        if (checkedInput.length != 2) {
            setWrongData(true)
        } else {
            setWrongData(false)
            done()
        }

    }




    function slideBack1() {
        setSecondSlide(false)
        setFirstSlide(true)
        setWrongData("")
    }

    function slideBack2() {
        setThirdSlide(false)
        setSecondSlide(true)
        setWrongData("")
    }

    function slideBack3() {
        setFourthSlide(false)
        setThirdSlide(true)
        setWrongData("")
    }

    function slideBack4() {
        setFifthSlide(false)
        setFourthSlide(true)
        setWrongData("")
    }

    function slideBack5() {
        setSixthSlide(false)
        setFifthSlide(true)
        setWrongData("")
    }

    function slideBack6() {
        setSeventhSlide(false)
        setSixthSlide(true)
        setWrongData("")
    }



    return (
        <div id="StarterQEn" className="StarterQ flex justify-center relative items-center bg-gray-200 p-4">

            <div className="lang absolute top-5 right-5 p-4 bg-mainBlue text-white font-bold text-lg z-10 cursor-pointer rounded-md transition-colors hover:bg-blue-800"> <Link to={"/"}> عربي </Link> </div>

            <div className=" QBox shadow-cardShadow bg-white rounded p-2 md:p-5 ">

                <div className="trace w-full flex items-center justify-between ">
                    <div onClick={() => { secondSlide ? slideBack1() : ThirdSlide ? slideBack2() : FourthSlide ? slideBack3() : FifthSlide ? slideBack4() : SixthSlide ? slideBack5() : SeventhSlide ? slideBack6() : "w-0" }} className="back w-auto">
                        <button className="w-10 h-10 p-1 flex justify-center items-center rounded-full border bg-gray-200 text-white hover:scale-105 transition-all duration-700">
                            <img src={backArrow} className="w-7 rotate-90" alt="backArrow" />
                        </button>
                    </div>
                    <div className="progressBar  transition-all duration-100 w-4/5 border shadow-cardShadow  bg-white h-4 rounded-lg overflow-hidden  ">
                        <div className={`bar ${firstSlide ? "wp-1 " : secondSlide ? "wp-2" : ThirdSlide ? "wp-3" : FourthSlide ? "wp-4" : FifthSlide ? "wp-5" : SixthSlide ? "wp-6" : "w-0"} h-full bg-mainBlue`}></div>
                    </div>

                    <div className="QNumber text-xl w-1/5 md:w-auto">
                        <span>  {firstSlide ? " 1 " : secondSlide ? "2" : ThirdSlide ? "3" : FourthSlide ? "4" : FifthSlide ? "5" : SixthSlide ? "6" : "w-0"} </span> / 6
                    </div>
                </div>


                <div className="questions mt-3 md:mt-7">

                    {firstSlide &&
                        <div className="firstSlide slide">
                            <h2> <strong> Select your gender </strong> </h2>

                            <div className="answer my-7 mx-7 ">

                                <div className="checkbox-wrapper gender">

                                    <div className="male flex">
                                        <input type="radio" name="gender" className="check" id="male" value="male" ref={genderRef} />
                                        <label htmlFor="male" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span> Male </span>
                                        </label>
                                    </div>

                                    <div className="hidden">
                                        <input type="radio" name="gender" className="check" id="" />
                                        <label htmlFor="" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <span> </span>
                                        </label>
                                    </div>

                                    <div className="female flex mt-3 md:mt-7">
                                        <input type="radio" name="gender" className="check" id="female" value="female" ref={genderRef} />
                                        <label htmlFor="female" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span> Female </span>
                                        </label>
                                    </div>
                                </div>

                            </div>

                            <div className="continue mt-5">
                                <button onClick={() => { SlideForward1() }} className="w-full flex justify-center items-center py-2 mt-3 text-2xl lg:text-xl font-bold rounded-lg"> <span> Next </span> </button>
                            </div>
                        </div>
                    }


                    {secondSlide &&
                        <div className="secondSlide slide">
                            <h2> <strong> What are your main health and fitness goals? </strong> </h2>

                            <div className="answer lg:my-7 lg:mx-7 ">

                                <div className="checkbox-wrapper w-full flex justify-between items-center flex-wrap">

                                    <div className="Build flex w-1/2 mt-3 md:mt-7">
                                        <input type="checkbox" name="secondSlide" value="Muscle building" className="check" id="Build" />
                                        <label htmlFor="Build" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span> Muscle building </span>
                                        </label>
                                    </div>

                                    <div className="Burn flex w-1/2 mt-3 md:mt-7">
                                        <input type="checkbox" name="secondSlide" value="Fat burning" className="check" id="Burn" />
                                        <label htmlFor="Burn" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span> Fat burning </span>
                                        </label>
                                    </div>

                                    <div className="health flex w-1/2 mt-3 md:mt-7">
                                        <input type="checkbox" name="secondSlide" value="Improving physical fitness" className="check" id="health" />
                                        <label htmlFor="health" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span> Improving physical fitness </span>
                                        </label>
                                    </div>

                                    <div className="ability flex w-1/2 mt-3 md:mt-7">
                                        <input type="checkbox" name="secondSlide" value="Increasing endurance" className="check" id="ability" />
                                        <label htmlFor="ability" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span> Increasing endurance </span>
                                        </label>
                                    </div>

                                    <div className="mental flex w-1/2 mt-3 md:mt-7">
                                        <input type="checkbox" name="secondSlide" value="Enhancing mental strength" className="check" id="mental" />
                                        <label htmlFor="mental" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span> Enhancing mental strength </span>
                                        </label>
                                    </div>

                                    <div className="stress flex w-1/2 mt-3 md:mt-7">
                                        <input type="checkbox" name="secondSlide" value="Reducing stress" className="check" id="stress" />
                                        <label htmlFor="stress" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span> Reducing stress </span>
                                        </label>
                                    </div>

                                    <div className="nutrition flex w-1/2 mt-3 md:mt-7">
                                        <input type="checkbox" name="secondSlide" value="Improving nutrition" className="check" id="nutrition" />
                                        <label htmlFor="nutrition" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span> Improving nutrition </span>
                                        </label>
                                    </div>
                                </div>

                            </div>

                            <div className="continue mt-5">
                                <button onClick={() => { SlideForward2() }} className="w-full flex justify-center items-center py-2 mt-3 text-2xl lg:text-xl font-bold rounded-lg"> <span> Next </span> </button>
                            </div>
                        </div>
                    }



                    {ThirdSlide &&
                        <div className="secondSlide slide">
                            <h2> <strong> What is your age? </strong> </h2>

                            <div className="answer my-7 mx-7 ">

                                <div className="checkbox-wrapper">

                                    <div className="20 flex">
                                        <input type="radio" name="gender" value={"< 20"} className="check" id="20" />
                                        <label htmlFor="20" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span> {"< 20"} </span>
                                        </label>
                                    </div>

                                    <div className="twenty9 flex mt-3 md:mt-7">
                                        <input type="radio" name="gender" value={"20 - 29"} className="check" id="29" />
                                        <label htmlFor="29" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span>  20 - 29  </span>
                                        </label>
                                    </div>

                                    <div className="thirty flex mt-3 md:mt-7">
                                        <input type="radio" name="gender" value={"30 - 39"} className="check" id="30" />
                                        <label htmlFor="30" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span>  30 - 39   </span>
                                        </label>
                                    </div>

                                    <div className="forty flex mt-3 md:mt-7">
                                        <input type="radio" name="gender" value={"40 - 49"} className="check" id="40" />
                                        <label htmlFor="40" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span>  40 - 49   </span>
                                        </label>
                                    </div>

                                    <div className="fifty flex mt-3 md:mt-7">
                                        <input type="radio" name="gender" value={"+50"} className="check" id="50" />
                                        <label htmlFor="50" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span>  +50   </span>
                                        </label>
                                    </div>

                                </div>

                            </div>

                            <div className="continue mt-5">
                                <button onClick={() => { SlideForward3() }} className="w-full flex justify-center items-center py-2 mt-3  text-2xl lg:text-xl font-bold rounded-lg"> <span> Next </span> </button>
                            </div>
                        </div>
                    }


                    {FourthSlide &&
                        <div className="secondSlide slide">
                            <h2> <strong> What best describes your current relationship with physical fitness? </strong> </h2>

                            <div className="answer my-7 mx-7 ">

                                <div className="checkbox-wrapper">

                                    <div className="routine flex">
                                        <input type="radio" name="routine" value="I need help maintaining a routine" className="check" id="routine" />
                                        <label htmlFor="routine" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span> I need help maintaining a routine </span>
                                        </label>
                                    </div>


                                    <div className="regular flex mt-3 md:mt-7">
                                        <input type="radio" name="routine" value="I exercise regularly because it's beneficial to my health" className="check" id="regular" />
                                        <label htmlFor="regular" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span> I exercise regularly because it's beneficial to my health </span>
                                        </label>
                                    </div>


                                    <div className="develope flex mt-3 md:mt-7">
                                        <input type="radio" name="routine" value="I enjoy exercising for personal development and meeting others" className="check" id="develope" />
                                        <label htmlFor="develope" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span>  I enjoy exercising for personal development and meeting others   </span>
                                        </label>
                                    </div>

                                    <div className="pro flex mt-3 md:mt-7">
                                        <input type="radio" name="routine" value="I am an athlete aiming for excellence" className="check" id="pro" />
                                        <label htmlFor="pro" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span>  I am an athlete aiming for excellence   </span>
                                        </label>
                                    </div>

                                </div>

                            </div>


                            <div className="continue mt-5">
                                <button onClick={() => { SlideForward4() }} className="w-full flex justify-center items-center py-2 mt-3  text-2xl lg:text-xl font-bold rounded-lg"> <span> Next </span> </button>
                            </div>
                        </div>
                    }


                    {FifthSlide &&
                        <div className="FifthSlide slide">
                            <h2> <strong> How would you like to achieve your health and fitness goals? </strong> </h2>


                            <div className="answer my-7 mx-7 ">

                                <div className="checkbox-wrapper">

                                    <div className="bodyW flex">
                                        <input type="checkbox" name="goal" value="Body weight" className="check" id="bodyW" />
                                        <label htmlFor="bodyW" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span> Body weight
                                                (Just need a training mat) </span>
                                        </label>
                                    </div>


                                    <div className="Running flex mt-3 md:mt-7">
                                        <input type="checkbox" name="goal" value="Running" className="check" id="Running" />
                                        <label htmlFor="Running" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span> Running
                                                (No equipment needed) </span>
                                        </label>
                                    </div>


                                    <div className="Kettlebell flex mt-3 md:mt-7">
                                        <input type="checkbox" name="goal" value="Kettlebell" className="check" id="Kettlebell" />
                                        <label htmlFor="Kettlebell" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span> Kettlebell
                                                (Any weight suits) </span>
                                        </label>
                                    </div>

                                    <div className="dumbbell flex mt-3 md:mt-7">
                                        <input type="checkbox" name="goal" value="Dumbbell" className="check" id="dumbbell" />
                                        <label htmlFor="dumbbell" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span> Dumbbell
                                                (One is enough - Any weight suits you) </span>
                                        </label>
                                    </div>

                                    <div className="barbell flex mt-3 md:mt-7">
                                        <input type="checkbox" name="goal" value="Barbell" className="check" id="barbell" />
                                        <label htmlFor="barbell" className={`label ${WrongData ? "wrong" : ""}`}>
                                            <svg width="45" height="45" viewBox="0 0 95 95">
                                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                                <g transform="translate(0,-952.36222)">
                                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                                </g>
                                            </svg>
                                            <span> Barbell
                                                (Bench, rack, and a wide range of weights) </span>
                                        </label>
                                    </div>

                                </div>

                            </div>


                            <div className="continue mt-5">
                                <button onClick={() => { SlideForward5() }} className="w-full flex justify-center items-center py-2 mt-3  text-2xl lg:text-xl font-bold rounded-lg"> <span> Next </span> </button>
                            </div>
                        </div>
                    }


                    {SixthSlide &&
                        <div className="SixthSlide slide">
                            <h2> <strong> Provide your trainer with some final details </strong> </h2>


                            <div className="answer my-7 mx-7 ">


                                {WrongData &&
                                    <motion.div
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                        className="warning text-mainRed text-center font-bold py-2 opacity-0 text-xl">
                                        <p> Please enter valid data </p>
                                    </motion.div>
                                }

                                <div className="wrapper">

                                    <div className={`label ${WrongData ? "wrong" : ""} formField`} >
                                        <input required="" type="number" />
                                        <span> Weight: KG</span>
                                        <span className="first"> </span>
                                    </div>

                                    <div className={`label ${WrongData ? "wrong" : ""} formField`}>
                                        <input required="" type="number" />
                                        <span> Height: cm </span>
                                        <span className="first"> </span>
                                    </div>
                                </div>

                            </div>
                            <div className="continue mt-5">
                                <button onClick={Finish} className="w-full flex justify-center items-center py-2 mt-3  text-2xl lg:text-xl font-bold rounded-lg"> <span> Finish </span> </button>
                            </div>
                        </div>
                    }

                </div>

            </div>


        </div>
    )
}
