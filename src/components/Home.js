import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillTrashFill } from "react-icons/bs";
import { BiSpa, BiCut } from "react-icons/bi";
import { FaCertificate, FaElementor } from "react-icons/fa";
import Avocado from "../img/Avocado.webp";
import vocado4 from "../img/vocado4.jpg";
import vocado5 from "../img/vocado5.jpg";
import vocado6 from "../img/vocado6.jpg";
import vocado8 from "../img/vocado8.jpg";
import precooling from "../img/precooling.jpg";
import logo from "../img/logo@2x.png";
import pic from "../img/ineza-house-logo.jpg";

const Home = () => {
  return (
    <>
      <section className="topHeader overlay">
        <div className="headerText">
          <p>Top Avocado Exporters in Kenya</p>
          <h1>Your Trusted Reliable Avocado Exporter in Kenya</h1>
        </div>
      </section>
      {/* ORGANIC FARMING */}
      <section className="content">
        <div className="header">
          <h1>Avocado Precooling</h1>
          <p>Avocado Is our top exporting fruit. Our main varieties are Hass avocado, Fuerte Avocado </p>
        </div>
        <Container>
          <Row>
            <Col className="text-center">
              <img src={Avocado} alt="" />
              <h2>Long Shelf Life guaranteed</h2>
              <p>
                The avocados stay fresh throughout the supply chain.
              </p>
              <button className="exploreButton">Explore</button>
            </Col>
            <Col className="text-center">
              <img src={Avocado} alt="" />
              <h2>Guaranteed avocado freshness</h2>
              <p>
                The freshness of the avocados is guaranteed for a long time.
              </p>
              <button className="exploreButton">Explore</button>
            </Col>
          </Row>
        </Container>
      </section>
      {/* OUR PRODUCTS */}
      <section className="products">
        <div className="header">
          <h1>ORGANIC FARMING</h1>
          <p>Our process grape silver beet</p>
        </div>
        <Container>
          <Row>
            <Col className="text-center">
              <img src={vocado4} alt="avocado" className="productImg" />
              <h5>Quality to customers</h5>
              <p>Customers stay top of the market because of the high quality of our avocados.</p>
            </Col>
            <Col className="text-center">
              <img src={vocado5} alt="avocado" className="productImg" />
              <h5>Conserving weight of the avocado</h5>
              <p>Preventing softening water loss and wilting.</p>
            </Col>
            <Col className="text-center">
              <img src={vocado6} alt="avocado" className="productImg1" />
              <h5>Guaranteed avocado freshness</h5>
              <p>Preventing softening water loss and wilting.</p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Freshela Exports Process */}
      <section className="freshela mb-5">
        <div className="freshelaHeader">
          <h1 className="boxHeader text-center mb-5">Freshela Export Process</h1>
        </div>
        <Container>
          <Row>
            <Col>
              <img src={vocado8} alt="avocado" className="freshelaImg" />
            </Col>
            <Col>
              <h1 className="boxHeader text-center">Avocado Sourcing</h1>
              <div className="boxes">
                <div className="box">
                  <h2><BsFillTrashFill className="boxIcon"/>&nbsp;&nbsp;Guarantees</h2>
                  <p>We guarantee quality and optimum maturity of avocados.</p>
                </div>
                <div className="box">
                  <h2><BiSpa className="boxIcon"/>&nbsp;&nbsp;Happy Farmers</h2>
                  <p>Our partners farmers are proud and happy working with us!.</p>
                </div>
                <div className="box">
                  <h2><BiCut className="boxIcon"/>&nbsp;&nbsp;Sourcing</h2>
                  <p>Source avocados from our company farms and partner farms.</p>
                </div>
                <div className="box">
                  <h2><FaCertificate className="boxIcon"/>&nbsp;&nbsp;pricing</h2>
                  <p>We give competitive pricing to our customers.</p>
                </div>
                <div className="box">
                  <h2><FaElementor className="boxIcon"/>&nbsp;&nbsp;Guaranteed Supply</h2>
                  <p>A line about the service you've mentioned above.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Avocado Precooling */}
      <section className="freshela mb-5">
        <Container>
          <Row>
            <Col>
              <h1 className="boxHeader text-center">Avocado Sourcing</h1>
              <div className="boxes">
                <div className="box">
                  <h2><BiSpa className="boxIcon"/>&nbsp;&nbsp;Long Shelf Life guaranteed</h2>
                  <p>The avocados stay fresh throughout the supply chain..</p>
                </div>
                <div className="box">
                  <h2><BsFillTrashFill className="boxIcon"/>&nbsp;&nbsp;Conserving weight of the avocados</h2>
                  <p>Our partners farmers are proud and happy working with us!.</p>
                </div>
                <div className="box">
                  <h2><BiCut className="boxIcon"/>&nbsp;&nbsp;Guaranteed avocado freshness</h2>
                  <p>The freshness of the avocados is guaranteed for a long time..</p>
                </div>
                <div className="box">
                  <h2><FaCertificate className="boxIcon"/>&nbsp;&nbsp;Quality to customers</h2>
                  <p>Customers stay top of the market because of the high quality of our avocados..</p>
                </div>
              </div>
            </Col>
            <Col>
              <img src={precooling} alt="avocado" className="freshelaImg" />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Logo section */}
      <Container>
        <section className="logo">
          <div className="logoOne">
            <img src={logo} alt="logo" />
          </div>
        </section>
      </Container>
      <section className="footer">
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
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>SERVICES</li>
                <li>CONTACT</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <hr/>
        <Container>
          <div className="copyright">
            <p>Copyright @gwiza - 2022</p>
          </div>
        </Container>
      </section>
    </>
  );
};
export default Home;
