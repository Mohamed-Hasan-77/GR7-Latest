import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";

export default function CountDown({ TimeColor, textColor, fs, justify }) {

    const { t } = useTranslation();


    const duration = 20 * 60 * 60 * 1000;

    const [time, setTime] = useState(duration)


    const timeFormat = (milliSeconds) => {
        let seconds = parseInt(Math.floor(milliSeconds / 1000));
        let minutes = parseInt(Math.floor(seconds / 60));
        let hours = parseInt(Math.floor(minutes / 60));
        let days = parseInt(Math.floor(hours / 24))


        let Tseconds = parseInt(seconds % 60);
        let Tminutes = parseInt(minutes % 60);
        let Thours = parseInt(hours % 24);


        let theTime = {
            sec: Tseconds,
            min: Tminutes,
            hour: Thours,
            day: days
        }

        return theTime
    }


    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000)
        }, 1000)
    }, [time])

    return <>



        <div className={`countDown  flex ${justify}   items-center gap-3  lg:flex-nowrap w-full lg:w-2/5  ${TimeColor} `}>
            <div className={`sec flex flex-col justify-center items-center   ${fs} `}>
                <span className="font-bold"> {timeFormat(time).sec} </span>
                <span className={` ${textColor} `} > {t("Seconds")}  </span>
            </div>

            :

            <div className={`min flex flex-col justify-center items-center  ${fs}`}>
                <span className="font-bold"> {timeFormat(time).min} </span>
                <span className={` ${textColor} `}> {t("Minutes")}  </span>
            </div>

            :

            <div className={`hour flex flex-col justify-center items-center  $ ${fs}`} >
                <span className="font-bold"> {timeFormat(time).hour} </span>
                <span className={` ${textColor}`}> {t("Hours")}  </span>
            </div>
        </div>


    </>

}
