import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Arrow from "../../Assets/Arrow.png";
import mail from "../../Assets/mail.png";
import phone from "../../Assets/phone.png";
import googleplay from '../../Assets/googleplay.png'
import appStore from '../../Assets/appstore.png'
import "./Footer.css";


const Footer = () => {
  return (
    <>
        <div className='footer-section pt-5 pb-5'>
            <Container>
                <Row>
                    <Col md="4">    
                        <div className='pt-5'>
                            <h5 className='main-title'>Contact Us</h5>
                            <div className='position-relative'>
                                <div className='pt-1'>
                                    <img className="icons" src={mail} alt="Ellipse" />
                                    <h5 className='sub-title'>team@useiam.com</h5>
                                </div>
                                <div className='pt-1'>
                                    <img className="icons" src={phone} alt="Ellipse" />
                                    <h5 className='sub-title'>1234567890</h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className='pt-5'>
                            <h5 className='main-title'>Guides</h5>
                            <div className='position-relative'>
                                <div className='pt-1'>
                                    <img className="icons" src={Arrow} alt="Ellipse" />
                                    <h5 className='sub-title'>Tips on Being an IAM Monitor</h5>
                                </div>
                                <div className='pt-1'>
                                    <img className="icons" src={Arrow} alt="Ellipse" />
                                    <h5 className='sub-title'>How to be an IAM user!</h5>
                                </div>
                            </div>    
                        </div>
                    </Col>
                    <Col md="4">
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
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Footer