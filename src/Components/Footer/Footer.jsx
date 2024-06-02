import { Link } from "react-router-dom";

import logo from "../../assets/Logo3.png"
import { useTranslation } from "react-i18next";

export default function Footer() {

    const { t } = useTranslation();


    return (
        <footer id="footer" className="p-12 dir-ltr text-center text-white bg-gray-950">
            <div className="logoImg flex justify-center">
                <img src={logo} className="w-32" alt="logo" />
            </div>
            <p  >
                <Link to={"/PrivacyPolicy"} ><span > {t("footer_links_privacyPolicy")}   </span></Link>
                <span className="mx-1" > | </span>
                <Link to={"/RefundPolicy"} ><span >   {t("footer_links_refundPolicy")} </span></Link>
                <span className="mx-1" > | </span>
                <Link to={"/TermsConditions"} ><span > {t("footer_links_termsConditions")}  </span></Link>
                <span className="mx-1" > | </span>
                <Link to={"/ContactUs"}><span>{t("footer_links_contactUs")}</span></Link>
            </p>

            <p className="mt-2 flex items-center gap-3 justify-center">  {t("footer_copyright")} |

                <img src={logo} className="w-14" alt="logo" />
            </p>

        </footer>
    )
}
