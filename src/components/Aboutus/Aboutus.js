import React,{useEffect} from 'react';
import Aboutusstyle from "./Aboutus.module.css";
import AboutusImage from "../../assets/Aboutus.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Aboutus = () => {
    useEffect(() => {
Aos.init({duration:2000});
}, [])
    return (
         <div className={Aboutusstyle.Aboutcomponent} id="Aboutus">
          {/* About section */}
          <div className={Aboutusstyle.Aboutdefination}>
            <h1>About us</h1>
            <p> is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          </p>
            <div className={Aboutusstyle.strap}>
            <p >how do you do when you obtain acommercial traffic for freight transport to you business</p>
            </div>
           </div>
           {/* image section */}
           <div className={Aboutusstyle.deliveryimg}>
            <img data-aos="fade-left"  src={AboutusImage} width="575.12px" height="480px" alt="delivery"/>
            </div>
         </div>
   
    )
}

export default Aboutus
