import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GrLocation, GrPhone, GrMailOption } from "react-icons/gr";
import { BsClock } from "react-icons/bs";
import about from "../css_modules/about.module.css";
import contact from "../css_modules/contact.module.css";
import { FormGroup } from "./Form";
import pic from "../img/ineza-house-logo.jpg";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section className={about.Header}>
        <header className={about.headerText}>
          <h1 className={about.aboutText}>contact</h1>
        </header>
      </section>
      <section className={contact.mapContent}>
        <iframe
          className={contact.frameMap}
          title="google map"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=chalbi%20condominium&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        />
      </section>
      <section className={contact.form}>
        <Container>
          <Row>
            <Col>
              <h1 className={contact.header}>Contact Us</h1>
              <p className={contact.text}>
                If you would like to know more about our policies, you can
                consult our Terms and Conditions. You will also be able to
                follow your order (tracking number will be provided in an e-mail
                after ordering). You wish to return some items? Click here.
              </p>
              <div className={contact.contactIcons}>
                <GrLocation className={contact.icons}/>
                <div className={contact.contactBlock}>
                  <h2 className="fs-5">Address</h2>
                  <p className={contact.text}>
                    Chalbi Condominiums
                    PQ5P+QM5, Nairobi
                  </p>
                </div>
              </div>
              <div className={contact.contactIcons}>
                <GrPhone className={contact.icons}/>
                <div className={contact.contactBlock}>
                  <h2 className="fs-5">Phone</h2>
                  <p className={contact.text}>+254 111 600 492</p>
                </div>
              </div>
              <div className={contact.contactIcons}>
                <BsClock className={contact.icons}/>
                <div className={contact.contactBlock}>
                  <h2 className="fs-5">Open Hours</h2>
                  <p className={contact.text}>Monday to Friday 09:30 - 17:30</p>
                  <p className={contact.text}>Saturday & Sunday 10:00 - 15:00</p>
                </div>
              </div>
              <div className={contact.contactIcons}>
                <GrMailOption className={contact.icons}/>
                <div className={contact.contactBlock}>
                  <h2 className="fs-5">Email</h2>
                  <p className={contact.text}>Comming Soon</p>
                </div>
              </div>
            </Col>
            <Col>
              <h1 className={contact.header}>Send Us A Message</h1>
              <FormGroup />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="footer mt-5">
        <Container>
          <Row>
            <Col>
              <h1>Location</h1>
              <ul>
                <li>Chalbi condominium. Ring Road. Room 1B, Kilimani</li>
                <li>domain: coming soon</li>
                <li>+250 785 084 614</li>
                <li>+254 745 904 125</li>
              </ul>
            </Col>
            <Col className="text-center">
              <img src={pic} className="imgLogo" alt="Gwiza logo" />
            </Col>
            <Col className="text-center">
              <ul>
                <h1 className="footerLink2">Quick Links</h1>
                <li><NavLink className="navLink" to="/">Home</NavLink></li>
                <li><NavLink className="navLink" to="/about">About Us</NavLink></li>
                <li><NavLink className="navLink" to="/precooling">Avocado Precooling</NavLink></li>
                <li><NavLink className="navLink" to="/sourcing">Avocado Sourcing</NavLink></li>
                <li><NavLink className="navLink" to="/contact">Contact</NavLink></li>
              </ul>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container>
          <div className="copyright">
            <p>Copyright @gwiza - 2022</p>
          </div>
        </Container>
      </section>
    </>
  );
};
export default Contact;
