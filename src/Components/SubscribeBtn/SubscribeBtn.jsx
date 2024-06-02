import { useEffect } from "react";
import { Link } from "react-router-dom";


import arrowRight from "../../assets/arrow-left-svgrepo-com (1).svg"
import arrowLeft from "../../assets/arrow-right-svgrepo-com (1).svg"

export default function SubscribeBtn({ headLine, p, arrow }) {


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
                        block: 'start' // Adjust as needed, e.g., 'center', 'end'
                    });
                }
            });
        });
    }, [])
    return (

        <a href="#" data-scroll-to="ChoosePlan">
            <button className='p-4 px-10 bg-mainBlue flex flex-col justify-center items-center text-white shadow-cardShadow rounded'>
                <span className="mb-2 text-xl lg:text-3xl flex items-center gap-3 "> {arrow && <img src={arrowRight} className="h-10"></img>}  {headLine} {arrow && <img src={arrowLeft} className="h-10"></img>}  </span>
                <span> {p} </span>
            </button>
        </a>

    )
}
