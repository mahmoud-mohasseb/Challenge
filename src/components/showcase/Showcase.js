import React ,{useEffect} from 'react';
import {BsArrowRight} from "react-icons/bs"
import Showcasestyle from "./Showcase.module.css";
import carshowcase from "../../assets/carshowcase.png"
import Aos from "aos";
import "aos/dist/aos.css";

const Showcase = () => {
useEffect(() => {
Aos.init({duration:2000});
}, [])
    return (
        <div className={Showcasestyle.ShowcaseContain}>
        <h1>Your awesome traffic permit consultant.</h1>
        <button>Get started<BsArrowRight/></button>
        <img data-aos="fade-right" src={carshowcase} width="540" height="340" alt="showcase"/>
        </div>
    )
}
export default Showcase
