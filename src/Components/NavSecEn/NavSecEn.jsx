import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import close from "../../assets/close1.svg"
import logo from "../../assets/Logo3.png"


export default function NavSecEn() {

    const [nav, setNav] = useState(false)

    return <>

        <div className=" navForm dir-ltr bg-mainBlue text-white py-2 px-4  w-full  shadow-cardShadow sticky z-20 top-0">
            <div className="container flex justify-between items-center">
                <div className="logo ">
                    <Link to={"/En"} className="flex items-center gap-3">
                        <img src={logo} className="w-28" alt="logo" />
                    </Link>
                </div>
                <div className="Navbar flex items-center">

                    <ul className="items-center justify-center gap-7 hidden lg:flex">
                        <li><Link to={"/En"} className="transition-all duration-300 hover:text-mainRed font-bold">Programs</Link></li>
                        <li><Link to={"/En"} className="transition-all duration-300 hover:text-mainRed font-bold">Transformations</Link></li>
                        <li><Link to={"/En"} className="transition-all duration-300 hover:text-mainRed font-bold"> Reviews</Link></li>
                        <li><Link to={"/En"} className="transition-all duration-300 hover:text-mainRed font-bold">Team</Link></li>
                        <li><Link to={"/En"} className="transition-all duration-300 hover:text-mainRed font-bold">Subscribe</Link></li>
                        <li><Link to={"/En"} className="transition-all duration-300 hover:text-mainRed font-bold"> Partners</Link></li>
                    </ul>

                    <div className="btn w-full lg:w-auto mx-3">
                        <a href="#">
                            <button className="bg-mainRed text-white px-4 py-3 text-sm lg:text-base rounded-lg h-full w-full transition-colors duration-300 hover:bg-red-700">Join Now</button>
                        </a>
                    </div>


                    <label className="menuee block lg:hidden" htmlFor="burger">
                        <input onClick={() => setNav(!nav)} type="checkbox" id="burger" className={`${nav == true ? "checked" : ""}  `} />
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>

                    <div className="en text-white text-xl font-bold ml-3 cursor-pointer transition-all duration-300 hover:text-mainRed">
                        <Link to={"/"}> عربي </Link>
                    </div>

                </div>
            </div>
        </div>


        <AnimatePresence>
            {nav &&

                <motion.ul
                    initial={{
                        x: -200
                    }}
                    animate={{ x: 0 }}
                    transition={{ ease: "linear", duration: 0.2 }}
                    exit={{
                        x: -200
                    }}
                    className="flex items-center justify-start pt-24 text-xl flex-col bg-white text-black w-5/6 h-full  gap-7 fixed top-0 left-0 z-50 shadow-cardShadow  ">

                    <img onClick={() => setNav(!nav)} width="40" height="40" src={close} className="close absolute top-5 right-5 cursor-pointer border p-1 rounded transition-colors bg-black hover:bg-mainRed  " alt="close" />

                    <li className="text-center"> <Link to={"/En"} className="transition-all duration-300 hover:text-mainRed font-bold " > Home </Link> </li>
                    <li className="text-center"> <Link to={"/En"} className="transition-all duration-300 hover:text-mainRed font-bold " > Why Us </Link> </li>
                    <li className="text-center"> <Link to={"/En"} className="transition-all duration-300 hover:text-mainRed font-bold " > Programs </Link> </li>
                    <li className="text-center"> <Link to={"/En"} className="transition-all duration-300 hover:text-mainRed font-bold " > Transformations </Link> </li>
                    <li className="text-center"> <Link to={"/En"} className="transition-all duration-300 hover:text-mainRed font-bold " >  Reviews </Link> </li>
                    <li className="text-center"> <Link to={"/En"} className="transition-all duration-300 hover:text-mainRed font-bold " > Team </Link> </li>
                    <li className="text-center"> <Link to={"/En"} className="transition-all duration-300 hover:text-mainRed font-bold " >  Gifts </Link> </li>
                    <li className="text-center"> <Link to={"/En"} className="transition-all duration-300 hover:text-mainRed font-bold " >  plans </Link> </li>
                    <li className="text-center"> <Link to={"/En"} className="transition-all duration-300 hover:text-mainRed font-bold " >  Partners </Link> </li>
                    <li className="text-center"> <Link to={"/En"} className="transition-all duration-300 hover:text-mainRed font-bold " > Frequently Asked Questions  </Link> </li>
                    <li className="text-center"> <Link to={"/"} className="transition-all duration-300 hover:text-mainRed font-bold" > عربي</Link> </li>

                </motion.ul>
            }
        </AnimatePresence>

    </>
}
