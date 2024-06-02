import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./TransformationStyle.scss"


import AbdallahBefore from "../../assets/transformations/عبدالله/1.jpeg"
import AbdallahAfter from "../../assets/transformations/عبدالله/22.jpeg"

import HossamBefore from "../../assets/transformations/حسام/before.jpeg"
import HossamAfter from "../../assets/transformations/حسام/after.jpeg"


import EslamBefore from "../../assets/transformations/اسلام/before.jpeg"
import EslamAfter from "../../assets/transformations/اسلام/after.jpeg"

import HeshamBefore from "../../assets/transformations/محمد هشام/before.jpeg"
import HeshamAfter from "../../assets/transformations/محمد هشام/after.jpeg"

import RefaeyBefore from "../../assets/transformations/محمد الرفاعي/before.jpg"
import RefaeyAfter from "../../assets/transformations/محمد الرفاعي/after.jpeg"

import captinMahmoudBefore from "../../assets/transformations/Show كابتن محمود/before.jpg"
import captinMahmoudAfter from "../../assets/transformations/Show كابتن محمود/after.jpeg"

import AhmedAshrafBefore from "../../assets/transformations/Show مهندس احمد اشرف/before.jpeg"
import AhmedAshrafAfter from "../../assets/transformations/Show مهندس احمد اشرف/after.jpeg"

import SayedBefore from "../../assets/transformations/سيد عبدالعليم/before.jpeg"
import SayedAfter from "../../assets/transformations/سيد عبدالعليم/after.jpeg"

import NaserBefore from "../../assets/transformations/ناصر البحراوي/before.jpeg"
import NaserAfter from "../../assets/transformations/ناصر البحراوي/after.jpeg"

import KhaledBefore from "../../assets/transformations/خالد بدانا/before.jpeg"
import KhaledAfter from "../../assets/transformations/خالد بدانا/after.jpeg"

import MAhmedBefore from "../../assets/transformations/محمد-احمد/before.jpeg"
import MAhmedAfter from "../../assets/transformations/محمد-احمد/after.jpeg"

import MMahmoudBefore from "../../assets/transformations/استاذ محمد محمود/before.jpeg"
import MMahmoudAfter from "../../assets/transformations/استاذ محمد محمود/after.jpg"

import MBayomyBefore from "../../assets/transformations/زياده/before.jpeg"
import MBayomyAfter from "../../assets/transformations/زياده/after.jpeg"

import MTurkeyBefore from "../../assets/transformations/محمد التركي/before.jpeg"
import MTurkeyAfter from "../../assets/transformations/محمد التركي/after.jpeg"
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";

function TransformationSlider() {


    const { t } = useTranslation();
    const { language } = useLanguage();


    const settings = {
        infinite: true,
        dots: true,
        speed: 200,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const sliderData = [
        {
            name: " عبدالله  ",
            before: AbdallahBefore,
            after: AbdallahAfter,
            description: ` بدأنا مع بعض من 115 كيلو بالتمرين من 3 - 4 أيام بالأسبوع والتزامه بالنظام الغذائي والتمارين وصل ل 90 كيلو بزيادة كتلة عضلية كبيرة جدا `,
        },
        {
            name: " حسام غنام  ",
            before: HossamBefore,
            after: HossamAfter,
            description: ` دكتور صيدلي وزنه كان 95 كيلو بحكم دراسته مكانش بيتحرك كتير وكان بيعاني من شكل جسمه وكان مأثر علي نفسيته ومع بعض والتزامه قدر يوصل لأقل نسبة دهون وزيادة عضلية في 3 شهور  `,
        },
        {
            name: " اسلام  ",
            before: EslamBefore,
            after: EslamAfter,
            description: ` 30 سنة 
            محاسب في السعودية ، عدد ساعات العمل 12 ساعة باليوم ومع ذلك ملتزم بالتمارين والدايت وقرر يوصل لهدفه خلال 3 شهور وأقل من ذلك `,
        },
        {
            name: " محمد هشام  ",
            before: HeshamBefore,
            after: HeshamAfter,
            description: ` لاعب كيك بوكس كان بيعاني من النحافة وهدفه كان إنه يزيد كتلة عضلية وقوة تناسب الرياضة التي يمارسها وقدرنا مع بعض نوصل لحلمه  `,
        },
        {
            name: " محمد الرفاعي  ",
            before: RefaeyBefore,
            after: RefaeyAfter,
            description: ` هدفه من البداية كان التنشيف واشتغلنا علي الهدف دا بأننا دايت مناسب بحيث يوصل لهدفه ويزيد كتلة عضلية ومع الوقت عملنا نتيجة ممتازة `,
        },
        {
            name: " كابتن محمود  ",
            before: captinMahmoudBefore,
            after: captinMahmoudAfter,
            description: ` بدايته كانت بعد فترة الجيش وقتها نسبة الدهون كانت زايدة شويه وسلكن مع التزام قوي منه قدرنا في شهرين بس نوصل لأقل نسبة دهون مع زيادة قوية في الكتلة العضلية  `,
        },
        {
            name: " محمد التركي  ",
            before: MTurkeyBefore,
            after: MTurkeyAfter,
            description: ` في البدايه كانت نسبة الدهون زايده شويه 
            و كمان في نقاط ضعف في شكل الكتف و الدراع 
            و مع الالتزام على البرنامج قدرنا نزود الكتلة العضلية 
            و ننزل نسبة الدهون مع تطور في شكل الدراع و الكتف `,
        },
        {
            name: " م. أحمد أشرف  ",
            before: AhmedAshrafBefore,
            after: AhmedAshrafAfter,
            description: ` بدأ معانا وهو وزنه 122 كيلو ومع الوقت نزل 93 كيلو مع زيادة في الكتلة العضلية وزيادة أوزانه في التمرين  `,
        },
        {
            name: " سيد عبدالعليم   ",
            before: SayedBefore,
            after: SayedAfter,
            description: ` في البداية كان بيعاني من نحافة شديدة وإنحناء في الأكتاف ومع المتابعة علي الدايت والتمرين والإلتزام الشديد منه علي تعليمات دكتور العلاج الطبيعي عمل تحول قوي جدا `,
        },
        {
            name: " ناصر البحراوي   ",
            before: NaserBefore,
            after: NaserAfter,
            description: ` بدأنا معاه ومشكلته كانت النحافة الشديدة وقدرنا في فترة زمنية بسيطة نعيد له ثقته في نفسه بالقضاء علي النحافة وزيادة كبيرة في الكتلة العضلية  `,
        },
        {
            name: "  خالد ",
            before: KhaledBefore,
            after: KhaledAfter,
            description: ` بدأنا معاه وهو 120 كيلو وبالإلتزام الشديد منه في الاكل والتمرين قدر ينزل 30 كيلو في فترة قليلة جدا وقدر يغير شكله وحياته الشخصية 180 درجة `,
        },
        {
            name: " كابتن محمد أحمد  ",
            before: MAhmedBefore,
            after: MAhmedAfter,
            description: ` في البداية نسبة العضلات كانت قليلة وكان معا نريد كتلة عضلية صافية وفي خلال 6 أسابيع عملنا النتيجة القوية  `,
        },
        {
            name: " أستاذ محمد محمود  ",
            before: MMahmoudBefore,
            after: MMahmoudAfter,
            description: ` بدأ معانا في شهر رمضان وكانت نسبة الدهون عالية وقدر ينزل 8 كيلو في أول شهر وقدرنا نزود الكتلة العضلية بشكل ملحوظ `,
        },
        {
            name: " محمد بيومي  ",
            before: MBayomyBefore,
            after: MBayomyAfter,
            description: ` كان بيعاني من نحافة شديدة وكان وزنه 55 كيلو وقدرنا في شهرين ونصف وزنه يزيد 10 كيلو `,
        },


    ]



    const sliderDataEn = [
        {
            name: "Abdullah",
            before: AbdallahBefore,
            after: AbdallahAfter,
            description: "We started together at 115 kilograms, exercising 3-4 days a week, and following a diet plan. He reached 90 kilograms with a significant increase in muscle mass.",
        },
        {
            name: "Hossam Ghanam",
            before: HossamBefore,
            after: HossamAfter,
            description: "A pharmacist whose weight was 95 kilograms due to his sedentary lifestyle during his studies. He suffered from his body shape, affecting his self-esteem. With commitment and dedication, he achieved his goal of reducing body fat and gaining muscle in 3 months.",
        },
        {
            name: "Islam",
            before: EslamBefore,
            after: EslamAfter,
            description: "Islam, 30 years old, an accountant in Saudi Arabia, works 12 hours a day. Despite his busy schedule, he remained committed to exercise and diet, achieving his goal in less than 3 months.",
        },
        {
            name: "Mohamed Hisham",
            before: HeshamBefore,
            after: HeshamAfter,
            description: "A kickboxing player who struggled with thinness. His goal was to increase muscle mass and strength suitable for his sport. Together, we achieved his dream.",
        },
        {
            name: "Mohamed El Refaey",
            before: RefaeyBefore,
            after: RefaeyAfter,
            description: "His initial goal was cutting. We worked on a suitable diet plan to reach his goal while increasing muscle mass. With time, we achieved excellent results.",
        },
        {
            name: "Captain Mahmoud",
            before: captinMahmoudBefore,
            after: captinMahmoudAfter,
            description: "After his military service, he had a slightly high body fat percentage. With strong commitment, we managed to reach the lowest body fat percentage and a strong increase in muscle mass within two months.",
        },
        {
            name: "Mohammed Al-Turki",
            before: MTurkeyBefore,
            after: MTurkeyAfter,
            description: `At first, there was a slight excess of fat percentage,
            and also some weaknesses in the shape of the shoulder and arm.
            With commitment to the program, we were able to increase muscle mass
            and decrease fat percentage with improvement in the shape of the arm and shoulder.`,
        },
        {
            name: "Eng Ahmed Ashraf",
            before: AhmedAshrafBefore,
            after: AhmedAshrafAfter,
            description: "He started with us weighing 122 kilograms. Over time, he lost 29 kilograms with an increase in muscle mass and weights during training.",
        },
        {
            name: "Sayed Abdel Aleem",
            before: SayedBefore,
            after: SayedAfter,
            description: "Initially, he suffered from severe thinness and shoulder curvature. With continuous diet and exercise and his strong commitment to the instructions of the physiotherapist, he underwent a very strong transformation.",
        },
        {
            name: "Naser El Bahrawy",
            before: NaserBefore,
            after: NaserAfter,
            description: "We started with him while he was suffering from severe thinness. Within a short period of time, we managed to restore his self-confidence by eliminating thinness and achieving a significant increase in muscle mass.",
        },
        {
            name: "Khaled",
            before: KhaledBefore,
            after: KhaledAfter,
            description: "We started with him at 120 kilograms. With his strong commitment to diet and exercise, he managed to lose 30 kilograms in a very short period and changed his appearance and personal life 180 degrees.",
        },
        {
            name: "Captain Mohamed Ahmed",
            before: MAhmedBefore,
            after: MAhmedAfter,
            description: "Initially, his muscle percentage was low, and together we aimed for a pure muscle mass. Within 6 weeks, we achieved strong results.",
        },
        {
            name: " Mohamed Mahmoud",
            before: MMahmoudBefore,
            after: MMahmoudAfter,
            description: "He started with us in Ramadan with a high body fat percentage. He managed to lose 8 kilograms in the first month, and we were able to significantly increase muscle mass.",
        },
        {
            name: "Mohamed Bayoumi",
            before: MBayomyBefore,
            after: MBayomyAfter,
            description: "He suffered from severe thinness, weighing 55 kilograms. In two and a half months, he gained 10 kilograms.",
        },
    ];

    return (
        <div className="slider-container ">
            <Slider {...settings}>


                {language === "ar" ?

                    sliderData?.map((ele, idx) => {
                        return <div key={idx} className="sliderOBox px-3  ">
                            <div className="sliderInnerBox  relative overflow-hidden   ">
                                <div className="img flex justify-center items-center">
                                    <img src={ele.before} className="h-full before w-1/2 object-cover " alt="beforeAndAfter" />
                                    <div className="imgAfter relative overflow-hidden w-1/2">
                                        <img src={ele.after} className="h-full after  object-cover " alt="beforeAndAfter" />
                                        <div className="overlayImg absolute w-full h-full left-0 top-0"></div>
                                    </div>
                                </div>

                                <div className="overCover absolute top-0 left-0 w-full h-full opacity-0">
                                    <h3 className="mb-2 "> {ele.name} </h3>
                                    <p className="my-2 "> {ele.description} </p>
                                </div>


                                <span className="beforeText absolute font-bold text-xl text-white bottom-5 left-5"> قبل </span>
                                <span className=" AfterText absolute font-bold text-xl text-white bottom-5 right-5"> بعد </span>


                            </div>
                        </div>
                    })

                    :

                    sliderDataEn?.map((ele, idx) => {
                        return <div key={idx} className="sliderOBox px-3  ">
                            <div className="sliderInnerBox  relative overflow-hidden   ">
                                <div className="img flex justify-center items-center">
                                    <img src={ele.before} className="h-full before w-1/2 object-cover " alt="beforeAndAfter" />
                                    <div className="imgAfter relative overflow-hidden w-1/2">
                                        <img src={ele.after} className="h-full after  object-cover " alt="beforeAndAfter" />
                                        <div className="overlayImg absolute w-full h-full left-0 top-0"></div>
                                    </div>
                                </div>

                                <div className="overCover absolute top-0 left-0 w-full h-full opacity-0">
                                    <h3 className="mb-2 "> {ele.name} </h3>
                                    <p className="my-2 "> {ele.description} </p>
                                </div>


                                <span className="beforeText absolute font-bold text-xl text-white bottom-5 left-5"> Before </span>
                                <span className=" AfterText absolute font-bold text-xl text-white bottom-5 right-5"> After </span>

                            </div>
                        </div>
                    })


                }










            </Slider>
        </div>
    );
}

export default TransformationSlider;