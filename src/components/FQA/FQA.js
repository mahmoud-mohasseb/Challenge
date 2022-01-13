import React ,{useState ,useEffect} from 'react';
import FQAstyle from "./FQA.module.css";
import Accordion from "./Accordion";
import fqa from "../../assets/fqa.png";
import {AiOutlinePlus } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

const FQA = () => {
const [QAmore,setQAmore] =useState(5);
const [data,setdata]=useState([]);

useEffect(() => {
   fetch("https://lxpi9qne2a.api.quickmocker.com/getReactFAQs")
   .then(res => res.json())
   .then((response)=>(
       console.log(response.response),
    setdata(response.response)
             ))
          }, []);

    useEffect(() => {
    Aos.init({duration:2000});
      }, []);
    return (
        <div className={FQAstyle.container} id="FQA" >
          <div className={FQAstyle.FQAcomponent}>
          {/* About section */}
          <div className={FQAstyle.FQAdefination}>
            <h1>FQA</h1>
            <p> Question and answers on professional traffic permits:
          </p>
           </div>
           {/* image section */}
           <div className={FQAstyle.deliveryimg}>
            <img data-aos="fade-left" src={fqa} width="400px" height="400px" alt="delivery"/>
            </div>
            </div>
          {/* Q&A */}
         <div className={FQAstyle.Accordions}>
          {data.slice(0, QAmore).map((question ,i )=>(
          <Accordion key={i} Question={question.title} Answer={question.Message} />
          ))}
           <a onClick={()=>setQAmore(100)}><h1>Load More</h1><AiOutlinePlus color="red" size="50"/></a>       
         </div>
          {/* Load More */}
         </div>
    )
}

export default FQA
