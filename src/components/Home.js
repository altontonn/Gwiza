import React from "react";
import Carousel  from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pic1 from '../img/slider-img6-2.webp';
import vocado1 from '../img/vocado1.jpg';
import vocado2 from '../img/vocado2.jpg';
import Avocado from '../img/Avocado.webp';

const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-2"
            src={pic1}
            alt="First slide"
          />
          <Carousel.Caption className="caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button className="explore">Explore</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section className="content">
        <div className="header">
          <h1>ORGANIC FARMING</h1>
          <p>Our process grape silver beet</p>
        </div>
        <Container>
          <Row>
            <Col>
              <img src={Avocado} alt="" />
              <h2>LIFESTYLE FACTORS</h2>
              <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage.</p>
            </Col>
            <Col>
              <img src={Avocado} alt="" />
              <h2>LIFESTYLE FACTORS</h2>
              <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage.</p>
            </Col>
            <Col>
              <img src={Avocado} alt="" />
              <h2>LIFESTYLE FACTORS</h2>
              <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Home;
