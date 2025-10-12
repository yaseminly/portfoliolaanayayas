import React, {useContext} from "react";
import "./Talks.scss";
//import TalkCard from "../../components/talkCard/TalkCard";
//import {talkSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Talks() {
  const {isDark} = useContext(StyleContext);
  
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="talk-header">
         
          <p
            className={
              isDark
                ? "dark-mode talk-header-subtitle"
                : "subTitle talk-header-subtitle"
            }
          >
            
          </p>
          
        </div>
      </div>
    </Fade>
  );
}
