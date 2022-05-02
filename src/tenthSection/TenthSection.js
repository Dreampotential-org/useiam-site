import React from "react";

import "./TenthSection.css";
import mail from "../Assets/mail.png";
import phone from "../Assets/phone.png"

const Tenthsection = () => {
  return (
    <div className="footer">
      <div className="contact">
        <div>contact us</div>
        <div className="mail">
          <img className="mail-png " src={mail} alt="Man" />
          <p className="sublist">team@useiam.com</p>
          </div>
          <img className="phone-png " src={phone} alt="Man" />
          <p className="sublist">8434259777</p>
        
      </div>
    </div>
  );
};

export default Tenthsection;
