import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import people from '../../Assets/circle-of-people-in-rehab-holding-hands-2022-03-08-00-11-36-utc.jpg'
import Icon from '../../Assets/icon.png'
import './FourthSection.css'

const FourthSection = () => {
  return (
    <div className='four pt-5 pb-5'>
    <Container>
        <div>
            <h2 className='four-heading pb-5'>
            useIAM is easy to implement in your Organization
            </h2>
        </div>
    <Row>
        <Col md={6} className="">
                <img className="image2" src={people} alt=""/>
        </Col>
        <Col md={6}>
            <div>
                <h2 className='four-title'>Here’s how it works!</h2>
               <div className='content position-relative'>
                   <img className='tick' src={Icon} alt="img"/>
                   <h2 className='four-content'>Have your clients install useIAM app on their phone and select your organization at sign up.</h2>
               </div>
               <div className='content position-relative'>
                   <img className='tick' src={Icon} alt="img"/>
                   <h2 className='four-content'>Instruct clients to submit a daily video talking about their plans for their day or taking doctor prescribed medicine.</h2>
               </div>
               <div className='content position-relative'>
                   <img className='tick' src={Icon} alt="img"/>
                   <h2 className='four-content'>Reply back to clients submissions encouraging them and giving them feedback.</h2>
               </div>
            </div>
        </Col>

    </Row>
    </Container>
</div>
  )
}

export default FourthSection