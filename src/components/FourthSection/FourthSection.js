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
                {/* <img className="image2" src={people} alt=""/> */}
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_debXPUnJkQ" 
                                            title="YouTube video player" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                </iframe>
                {/* <iframe src='https://user-images.githubusercontent.com/59257416/163123166-ad0ea88c-a018-422a-8448-669dbd5b75dc.mp4'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='video'
                        width="100%" height="100%"
                /> */}

            <video class="" controls="" autoplay="" name="media" id="video" width="100" height="100">
                <source src="https://www.youtube.com/embed/_debXPUnJkQ"/>
            </video>

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