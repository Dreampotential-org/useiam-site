import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Rectanglefriendsimg from "../../Assets/Rectanglefriendsimg.png";

import "./NineSection.css";


const NineSection = () => {
  return (
    <div className="">
      <div className="container-fluid">
        <Row>
          <Col md={6} className="p-0">
            <div className="position-relative">
              <div>
                <img
                  className="friends-img position-relative"
                  src={Rectanglefriendsimg}
                  alt="Man"
                />
              </div>
            </div>
          </Col>
          <Col md={6} className="p-0">
            <div className="position-relative">
            <h1 className="heading"> Get Started</h1>
              <div>
              
                <div className="form">
     <form>
       <div className="input-container">
         <label className="first-name">FULL NAME </label>
         <input style={{height:'50px'}}type="text" name="uname" required />
      
       </div>
       <div className="input-container">
         <label className="email">EMAIL </label>
         <input style={{height:'50px'}} type="text" name="uname" required />
      
       </div>
       <div className="input-container">
         <label className="phonenumber">PHONE NUMBER </label>
         <input style={{height:'50px'}} type="number" name="uname" required />
      
       </div>
       <div className="input-container">
         <label className="website">WEBSITE</label>
         <input style={{height:'50px'}} type="text" name="text" required />
      
       </div>
       <div className="button-container">
         <button className="submit"type="submit"> SUBMIT</button>
       </div>
     </form>
   </div>
            </div>
            </div>

          </Col>
        </Row>
      </div>
    </div>
  );
};

export default NineSection;
