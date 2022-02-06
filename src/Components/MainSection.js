import * as React from "react";
import "../css/styles.css";
import Arrow from "../Images/Arrow.png";

const MainSection = () => (
  <div className="MainSection">
    <div className="MainSection-BoldTitle">Lorem ipsum dolor sit amet</div>
    <div className="MainSection-Text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
    <button className="RoundButton">Nemo enim ipsam</button>
    <div className="MainSection-TextUnderButton">Sed ut perspiciatis unde</div>
    <div className="MainSection-TextWithArrowDown">Doloremque laudantium <img src={Arrow} alt="Logo" className="MainSection-ArrowDown"/></div>
  </div>
);

export default MainSection;
