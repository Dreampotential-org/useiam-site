import React ,{useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Rectanglefriendsimg from "../../Assets/Rectanglefriendsimg.png";
import { leadCreateApi } from "../../services/helper";
import "./NineSection.css";
import { Alert } from "bootstrap";


export const NineSection = () => {
  const [valuesregi, setValuesregi] = useState({
    phone: "",
    name: "",
    website: "",
    email: "",
  });

  const [errorCreate, setErrorCreate] = useState({});

  function validateregi(value) {
    console.log("valuesregi :- "+JSON.stringify(valuesregi))
    let errorCreate = {};
    if (!valuesregi.name) {
      errorCreate.name = "Name is required";
    } else if (!/^[a-zA-Z]/.test(valuesregi.name)) {
      errorCreate.name = "Name is invalid";
    }
    if (!valuesregi.email) {
      errorCreate.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(valuesregi.email)) {
      errorCreate.email = "Email address is invalid";
    }
    const payload = {
      phone: valuesregi.phone,
      name: valuesregi.name,
      website: valuesregi.website,
      email: valuesregi.email,
    };

    leadCreateApi(payload)
        .then((res) => {
          if (res?.status == 200) {
            console.log("sfdsfgfsdfdf"+JSON.stringify(res))
          } else {
          }
        })
        .catch((err) => {
          //toast(err);
        });
  }  

    const onChangeregi = (event) => {
      event.persist();
      //setErrorCreate(validateregi(valuesregi));
      setValuesregi((valuesregi) => ({
        ...valuesregi,
        [event.target.name]: event.target.value,
      }));
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorCreate(validateregi(valuesregi));
    // alert("Clicked")
  }

  return (
    <div className="">
      <div className="container-fluid">
        <Row>
          <Col md={6} className="p-0">
            <div className="position-relative">
              <div>
                <img
                  className="friends-img position-relative"
                  src={Rectanglefriendsimg}
                  alt="Man"
                />
              </div>
            </div>
          </Col>
          <Col md={6} className="p-0">
            <div className="position-relative">
            <h1 className="heading"> Get Started</h1>
              <div>
              
                <div className="form">
                  <form>
                    <div className="input-container">
                      <label className="first-name">FULL NAME </label>
                      <input
                       onChange={onChangeregi}
                       value={valuesregi.name}
                      style={{height:'40px'}}type="text" name="name" required />
                    
                    </div>
                    <div className="input-container">
                      <label className="email">EMAIL </label>
                      <input 
                        onChange={onChangeregi}
                         value={valuesregi.email}
                      style={{height:'40px'}} type="text" name="email" required />
                    
                    </div>
                    <div className="input-container">
                      <label className="phonenumber">PHONE NUMBER </label>
                      <input 
                       onChange={onChangeregi}
                       value={valuesregi.phone}
                      style={{height:'40px'}} type="number" name="phone" required />
                    
                    </div>
                    <div className="input-container">
                      <label className="website">WEBSITE</label>
                      <input 
                       onChange={onChangeregi}
                       value={valuesregi.website}
                      style={{height:'40px'}}type="text" name="website" required />
                    
                    </div>
                    <div className="button-container">
                      <button className="submit"type="submit" onClick={handleSubmit}> SUBMIT</button>
                    </div>
                  </form>
                </div>
            </div>
            </div>

          </Col>
        </Row>
      </div>
    </div>
  );
};

export default NineSection;
