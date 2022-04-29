import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Man from '../../Assets/calm_man.jpg'
import Ellipse from '../../Assets/Ellipse.png'
import quote1 from '../../Assets/quote1.png'
import quote2 from '../../Assets/quote2.png'
import './EighthSection.css'

const EighthSection = () => {
  return (
    <div className='pb-5 eight'>
        <div className='container-fluid'>
            <Row>
                <Col md={6}  className='p-0'>
                    <div className='text pt-5 pb-5'>
                        <div>
                            <img className="quote1" src={quote1} alt="Ellipse"/>
                                <div className='bottom-text p-5'>
                                    <h2>
                                    I've been using IAM for six months. Even though my legal problems are over, 
                                    I enjoy my new found sobriety and IAM makes me feel accountable. I feel good about myself.
                                    </h2>
                                </div>
                            <img className="quote2" src={quote2} alt="Ellipse"/>
                            </div>
                           
                                <h3 className='alex'>
                                ALEX, IAM USER, NEW YORK, NY
                                </h3>
                          
                        

                        <div>
                            <img src={Ellipse} alt="Ellipse"/>
                        </div>
                        
                    </div>
                 </Col>
                 <Col md={6} className='p-0' >
                    <div className='position-relative' >
                        <div>
                            <img className="iam-img position-relative" src={Man} alt="Man"/>
                        </div>
                    </div>
                 </Col>
            </Row>
        </div>
    </div>
  )
}

export default EighthSection