import * as React from "react";
import "../css/styles.css";

import Offer from "../Images/Offer.jpg";

const OfferSection = () => (
  <div className="OfferSection">
      <div className="OfferSection-Offer">
          <img src={Offer} alt="OfferImage" className="OfferSection-OfferImage" />
          <div className="OfferSection-Offer-MainText">Quis autem vel iure reprehenderit</div>
          <div className="OfferSection-Offer-SupportText">Sed ut perspiciatis unde omnis iste enim ipsam natus error sit voluptatem accusantium enim ip laudantium enim ipsam voluptatem quia</div>
          <button className="RoundButton OfferSection-Offer-Button">Nemo enim ipsam</button>
      </div>
      <div className="OfferSection-Padding"><hr></hr></div>
      <div className="OfferSection-Offer">
          <img src={Offer} alt="OfferImage" className="OfferSection-OfferImage" />
          <div className="OfferSection-Offer-MainText">Quis autem vel iure reprehenderit</div>
          <div className="OfferSection-Offer-SupportText">Sed ut perspiciatis unde omnis iste enim ipsam natus error sit voluptatem accusantium enim ip laudantium enim ipsam voluptatem quia</div>
          <button className="RoundButton OfferSection-Offer-Button">Nemo enim ipsam</button>
      </div>
      <div className="OfferSection-Padding"><hr></hr></div>
      <div className="OfferSection-Offer">
          <img src={Offer} alt="OfferImage" className="OfferSection-OfferImage" />
          <div className="OfferSection-Offer-MainText">Quis autem vel iure reprehenderit</div>
          <div className="OfferSection-Offer-SupportText">Sed ut perspiciatis unde omnis iste enim ipsam natus error sit voluptatem accusantium enim ip laudantium enim ipsam voluptatem quia</div>
          <button className="RoundButton OfferSection-Offer-Button">Nemo enim ipsam</button>
      </div>
  </div>
);

export default OfferSection;
