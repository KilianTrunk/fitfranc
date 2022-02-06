import * as React from "react";
import "../css/styles.css";

import WhiteLogo from "../Images/White Logo.png";
import Instagram from "../Images/Instagram Logo.png";
import Facebook from "../Images/Facebook Logo.png";
import Twitter from "../Images/Twitter Logo.png";
import Youtube from "../Images/Youtube Logo.png";
import TikTok from "../Images/TikTok Logo.png";

const Footer = () => (
  <div className="Footer">
    <div className="Footer-Section">
      <img src={WhiteLogo} alt="Logo" />
    </div>
    <div className="Footer-Section Footer-LinksSection">
      <div className="Footer-LinksSection-WhiteSection">
        <div className="Footer-LinksSection-Text">Lorem</div>
        <div className="Footer-LinksSection-Text">Lorem</div>
        <div className="Footer-LinksSection-Text">Lorem</div>
        <div className="Footer-LinksSection-Text">Lorem</div>
        <div className="Footer-LinksSection-Text">Lorem</div>
      </div>
      <div className="Footer-LinksSection-PurpleSection">
        <div className="Footer-LinksSection-Text">Lorem ipsum</div>
        <div className="Footer-LinksSection-Text">Lorem ipsum</div>
        <div className="Footer-LinksSection-Text">Lorem ipsum</div>
        <div className="Footer-LinksSection-Text">Lorem ipsum</div>
        <div className="Footer-LinksSection-Text">Lorem ipsum</div>
      </div>
    </div>
    <hr />
    <div className="Footer-Section Footer-SocialMediaSection">
      <div className="Footer-SocialMediaSection-Text">Et harum @fitfranc</div>
      <div className="Footer-SocialMediaSection-SocialMediaLogos">
        <img
          src={Instagram}
          alt="InstagramLogo"
          className="Footer-SocialMediaSection-SocialMediaLogos-InstagramLogo"
        />
        <img
          src={Facebook}
          alt="FacebookLogo"
          className="Footer-SocialMediaSection-SocialMediaLogos-Logo"
        />
        <img
          src={Twitter}
          alt="TwitterLogo"
          className="Footer-SocialMediaSection-SocialMediaLogos-Logo"
        />
        <img
          src={Youtube}
          alt="YoutubeLogo"
          className="Footer-SocialMediaSection-SocialMediaLogos-Logo"
        />
        <img
          src={TikTok}
          alt="TikTokLogo"
          className="Footer-SocialMediaSection-SocialMediaLogos-Logo"
        />
      </div>
    </div>
    <hr />
    <div className="Footer-Section">
      <div className="Footer-CompanySection">
        <div className="Footer-CompanySection-LeftSection">
          <div className="Footer-CompanySection-Text">Itaque earum</div>
          <div className="Footer-CompanySection-Text">Itaque earum hic</div>
        </div>
        <div className="Footer-CompanySection-RightSection">
          <div className="Footer-CompanySection-Text">Itaque earum</div>
          <div className="Footer-CompanySection-Text Footer-CompanySection-TextGoRight">
            Itaque earum hic
          </div>
        </div>
      </div>
      <div className="Footer-CompanySection-Text Footer-CompanySection-CopyrightText">
        All Rights Reserved © 2022 Fitfranc
      </div>
    </div>
  </div>
);

export default Footer;
