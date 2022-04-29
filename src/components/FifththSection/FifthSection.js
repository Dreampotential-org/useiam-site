import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Plant from '../../Assets/Plant.png'
import IAM from '../../Assets/IAM.png'
import Image_all from '../../Assets/Image_all.png'
import Recovering from '../../Assets/Recovering.png'
import './FifthSection.css'

const FifthSection = () => {
  return (
    <div className='background'>
        <Container>
        <Row>
            <Col md={8} >
              <div className='effective-info mt-5 pt-5 mb-5 pb-5'>
                <h2 className='heading'>UseIAM is an effective tool to nurture self introspection and foster growth.
                 The person will enjoy using useIAM and will be able to document their activities to recovery.</h2>
                 </div>
            </Col>
            <Col md={4} >               
                <div className='effective-img position-relative mt-5 pt-3 mb-5 pb-5' >
                  <img className="iam-img  position-relative " src={IAM} alt="IAM"/>
                  <img className="img-Plant img-fluid" src={Plant} alt="Plant"/>
                </div>
                
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default FifthSection