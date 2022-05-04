import React from "react";

import "./TenthSection.css";
import googleplay from "../../Assets/googleplay.png";
import appStore from "../../Assets/appstore.png";
import arrow from "../../Assets/Arrow.png";
import mail from "../../Assets/mail.png";
import phone from "../../Assets/phone.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Tenthsection = () => {
  return (
    <div className="footer pt-5">
      <div className="row">
        <div className="col-md-4 col-sm-12 align-self-start">
          <div className="">
            <div className="contact">
              <div className="">Contact Us</div>
              <div className="mail">
                <p className="sublist">
                  {" "}
                  <img className="mail-png  " src={mail} alt="Man" />
                  team@useiam.com
                </p>
              </div>

              <p className="sublist1">
                {" "}
                <img className="phone-png " src={phone} alt="Man" />
                8434259777
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 align-self-center">
          <div className="">
            {" "}
            <div className="guides">
              <div className="guide-div">Guides</div>
              <div className="arrow">
                <p className="sublist-div">
                  {" "}
                  <img className="arrow-png " src={arrow} alt="Man" />
                  Tips on Being an IAM monitor{" "}
                </p>
              </div>

              <p className="sublist-div">
                {" "}
                <img className="arrow-png " src={arrow} alt="Man" />
                How to be an IAM user!
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 align-self-end">
          <div className="downloadapp">
            <div className="download">Download App</div>
            <div className="socail-icon">
              <img className="googleplay-png " src={googleplay} alt="img" />
            </div>
            <img className="appStore-png " src={appStore} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tenthsection;
