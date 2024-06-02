import SubscribeBtn from "../SubscribeBtn/SubscribeBtn";
import MoneyBackImg from "../../assets/moneyBack.webp"
import "./MoneyBackStyle.scss"


export default function MoneyBack() {
    return (
        <div id="MoneyBack" className="py-7 overflow-hidden">
        
        
        <div className="container px-10 lg:px-28">

            <div className="img flex justify-center">
                <img src={MoneyBackImg} className="w-56" alt="MoneyBack" />
            </div>
    
            <div className="title my-7">
                <h2>  
                    <strong> لا توجد اي مخاطرة لأن لديك 30 يوم ضمان لاسترجاع أموالك بالكامل مع الاحتفاظ بالهدايا ! </strong>
                </h2>
            </div>


            <p className="my-5" > 
                <strong>
                    لأننا نضمن جودة هذه الدورة، نمنح جميع المتدربين شهادة معتمدة ضمان لاسترداد الأموال بالكامل مع الاحتفاظ بجميع الهدايا التي تقدر قيمتها بأكثر من 1000$ في حالة عدم وجود اي شيئ من المذكورة في هذه الصفحة 
                </strong> 
            </p>
    
    
            
            <div className="SubBtn mt-10 flex justify-center px-7">
                <SubscribeBtn headLine=" اريد الاشتراك والاستمتاع بهذا الضمان  "  />
            </div>
    
    
    
    
        
    
    
    
        </div>
        
        
        </div>
    )
}
