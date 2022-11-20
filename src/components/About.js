import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about from "../css_modules/about.module.css";
import vocado from "../img/vocado4.jpg";
import pic from "../img/ineza-house-logo.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className={about.Header}>
        <header className={about.headerText}>
          <h1 className={about.aboutText}>About us</h1>
        </header>
        <Container className={about.content}>
          <Row className="mt-5">
            <Col>
              <h1 className="mb-2">About Us</h1>
              <p className={about.ptext}>
                Your one-stop for organic fresh fruits and vegetables.Freshela
                is a Kenyan-based company engaging in the sourcing, processing,
                and exporting of fresh produce. By working directly with fresh
                produce growers and cooperatives, We are able to deliver our
                produce within a short lead time. We believe that growers grow,
                and exporters export. That way, our growers are able to do what
                they do best, And in return, we guarantee superior quality
                produce. We specialize in the export of fresh fruits and
                vegetables, serving clients in Europe and Asia, If you are
                looking for locally grown organic produce, we'll be happy to
                serve you.
              </p>
            </Col>
            <Col>
              <img src={vocado} className={about.vocadoImg} alt="avocado" />
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
export default About;
