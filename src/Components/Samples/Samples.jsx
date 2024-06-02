import "./SamplesStyle.scss"

import CountDown from "../CountDown/CountDown"

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";

import arrowRight from "../../assets/arrow-left-svgrepo-com (1).svg"
import arrowLeft from "../../assets/arrow-right-svgrepo-com (1).svg"


export default function Samples() {


    const { t } = useTranslation();
    const { language } = useLanguage();

    const sampleData = [
        {
            name: " اسلام  ",
            video: ` https://player.vimeo.com/video/939413468?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479  `,
            description: ` 30 سنة 
            محاسب في السعودية ، عدد ساعات العمل 12 ساعة باليوم ومع ذلك ملتزم بالتمارين والدايت وقرر يوصل لهدفه خلال 3 شهور وأقل من ذلك `,
        },
        {
            name: " تنجيل  ",
            video: ` https://player.vimeo.com/video/939414576?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write `,
            description: ` 45 سنة 
                مهندس بترول عدد ساعات العمل 10 ساعات باليوم ، يتمرن 3 أيام بالأسبوع ورغم ذلك ملتزم بالتمارين والدايت وقرر يوصل لحلمه في أقل فترة غير متوقعة 
            `,
        },
        {
            name: " حسام غانم  ",
            video: ` https://player.vimeo.com/video/939414622?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write `,
            description: ` دكتور صيدلي ، وزنة كان 95 كيلو بحكم دراسته مكنش بيتحرك كتير وكان بيعاني من شكل جسمه وكان مأثر علي نفسيته ومع بعض وإلتزامه الشديد قدر يوصل لأقل نسبة دهون وزيادة عضلية في 3 شهور  `,
        },
        {
            name: "  مسعود حيدر ",
            video: ` https://player.vimeo.com/video/939415542?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write `,
            description: ` 39 سنة 
            كان بيعاني من وزنة ونسبة الدهون التي كانت مأثرة علي صحته البدنية والنفسية ، وقدرنا نوصل مع بعض لهدفه الذي جعله أكثر سعادة وحيوية
            `,
        },
        {
            name: " محمد التركي  ",
            video: ` https://player.vimeo.com/video/940922142?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write `,
            description: ` في البدايه كانت نسبة الدهون زايده شويه 
            و كمان في نقاط ضعف في شكل الكتف و الدراع 
            و مع الالتزام على البرنامج قدرنا نزود الكتلة العضلية 
            و ننزل نسبة الدهون مع تطور في شكل الدراع و الكتف `,
        },
        {
            name: " أحمد أشرف   ",
            video: ` https://player.vimeo.com/video/939414947?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write `,
            description: ` مهندس بدأ وهو وزنه 122 كيلو ومعانا قدرنا نوصل الوزن ل 93 كيلو مع زيادة في الكتلة العضلية وزيادة في أوزانه في التمرين  `,
        },
        {
            name: "  محمد البيومي  ",
            video: ` https://player.vimeo.com/video/939414692?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write `,
            description: ` بدأ من شهرين ونصف وزنه كان 55 كيلو وقدرنا في الفترة الزمنية دي نوصله ل 65 كيلو ودي كانت بالفعل أول تجربة ليه في حياته وكان سعيد جدا بالنتيجة `,
        },
        {
            name: "  محمد الرفاعي ",
            video: ` https://player.vimeo.com/video/939415232?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write `,
            description: ` هدفه من البداية كان التنشيف واشتغلنا علي الهدف بأننا عملنا دايت مناسب بحيث يوصل لهدفه ويزيد كتلة عضلية ومع الوقت عملنا نتيجة ممتازة `,
        },

    ]


    const sampleDataEn = [
        {
            name: "Islam",
            video: "https://player.vimeo.com/video/939413468?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            description: `30 years old accountant in Saudi Arabia, working 12 hours a day. Despite that, he is committed to exercise and diet, aiming to reach his goal within 3 months or less.`,
        },
        {
            name: "Tanjil",
            video: "https://player.vimeo.com/video/939414576?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            description: `45 years old petroleum engineer, working 10 hours a day. He exercises 3 days a week, yet remains committed to exercise and diet, aiming to reach his dream in an unexpectedly short period.`,
        },
        {
            name: "Hossam Ghannam",
            video: "https://player.vimeo.com/video/939414622?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            description: `A pharmacist, his weight was 95 kilos due to his studies, he wasn't very active, suffering from his body shape which affected his self-esteem. With some commitment, he managed to achieve the lowest fat percentage and increase muscle mass in 3 months.`,
        },
        {
            name: "Masoud Haider",
            video: "https://player.vimeo.com/video/939415542?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            description: `39 years old, he suffered from weight and the fat percentage which affected his physical and mental health. Together, we reached his goal which made him happier and more energetic.`,
        },
        {
            name: "Mohammed Al-Turki",
            video: ` https://player.vimeo.com/video/940922142?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write `,
            description: `At first, there was a slight excess of fat percentage,
            and also some weaknesses in the shape of the shoulder and arm.
            With commitment to the program, we were able to increase muscle mass
            and decrease fat percentage with improvement in the shape of the arm and shoulder.`,
        },
        {
            name: "Ahmed Ashraf",
            video: "https://player.vimeo.com/video/939414947?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            description: `An engineer who started with a weight of 122 kilos. With us, we managed to reach a weight of 93 kilos with an increase in muscle mass and an increase in weights in training.`,
        },
        {
            name: "Mohamed Bayoumi",
            video: "https://player.vimeo.com/video/939414692?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            description: `He started two and a half months ago, his weight was 55 kilos. During this period, we managed to reach 65 kilos, which was indeed his first experience in his life, and he was very happy with the result.`,
        },
        {
            name: "Mohamed Refaey",
            video: "https://player.vimeo.com/video/939415232?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            description: `His goal from the beginning was drying. We worked on this goal by providing a suitable diet to reach his goal and increase muscle mass. With time, we achieved excellent results.`,
        },
    ];



    useEffect(() => {

        const links = document.querySelectorAll('a[data-scroll-to]');

        links.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const targetId = this.getAttribute('data-scroll-to');
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }, [])


    return (
        <div id="Samples" className="py-7 overflow-hidden bg-lightGrayBack">


            <div className="container">



                <div className="container lg:px-20 ">






                    {language === "ar" ? <>


                        {sampleData?.map((ele, idx) => {
                            return <div key={idx} className="smaplesBox bg-white shadow-cardShadow p-3 py-5  flex justify-between items-center flex-wrap mt-7  ">

                                <div className="videoSample h-60 flex justify-center md:justify-center w-full md:w-1/3  ">
                                    <iframe src={ele.video} frameBorder="0" allow={{ autoplay: 1, muted: 1, fullscreen: true, pictureInPicture: true, clipboardWrite: true }} className="w-full h-full" title="sample 1"></iframe>
                                </div>

                                <div className="text w-full md:w-2/3  text-center flex flex-col items-center">
                                    <h3 className="text-mainBlue mt-3 md:mt-0"> {ele.name} </h3>
                                    <p className="S mt-3"> {ele.description} </p>
                                </div>

                            </div>
                        })}

                    </> : <>



                        {sampleDataEn?.map((ele, idx) => {
                            return <div key={idx} className="smaplesBox bg-white shadow-cardShadow p-3 py-5  flex justify-between items-center flex-wrap mt-7  ">

                                <div className="videoSample h-60 flex justify-center md:justify-center w-full md:w-1/3  ">
                                    <iframe src={ele.video} frameBorder="0" allow={{ autoplay: 1, muted: 1, fullscreen: true, pictureInPicture: true, clipboardWrite: true }} className="w-full h-full" title="sample 1"></iframe>
                                </div>

                                <div className="text w-full md:w-2/3  text-center flex flex-col items-center">
                                    <h3 className="text-mainBlue mt-3 md:mt-0"> {ele.name} </h3>
                                    <p className="S mt-3"> {ele.description} </p>
                                </div>

                            </div>
                        })}


                    </>}



                </div>


                <div className="count flex justify-center mt-10">

                    <CountDown TimeColor="text-red-600" textColor="text-gray-400" fs="text-3xl" justify="justify-center" />

                </div>



                <div className="SubBtn my-7 flex justify-center px-7">
                    <a href="#" data-scroll-to="ChoosePlan">
                        <button className='p-4 px-10 bg-mainBlue flex flex-col justify-center items-center text-white shadow-cardShadow rounded'>
                            <span className="mb-2 text-xl lg:text-3xl flex items-center gap-3 ">  <img src={arrowRight} className="h-10"></img>   {t("subscribeNow")} <img src={arrowLeft} className="h-10"></img>  </span>
                        </button>
                    </a>
                </div>




            </div>


        </div>
    )
}
