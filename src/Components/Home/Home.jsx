import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Gifts from "../Gifts/Gifts";
import Hero from "../Hero/Hero";
import Instructors from "../Instructors/Instructors";
import MoneyGuarantee from "../MoneyGuarantee/MoneyGuarantee";
import Partners from "../Partners/Partners";
import Questions from "../Questions/Questions";
import QuestionsFooter from "../QuestionsFooter/QuestionsFooter";
import Samples from "../Samples/Samples";
import Transformation from "../Transformation/Transformation";
import WhyUs from "../WhyUs/WhyUs";
import TrainingProgram from "../trainingProgram/TrainingProgram";
import Navbar from "./Navbar/Navbar";
import StarterQ from "../StarterQ/StarterQ";
import WhoGR7 from "../WhoGR7/WhoGR7";
import Plans from "../ChoosePlan/Plans";

export default function Home() {


    const [isDone, setIsDone] = useState("")



    function handleDone() {
        localStorage.setItem("quiz_done", true)
        setIsDone(true)
    }


    useEffect(() => {

        if (localStorage.getItem("quiz_done")) {
            setIsDone(true)
        }

    }, [])


    return <>

        {!localStorage.getItem("quiz_done") &&


            !isDone ? <StarterQ done={handleDone} /> : ""
        }


        {isDone &&
            <>
                <Navbar />
                <Hero />
                <WhoGR7 />
                <Questions />
                <WhyUs />
                <TrainingProgram />
                <Transformation />
                <Samples />
                <Instructors />
                <Gifts />
                <Plans />
                <MoneyGuarantee />
                <Partners />
                <QuestionsFooter />
                <Footer />
            </>
        }

    </>

}
