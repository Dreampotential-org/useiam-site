import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Arrow from "../../Assets/Arrow.png";
import mail from "../../Assets/mail.png";
import phone from "../../Assets/phone.png";
import googleplay from '../../Assets/googleplay.png'
import appStore from '../../Assets/appstore.png'
import linkedin from '../../Assets/linkedin.png'
import instagram from '../../Assets/instagram1.png'
import facebook from '../../Assets/facebook.png'



import "./Footer.css";


const Footer = () => {
  return (
    <>
        <div className='footer-section pt-5 pb-5'>
            <Container>
                <Row>
                    <Col md="3">    
                        <div className='pt-5'>
                            <h5 className='main-title'>Contact Us</h5>
                            <div className='position-relative'>
                                <div className='pt-1'>
                                    <img className="icons" src={mail} alt="Ellipse" />
                                    <h5 className='sub-title'>team@useiam.com</h5>
                                </div>
                                <div className='pt-1'>
                                    <img className="icons" src={phone} alt="Ellipse" />
                                    <h5 className='sub-title'>+1 (510) 380-7171</h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className='pt-5'>
                            <h5 className='main-title'>Guides</h5>
                            <div className='position-relative'>
                                <div className='pt-1'>
                                    <img className="icons" src={Arrow} alt="Ellipse" />
                                    <h5 className='sub-title'>Being an IAM Monitor</h5>
                                </div>
                                <div className='pt-1'>
                                    <img className="icons" src={Arrow} alt="Ellipse" />
                                    <h5 className='sub-title'>How to be an IAM user!</h5>
                                </div>
                            </div>    
                        </div>
                    </Col>
                    <Col md="3">
                        <div className='pt-5'>
                            <h5 className='main-title'>Download app</h5>
                            <div className='images-icon-button  position-relative '>
                                <div>
                                    <a 
                                    href="https://play.google.com/store/apps/details?id=com.useiam.useiam2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                        <img className='img-button' src={googleplay} alt="img" /> 
                                    </a> 
                                </div>
                                <div>
                                    <a 
                                    href="https://apps.apple.com/us/app/useiam/id1497407740"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                        <img className='img-button' src={appStore} alt="img"/>  
                                    </a>
                                </div> 
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className='pt-5'>
                            <h5 className='main-title'>Social Media</h5>
                            <div className='media_icon position-relative'>
                            <div>
                                <a 
                                    href="https://www.linkedin.com/in/eric-rose-744997239"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                               
                                    <img className="linkedin_logo" src={linkedin} alt="Ellipse" />
                                
                                </a>
                              
                                <a 
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                               
                                    <img className="insta_logo" src={instagram} alt="Ellipse" />
                                
                                </a>
                            </div>
                                <div>
                                <a 
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                               
                                    <img className="facebook-logo" src={facebook} alt="Ellipse"/>
                                
                                </a>
                                </div>
                            </div>    
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Footer