import React, { useState } from 'react';
import {AiOutlinePlus ,AiOutlineMinus} from "react-icons/ai";
import FQAstyle from "./FQA.module.css";

const Accordion = ({ Question, Answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={FQAstyle.QAcontainer}>
    {/* Question */}
      <div className={FQAstyle.Question} onClick={() => setIsActive(!isActive)}>
        <div className={FQAstyle.Question}>
        {Question}
        {isActive ? <AiOutlineMinus color="red" size="50"/> : <AiOutlinePlus color="red" size="50"/>}
      </div>
      {/* Answer */}
        {isActive && <div className={FQAstyle.Answer}><p>{Answer}</p></div>}
      </div>
    </div>
  );
};

export default Accordion;