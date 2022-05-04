import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './ThirdSection.css'
import Logo from '../../Assets/logo_iam.png'
import Camera from '../../Assets/Camera.png'
import Gps from '../../Assets/Gps.png'
import Man from '../../Assets/Man.png'
import TextIam from '../../Assets/Text.png'


const ThirdSection = () => {
  return (
    <>
      <div className='back'>
        <Container>
          <Row>
            <Col md={5}>
              <div className='pt-5 pb-5 logo-div'>
                  <img className="logo position-relative mt-5" src={Logo} alt="Logo"/>
                </div>
                <div className='left'>
                    <h2 className='position-relative sub-text-top'>useIAM documents the journey to recovery:</h2>
                
                <div className='cam-gps position-relative'>
                  <img src={Camera} alt='camera' className='icon-img'/>
                  <p className='position-relative sub-text-1'>Record plans and Feels</p>
                </div>
                
                <div className='cam-gps position-relative'>
                  <img src={Gps} alt='Gps' className='icon-img'/>
                  <p className='position-relative sub-text-1'>GPS Check in proving accountability.</p>
                </div>
                </div>  
             
            </Col>
            <Col md={7}>
              <div className='accountable position-relative mt-5 pt-3 mb-5 pb-5' >
                    <img className="text-image  position-relative " src={TextIam} alt="IAM"/>
                    <img className="man-image img-fluid" src={Man} alt="Plant"/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ThirdSection