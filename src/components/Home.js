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
            <h3>We sell Avocado</h3>
            <p>We provide avocado to your place.</p>
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
            <h3>Fresh Avocado</h3>
            <p>We ship Avocado.</p>
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
            <h3>Export Avocado</h3>
            <p>Exporting Avocado from Nairobi is our work.</p>
            <button className="explore">Explore</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* ORGANIC FARMING */}
      <section className="content">
        <div className="header">
          <h1>ORGANIC FARMING</h1>
          <p>Our process grape silver beet</p>
        </div>
        <Container>
          <Row>
            <Col className="text-center">
              <img src={Avocado} alt="" />
              <h2>YOUR FAVORITE FRUIT</h2>
              <p>
                We extract avocado from farmers and export it to the four
                corners of the world.
              </p>
              <button className="exploreButton">Explore</button>
            </Col>
            <Col className="text-center">
              <img src={Avocado} alt="" />
              <h2>OUR FARM PRODUCT</h2>
              <p>
                With us we shall make sure that green fruits is at your
                disposal.
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
              <p>YOUR FAVORITE FRUIT</p>
            </Col>
            <Col className="text-center">
              <img src={vocado5} alt="avocado" className="productImg" />
              <p>YOUR FAVORITE FRUIT</p>
            </Col>
            <Col className="text-center">
              <img src={vocado6} alt="avocado" className="productImg1" />
              <p>YOUR FAVORITE FRUIT</p>
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
