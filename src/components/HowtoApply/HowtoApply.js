import React ,{useEffect}from 'react';
import HowtoApplystyle from "./HowtoApply.module.css";
import HowtoapplyImage from "../../assets/howtoapply.png"
import Aos from "aos";
import "aos/dist/aos.css";

const HowtoApply = () => {
  useEffect(() => {
Aos.init({duration:2000});
}, [])
    return (
       <div className={HowtoApplystyle.HowtoApplycomponent} id="Howto" >
        {/* image section */}
           <div className={HowtoApplystyle.deliveryimg}>
          <img data-aos="fade-right" src={HowtoapplyImage} width="575.12px" height="480px"  alt="delivery"/>
          </div>
          {/* About section */}
          <div className={HowtoApplystyle.HowtoApplydefination}>
            <h1>How to Apply</h1>
            <p> When applying for a traffic permit, there are certain requirements 
            that you must meet that are included in the examination: 
            requirements for professional knowledge, solid establishment, good reputation and financial resources. 
            Important to remember is to confirm your application for a traffic permit by the company's company signer or CEO.
          </p>
           </div>
         </div>
    )
}
export default HowtoApply
