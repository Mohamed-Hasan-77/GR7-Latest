import "./WeHelpYouStyle.scss"

import vegSalad from "../../assets/Vegetables-Salad.webp"
import report from "../../assets/NutritionReport.webp"
import fat from "../../assets/Fat.webp"
import ProteinPowder from "../../assets/ProteinPowder.webp"
import Calories from "../../assets/Calories.webp"
import Vitamin from "../../assets/Vitamin.webp"
import SubscribeBtn from "../SubscribeBtn/SubscribeBtn"



export default function WeHelpYou() {
  return (
    <div id="WeHelpYou" className="py-7 overflow-hidden">
        
        
    <div className="container">

        <div className="title my-7">
            <h2>  كيف سنساعدك على تعلم التغذية في أسرع وقت ؟ </h2>

            <p>   من خلال الفيديوهات والمحتوى المكتوب للمحاضرات سوف تتمكن من تعلم كيفية تصميم نظام غذائي احترافي لأي متدرب لديك لمساعدته في الوصول لهدفه الصحي في أسرع وقت 🔥     </p>
        </div>


        <div className="QBoxes flex justify-between flex-wrap ">
            
            <div className="wrapperBox p-5 py-8 md:p-10 md:py-10  w-full lg:w-1/2 xl:w-1/3  ">
                <div className="box  p-7 px-10 rounded-2xl shadow-cardShadow bg-white relative pt-7 text-center">

                    <div className="img absolute -top-9 ">
                        <img src={vegSalad} alt="Vegetables" />
                    </div>
                    <h3 className="my-5"> الجزأ الأول : تعلم الأساسيات  </h3>
                    <p> ستتعلم أساسيات علم التغذية والمقصود بالنظام الغذائي والسعرات الحرارية وستتعلم أكثر عن النشويات والبروتين والدهون و الألياف وستتتعلم كيف تحدد الكمية المطلوبة من كل عنصر . </p>
                </div>
            </div>

            <div className="wrapperBox p-5 py-8 md:p-10 md:py-10  w-full lg:w-1/2 xl:w-1/3  ">
                <div className="box  p-7 px-10 rounded-2xl shadow-cardShadow bg-white relative pt-7 text-center">

                    <div className="img absolute -top-9 ">
                        <img src={report} alt="Vegetables" />
                    </div>
                    <h3 className="my-5"> الجزأ الثاني :  بدأ التصميم </h3>
                    <p> ستتعلم كيف  تصمم برنامج غذائي بأكثر من طريقة  </p>
                    <p className="mt-3"> وستتعلم كيف  تصمم برنامج غذائي بشكل كامل باستخدام الهاتف فقط. </p>
                </div>
            </div>


            <div className="wrapperBox p-5 py-8 md:p-10 md:py-10  w-full lg:w-1/2 xl:w-1/3  ">
                <div className="box  p-7 px-10 rounded-2xl shadow-cardShadow bg-white relative pt-7 text-center">

                    <div className="img absolute -top-9 ">
                        <img src={fat} alt="Vegetables" />
                    </div>
                    <h3 className="my-5"> الجزأ الثالث :  قياس التغير </h3>
                    <p> ستتعلم كيف تقيس مقدار التغير الذي يحصل  للجسم بشكل علمي وحقيقي ٫ وستتعرف على أحدث الطرق المتبعة حاليا لقياس محتويات الجسم من دهون وعضلات ونسبة ماء </p>
                </div>
            </div>

            <div className="wrapperBox p-5 py-8 md:p-10 md:py-10  w-full lg:w-1/2 xl:w-1/3  ">
                <div className="box  p-7 px-10 rounded-2xl shadow-cardShadow bg-white relative pt-7 text-center">

                    <div className="img absolute -top-9 ">
                        <img src={ProteinPowder} alt="Vegetables" />
                    </div>
                    <h3 className="my-5"> الجزأ الرابع :  المكملات الغذائية </h3>
                    <p>ستتعلم أهم المكملات الغذائية والفئات التي تحتاج لها. كما سوف تتعلم ما هي الجرعات المناسبة من كل مكمل غذائي والبدائل الطبيعية لكل مكمل . </p>
                </div>
            </div>

            <div className="wrapperBox p-5 py-8 md:p-10 md:py-10  w-full lg:w-1/2 xl:w-1/3  ">
                <div className="box  p-7 px-10 rounded-2xl shadow-cardShadow bg-white relative pt-7 text-center">

                    <div className="img absolute -top-9 ">
                        <img src={Calories} alt="Vegetables" />
                    </div>
                    <h3 className="my-5"> الجزأ الخامس :  شرح الأنظمة الغذائية المختلفة </h3>
                    <p> ستتعلم ما هي الانظمة الغذائية الغذائية المختلفة وستتعلم كيف تختار النظام الغذائي المناسب لعميلك ليتناسب مع نمط حياته وليحقق له أكبر استفادة ممكنة دون الشعور بالملل او الاحباط . </p>
                </div>
            </div>


            <div className="wrapperBox p-5 py-8 md:p-10 md:py-10  w-full lg:w-1/2 xl:w-1/3  ">
                <div className="box  p-7 px-10 rounded-2xl shadow-cardShadow bg-white relative pt-7 text-center">

                    <div className="img absolute -top-9 ">
                        <img src={Vitamin} alt="Vegetables" />
                    </div>
                    <h3 className="my-5"> الجزأ السادس :  الفيتامينات والمعادن </h3>
                    <p> ستتعلم الأقسام المختلفة للفيتامينات و للمعادن و أهم المصادر والفوائد لكل فيتامين ولكل معدن على حدى . </p>
                </div>
            </div>
        </div>


        <div className="SubBtn my-7 flex justify-center">
            <SubscribeBtn headLine="اشترك الان "  p="لا تضيع فرصة تغير حياتك من بين يديك"/>
        </div>


    </div>
    
    
</div>
)
}
