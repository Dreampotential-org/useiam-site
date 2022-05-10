import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './SeventhSection.css'

import Curve from '../../Assets/Curve.png'
import Icon from '../../Assets/icon.png'
const PricingTiersList1=[
   {
    title:'Add your organization to useIAM'
   },
   {
    title:'Have up to 2 clients'
   },
   {
    title:'Last 30 events storage'
   }
];
const PricingTiersList2=[
    {
     title:'Add your organization to useIAM'
    },
    {
     title:'Have up to 2 clients'
    },
    {
     title:'Last 90 events storage'
    }
 ];
 const PricingTiersList3=[
    {
     title:'Your logo and company name in our app & useIAM network'
    },
    {
     title:'Unlimited clients'
    },
    {
     title:'Entire event history'
    },
    {
    title:'24/7 support'
    }
 ]

 
const SeventhSection = ({onHandleclick}) => {


  const scrollToBottom = () => {
    onHandleclick();
  }


  return (
    <>
      <div className="pricing">
        <Container>
          <div className="row pt-5 pb-5">
            <h1 className="pb-5">Pricing Tiers</h1>
            <div className="card-section">
              <div className="column">
                <div className="card">
                  <img className="img-title" src={Curve} alt="img" />
                  <h3 className="title">FREE</h3>
                  {PricingTiersList1.map((val) => {
                    return (
                      <div className="icon-text">
                        <img className="img-wid" src={Icon} alt="" />
                        <p>{val.title}</p>
                      </div>
                    );
                  })}
                  <div className="btn">
                    <button 
                      onClick={scrollToBottom}
                      className="btn btn-outline custom-btn">
                      GET STARTED
                    </button>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <div>
                    <img className="img-title" src={Curve} alt="img" />
                    <h3 className="title">$ 100/mo</h3>
                  </div>
                 
                   {PricingTiersList2.map((val) => {
                    return (
                      <div className="icon-text">
                        <img className="img-wid" src={Icon} alt="" />
                        <p>{val.title}</p>
                      </div>
                    );
                  })}
                  <div className="btn">
                    <button
                      onClick={scrollToBottom}
                      type="button"
                      className="btn btn-outline custom-btn-2"
                    >
                      GET STARTED
                    </button>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <div>
                    <img className="img-title" src={Curve} alt="img" />
                    <h3 className="title">Contact Us</h3>
                  </div>

                  {PricingTiersList3.map((val) => {
                    return (
                      <div className="icon-text">
                        <img className="img-wid" src={Icon} alt="" />
                        <p>{val.title}</p>
                      </div>
                    );
                  })}

                  
                  <div className="btn">
                    <button
                      onClick={scrollToBottom}
                      type="button"
                      className="btn btn-outline custom-btn"
                    >
                      GET STARTED
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SeventhSection