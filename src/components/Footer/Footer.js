import React from 'react';
import Footerstyle from "./Footer.module.css";
import fb from "../../assets/fb.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png"


const Footer = () => {
    return (
        <div className={Footerstyle.Footer}>
        <div className={Footerstyle.copyright}>
         <p>Copyright @ 2019</p>
         </div>
         {/* social media */}
        <div className={Footerstyle.socialmedia}>
        <img src={fb} width="20" height="20" alt="fb"/>
        <img src={twitter} width="20" height="20" alt="fb"/>
        <img src={insta} width="20" height="20" alt="fb"/>
        </div>
        </div>
    )
}

export default Footer
