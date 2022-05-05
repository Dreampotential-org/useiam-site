import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Man from "../../Assets/calm_man.jpg";
import Ellipse from "../../Assets/Ellipse.png";
import Ellipse5 from "../../Assets/Ellipse5.png";
import quote1 from "../../Assets/quote1.png";
import quote2 from "../../Assets/quote2.png";
import "./EighthSection.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const EighthSection = () => {
  return (
    <div className="pb-0 eight">
      <div className="container-fluid">
        <Row>
          <Col md={6} className="p-0">
            <div className="text quote_root_div pt-5">
              <div className="quote_div">
                <img className="quote1" src={quote1} alt="Ellipse" />
                <div className="bottom-text p-5 mt-5">
                  <div>
                  <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}
                  >
                  <div className="slide-text-div">
                    <div className="myCarousel">
                      <h3 className="testiomonials"> I've been using IAM for six months. Even though my legal
                    problems are over, I enjoy my new found sobriety and IAM
                    makes me feel accountable. I feel good about myself.</h3>
                    <h3 className="testiomonials">ALEX, IAM USER, NEW YORK, NY</h3>
                    </div>
                  </div>

                  <div>
                    <div className="myCarousel">
                      <h3 className="testiomonials">I enjoy IAM for its convenience and reliability.
                         I've been struggling to find balance in life and having this app allows me to routinely check-in and see progress.</h3>
                         <h3 className="testiomonials">MONICA, IAM USER, FORT WORTH, TX</h3> 
                    </div>
                  </div>

                  <div>
                    <div className="myCarousel">
                      <h3 className="testiomonials">I use it (IAM) every time I feel the desire to vent and release.
                         It's amazing being able to so readily use my energy in a constructive manner that I can build upon.</h3>
                         <h3 className="testiomonials">VALERIA, IAM USER, LOS ANGELES, CA</h3>
                    </div>
                  </div>
                </Carousel>

                </div>
                <img className="quote2" src={quote2} alt="Ellipse" />
              </div>

              

              {/* <div className="Ellipse-section  ">
                <div >
                  <img className="ellips1" src={Ellipse} alt="Ellipse" />
                </div>
                <div>
                  <img className="ellips1" src={Ellipse5} alt="Ellipse" />
                </div>
                <div>
                  <img className="ellips1" src={Ellipse5} alt="Ellipse" />
                </div>
              </div> */}
              
              </div>
            </div>
          </Col>
          <Col md={6} className="p-0">
            <div className="position-relative">
              <div>
                <img
                  className="iam-man position-relative"
                  src={Man}
                  alt="Man"
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EighthSection;
