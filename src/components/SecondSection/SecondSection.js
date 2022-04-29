import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Rectangle from '../../Assets/Rectangle.png'
import Vector from '../../Assets/Vector.png'
import MobileAppmockup from '../../Assets/MobileAppmockup.png'
import './SecondSection.css'
// import MobileAppmockup from '../../Assets/MobileAppmockup.png'
import googleplay from '../../Assets/googleplay.png'
import appStore from '../../Assets/appstore.png'

const SecondSection = () => {
  return (
    <>
        <div className='recover'>
        <Container>
        <Row>
            <Col md={7} className="">
                
                    {/* <img className="rectangle" src={Rectangle} alt="Rectangle"/>         */}
                    {/* <img className="vector" src={Vector} alt="heaVectorder"/>    */}
                    <img className="position-relative img-item" src={MobileAppmockup} alt="MobileAppmockup"/>
                
            </Col>
            <Col md={5}>
               <div className='recovor-info position-relative mt-5 pt-5 mb-5 pb-3'>
                   <h2 className='title'>#1 Addiction Recovery and Mental Health App</h2>
                   <p className='sub-text mt-5'>useIAM is widely used in drug treatment, rehab programs, drug courts, therapy and by high performing teams.</p>
                   <div className='images-icon position-relative mt-5'>
                   <a 
                   href="https://play.google.com/store/apps/details?id=com.useiam.useiam2"
                   target="_blank"
                   rel="noopener noreferrer"
                   >
                       <img className='img-button' src={googleplay} alt="img" /> 
                   </a>  
                    <a 
                    href="https://apps.apple.com/us/app/useiam/id1497407740"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <img className='img-button' src={appStore} alt="img"/>  
                    </a>
                    </div>
                    {/* <a
                  href="https://play.google.com/store/apps/details?id=com.useiam.useiam2"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={appStore} alt="googlestore" width="32%" className='googlestore-img' />
                </a> */}
               </div>
            </Col>
        </Row>
        </Container>
        </div>
    </>
  )
}

export default SecondSection