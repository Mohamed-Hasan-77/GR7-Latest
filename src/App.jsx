import Err from "./assets/Erro-404-1-1.jpg"


// react router 
import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";

// components 
import Home from './Components/Home/Home';
import PrivacyPolicy from "./Components/FooterComponents/PrivacyPolicy";
import RefundPolicy from "./Components/FooterComponents/RefundPolicy";
import TermsConditions from "./Components/FooterComponents/TermsConditions";
import FormSub from "./Components/FormSub/FormSub";
import StarterQ from "./Components/StarterQ/StarterQ";
import FormSubEn from './Components/FormSubEn/FormSubEn';
import StarterQEn from './Components/StarterQEn/StarterQEn';
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";

// i18 next 
import "./i18n";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";


import "./index.css"
import SubNav from "./Components/subNav/subNav.jsx";


const router = createHashRouter([

  { element: <Home />, path: '' },
  { element: <Home />, path: '/' },
  { element: <Home />, path: './' },
  { element: <Home />, path: '/' },
  { element: <Home />, path: 'home' },

  { element: <PrivacyPolicy />, path: '/PrivacyPolicy' },
  { element: <RefundPolicy />, path: '/RefundPolicy' },
  { element: <TermsConditions />, path: '/TermsConditions' },

  { element: <FormSub />, path: '/SubscribeForm/:planId' },
  { element: <FormSubEn />, path: '/SubscribeFormEn/:plan_Id' },

  { element: <StarterQ />, path: '/StartQuestions' },
  { element: <StarterQEn />, path: '/StartQuestionsEn' },
  { element: <ContactUs />, path: '/ContactUs' },
  {
    path: "*",
    element: <>
      <SubNav />
      <div className="img w-full ">
        <img
          className="object-cover "
          src={Err}
          alt="not found"
        />
      </div>
      <Footer />
    </>,
  },
])


function App() {

  return (
    <>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </>
  )
}

export default App
