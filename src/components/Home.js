import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import vocado1 from "../img/vocado1.jpg";
import vocado2 from "../img/vocado2.jpg";
import Avocado from "../img/Avocado.webp";
import vocado4 from "../img/vocado4.jpg";
import vocado5 from "../img/vocado5.jpg";
import vocado6 from "../img/vocado6.jpg";
import logo from "../img/logo@2x.png";
import pic from "../img/ineza-house-logo.jpg";

const Home = () => {
  return (
    <>
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-2 imgCaption"
            src={vocado4}
            alt="First slide"
          />
          <Carousel.Caption className="caption">
            <h3>Quality Guarantees</h3>
            <p>We guarantee quality and optimum maturity of avocados.</p>
            <button className="explore">Explore</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-2 imgCaption"
            src={vocado1}
            alt="Second slide"
          />

          <Carousel.Caption className="caption">
            <h3>Happy Farmers</h3>
            <p>Our partners farmers are proud and happy working with us!</p>
            <button className="explore">Explore</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-2 imgCaption"
            src={vocado2}
            alt="Third slide"
          />

          <Carousel.Caption className="caption">
            <h3>Sourcing</h3>
            <p>source avocados from our company farms and partner farms.</p>
            <button className="explore">Explore</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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
                <li>+254 111 600 492</li>
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
