import React ,{useEffect}from 'react';
import FormSectionstyle from "./FormSection.module.css";
import {BsArrowRight} from "react-icons/bs";
import Truck from "../../assets/carfooter.png"
import logo from "../../assets/logo.png";
import Aos from "aos";
import "aos/dist/aos.css";

const FormSection = () => {
  useEffect(() => {
Aos.init({duration:2000});
}, [])
    return (
    <div className ={FormSectionstyle.ContactContainer}>
    {/* form and truck */}
     <div className ={FormSectionstyle.Contact}>
     {/* Truckside */}
     <div className={FormSectionstyle.Truck}>
      <img data-aos="fade-right" src={Truck} width="500px" height="310px"/> 
      <div className={FormSectionstyle.strap}>  
      <p>We provide traffic management consultants so you get started quickly, contact us for a quote today!</p>
      </div>
      </div>
     {/* container form */}
     <div class={FormSectionstyle.container} id="Contactus" >
     <form>
    <label for="name">Name</label>
    <input type="text" id="name" name="firstname" placeholder="Your name.." />
    <label for="email">Email Address</label>
    <input type="email" id="Email" name="Email" placeholder="Your Email Address.." />
    <button>Submit<BsArrowRight/></button>
    </form>
    </div>
   </div>
   {/* nav in form */}
   <div className={FormSectionstyle.Contactnav}>
   <img src={logo} width="109px" height="50px" alt="logo"/> 
   <ul>
   <li>About</li>
    <li>How To</li>
    <li>FQAS</li>
   </ul>
</div>
</div>
   )
}

export default FormSection
