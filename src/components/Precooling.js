import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiCut, BiSpa } from "react-icons/bi";
import { BsFillTrashFill, BsCalendarCheck } from "react-icons/bs";
import {
  FaCertificate,
  FaSeedling,
  FaHandHoldingHeart,
  FaStopwatch,
} from "react-icons/fa";
import about from "../css_modules/about.module.css";
import precooling from "../img/precooling.jpg";
import { PreFormGroup } from "./Form";
import contact from "../css_modules/contact.module.css";
import pic from "../img/ineza-house-logo.jpg";
import { NavLink } from "react-router-dom";
const Precooling = () => {
  return (
    <div>
      <section className={about.Header}>
        <header className={about.headerText}>
          <h1 className={about.aboutText}>Avocado Precooling</h1>
        </header>
      </section>
      <section className="freshela mt-5 mb-5">
        <Container>
          <Row className="freshelaBox">
            <Col>
              <img src={precooling} alt="avocado" className="freshelaImg" />
            </Col>
            <Col>
              <div className="preBoxes">
                <div className="preBox">
                  <h2>
                    <BiSpa className="preBoxIcon" />
                    &nbsp;&nbsp;Long Shelf Life guaranteed
                  </h2>
                  <p>The avocados stay fresh throughout the supply chain..</p>
                </div>
                <div className="preBox">
                  <h2>
                    <BsFillTrashFill className="preBoxIcon" />
                    &nbsp;&nbsp;Conserving weight of the avocados
                  </h2>
                  <p>
                    Our partners farmers are proud and happy working with us!.
                  </p>
                </div>
                <div className="preBox">
                  <h2>
                    <BiCut className="preBoxIcon" />
                    &nbsp;&nbsp;Guaranteed avocado freshness
                  </h2>
                  <p>
                    The freshness of the avocados is guaranteed for a long
                    time..
                  </p>
                </div>
                <div className="preBox">
                  <h2>
                    <FaCertificate className="preBoxIcon" />
                    &nbsp;&nbsp;Quality to customers
                  </h2>
                  <p>
                    Customers stay top of the market because of the high quality
                    of our avocados..
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={contact.sectionForm}>
        <Container>
          <Row className={contact.sectionForm1}>
            <Col xs={8} lg={8} sm={8}>
              <h1 className={contact.preForm}>Request a call back</h1>
              <PreFormGroup/>
            </Col>
            <Col className="mt-5">
              <div className="preBox1">
                <div className="preBox">
                  <h2>
                    <BsCalendarCheck className="preBoxIcon" />
                    &nbsp;&nbsp;Long Shelf Life guaranteed
                  </h2>
                  <p>The avocados stay fresh throughout the supply chain..</p>
                </div>
                <div className="preBox">
                  <h2>
                    <FaSeedling className="preBoxIcon" />
                    &nbsp;&nbsp;Conserving weight of the avocados
                  </h2>
                  <p>
                    Our partners farmers are proud and happy working with us!.
                  </p>
                </div>
                <div className="preBox">
                  <h2>
                    <FaHandHoldingHeart className="preBoxIcon" />
                    &nbsp;&nbsp;Guaranteed avocado freshness
                  </h2>
                  <p>
                    The freshness of the avocados is guaranteed for a long time..
                  </p>
                </div>
                <div className="preBox">
                  <h2>
                    <FaStopwatch className="preBoxIcon" />
                    &nbsp;&nbsp;Quality to customers
                  </h2>
                  <p>
                    Customers stay top of the market because of the high quality
                    of our avocados..
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="footer">
        <Container>
          <Row>
            <Col>
              <h1 className="footerLink1">Location</h1>
              <ul>
                <li>Chalbi condominium. Ring Road. Room 1B, Kilimani</li>
                <li>+250 785 084 614</li>
                <li>+254 745 904 125</li>
              </ul>
              <section className="footerMap">
                <iframe
                  title="google map"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=chalbi%20condominium&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                />
              </section>
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
    </div>
  );
};
export default Precooling;
