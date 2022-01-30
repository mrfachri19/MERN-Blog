import React from "react";
import {
  LogoKabayan,
  Phone,
  Email,
  Facebook,
  Instagram,
  Linkedin,
  Location,
} from "../../../assets";
import "./footer.scss";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};

function Footer() {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={LogoKabayan} alt="logo" />
        </div>

        <div className="social-wrapper">
          <Icon img={Facebook} />
          <Icon img={Email} />
          <Icon img={Instagram} />
          <Icon img={Linkedin} />
          <Icon img={Phone} />
          <Icon img={Location} />
        </div>
      </div>

      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
}

export default Footer;
