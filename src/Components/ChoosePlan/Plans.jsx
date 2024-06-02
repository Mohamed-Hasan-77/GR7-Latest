import { useLanguage } from "../../contexts/LanguageContext";
import ChoosePlan from "./choosePlanAr/ChoosePlan";
import ChoosePlanEn from "./ChoosePlanEn/ChoosePlanEn";



export default function Plans() {

    const { language } = useLanguage();

    return <>


        {language === "ar" ? <>

            <ChoosePlan />

        </> : <>

            <ChoosePlanEn />

        </>}




    </>
}
