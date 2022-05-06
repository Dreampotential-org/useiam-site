import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import people from '../../Assets/circle-of-people-new.png'
import JOIN from '../../Assets/JoinButton.png'
import RectangleSix from '../../Assets/RectangleSix.png'

import './SixthSection.css'

const SixthSection = () => {
  return (
    <div className='six pt-5 pb-5'>
        <Container>
            <div>
                <h2 className='six-title pb-5'>
                Specifically built for rehabilitation and drug treatment centers to provide a higher level of care and connection with the people you are serving.
                </h2>
            </div>
        <Row>
            <Col md={7} className="">
               {/* <div className='parent'> */}
                    {/* <img className="image1" src={RectangleSix} alt=""/> */}
                    <img className="image2" src={people} alt=""/>
                {/* </div>    */}
            </Col>
            <Col md={5}>
                <div className='box'>
                <div className='box-text'>
                    <div>
                        <h2 className='six-sub-title'>Join the large network of providers using useIAM.</h2>
                       <a href='#' className='btn btn-lg btn-custom'>Join Now</a>
                    </div>
                </div>
                </div>
            </Col>

        </Row>
        </Container>
    </div>
  )
}

export default SixthSection