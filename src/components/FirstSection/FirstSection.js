import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import headerImg from '../../Assets/header.jpg'
import Logo from '../../Assets/logo_iam.png'
import './FirstSection.css'

import TypeWriterEffect from 'react-typewriter-effect';

     

const FirstSection = () => {

  const myAppRef = document.querySelector('.scrollable-div')

  return (
    <>
        <div className='hero-image'>
          <Container>
          <Row className='d-block'>
              <Col md={12}>
                  <div className='img-div position-relative'>
                  <h2> 
                    <TypeWriterEffect
                        textStyle={{ fontsize: 65}}
                        loop={true}
                        startDelay={100}
                        cursorColor="white"
                        text="Improve the outcome of people you serve with useIAM"
                        typeSpeed={100}
                        scrollArea={myAppRef}
                    />
                     </h2>
                     {/* <h2>Improve the outcome of people you serve with useIAM</h2> */}
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