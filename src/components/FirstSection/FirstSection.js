import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import headerImg from '../../Assets/header.jpg'
import Logo from '../../Assets/logo_iam.png'
import './FirstSection.css'



const FirstSection = () => {
  return (
    <>
        <div className='hero-image'>
          <Container>
          <Row className='d-block'>
              <Col md={12}>
                  <div className='img-div position-relative'>
                      {/* <img className="img_header" src={headerImg} alt="header"/> */}
                      <h2>Improve the outcome of people you serve with useIAM</h2>
                      <img className="img-logo mt-5" src={Logo} alt="Logo"/>
                  </div>
              </Col>
            
          </Row>
          </Container>
        </div>
    </>
  )
}

export default FirstSection