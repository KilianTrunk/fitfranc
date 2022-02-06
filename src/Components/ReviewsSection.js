import * as React from "react";
import "../css/styles.css";

import DarkPurpleLogo from "../Images/Dark Purple Logo.png";
import User from "../Images/User.png";


const ReviewsSection = () => (
  <div className="ReviewsSection">
      <div className="ReviewsSection-MainText">Ut enim ad minima veniam</div>
      <img src={DarkPurpleLogo} alt="Logo" className="ReviewsSection-Logo" />
      <div className="ReviewsSection-UserText">" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. "</div>
      <img src={User} alt="User" className="ReviewsSection-UserImage" />
      <div className="ReviewsSection-UserName">Quis autem</div>
      <div className="ReviewsSection-UserTitle">At vero et accusamus</div>
  </div>
);

export default ReviewsSection;
