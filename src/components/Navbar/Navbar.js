import React from 'react';
// import  {Mainlogo} from "./assets/Lays.png";
import Navstyles from "./Navbar.module.css";
import { Link} from "react-scroll";
import Aboutus from "../Aboutus/Aboutus";
import HowtoApply from "../HowtoApply/HowtoApply";
import logo from "../../assets/logo.png"

const Navbar = (props) => {
    return (
      <nav className={Navstyles.nav}>
          <img src={logo} alt="Logo." width="90" height="50" />
          <ul>
            <li><Link activeClass="active" to="Aboutus" spy={true} smooth={true}>About</Link></li>
            <li><Link activeClass="active"  to="Howto" spy={true} smooth={true}>How To</Link></li>
            <li><Link activeClass="active"  to="FQA" spy={true} smooth={true} >FAQ'S </Link></li>
            <li><Link activeClass="active"  to="Contactus" spy={true} smooth={true}><button>Contact Us</button></Link></li>
          </ul>
      </nav>
    )
}

export default Navbar
