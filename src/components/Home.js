import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillTrashFill } from "react-icons/bs";
import { BiSpa, BiCut } from "react-icons/bi";
import { FaCertificate, FaElementor } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import Avocado from "../img/Avocado.webp";
import vocado4 from "../img/vocado4.jpg";
import vocado5 from "../img/vocado5.jpg";
import vocado6 from "../img/vocado6.jpg";
import vocado8 from "../img/vocado8.jpg";
import precooling from "../img/precooling.jpg";
import logo from "../img/logo@2x.png";
import pic from "../img/ineza-house-logo.jpg";
import book from "../img/book.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  useEffect(() => {
    AOS.init({duration: 2500});
  }, []);
  return (
    <>
      <section className="topHeader overlay">
        <div className="headerText">
          <p>Top Avocado Exporters in Kenya</p>
          <h1>Your Trusted Reliable Avocado Exporter in Kenya</h1>
        </div>
      </section>
      {/* ORGANIC FARMING */}
      <section className="content" data-aos="fade-left">
        <div className="header">
          <h1>Avocado Precooling</h1>
          <p>
            Avocado Is our top exporting fruit. Our main varieties are Hass
            avocado, Fuerte Avocado
          </p>
        </div>
        <Container>
          <Row>
            <Col className="text-center">
              <img src={Avocado} alt="" />
              <h2>Long Shelf Life guaranteed</h2>
              <p>The avocados stay fresh throughout the supply chain.</p>
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
      {/* Freshela Exports Process */}
      <section className="freshela" data-aos="fade-right">
        <div className="freshelaHeader">
          <h1 className="boxHeader text-center mb-5">
            Freshela Export Process
          </h1>
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
                  <h2>
                    <BsFillTrashFill className="boxIcon" />
                    &nbsp;&nbsp;Guarantees
                  </h2>
                  <p>We guarantee quality and optimum maturity of avocados.</p>
                </div>
                <div className="box">
                  <h2>
                    <BiSpa className="boxIcon" />
                    &nbsp;&nbsp;Happy Farmers
                  </h2>
                  <p>
                    Our partners farmers are proud and happy working with us!.
                  </p>
                </div>
                <div className="box">
                  <h2>
                    <BiCut className="boxIcon" />
                    &nbsp;&nbsp;Sourcing
                  </h2>
                  <p>
                    Source avocados from our company farms and partner farms.
                  </p>
                </div>
                <div className="box">
                  <h2>
                    <FaCertificate className="boxIcon" />
                    &nbsp;&nbsp;pricing
                  </h2>
                  <p>We give competitive pricing to our customers.</p>
                </div>
                <div className="box">
                  <h2>
                    <FaElementor className="boxIcon" />
                    &nbsp;&nbsp;Guaranteed Supply
                  </h2>
                  <p>A line about the service you've mentioned above.</p>
                </div>
              </div>
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
              <h5>LIFESTYLE FACTOR</h5>
              <p>
                Turnip greens yarrow ricebean rutabaga endive cauliflower sea
                lettuce kohlrabi amaranth water spinach avocado daikon napa
                cabbage.
              </p>
            </Col>
            <Col className="text-center">
              <img src={vocado5} alt="avocado" className="productImg" />
              <h5>CONSERVING THE WEIGHT OF THE AVOCADO</h5>
              <p>Preventing softening water loss and wilting.</p>
            </Col>
            <Col className="text-center">
              <img src={vocado6} alt="avocado" className="productImg1" />
              <h5>YOUR FAVORITE FRUIT</h5>
              <p>
                We extract avocado from farmers and export it to the four
                corners of the world.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Avocado Precooling */}
      <section className="freshela mb-5">
        <Container>
          <Row>
            <Col>
              <h1 className="boxHeader text-center">Avocado Precooling</h1>
              <div className="boxes">
                <div className="box">
                  <h2>
                    <BiSpa className="boxIcon" />
                    &nbsp;&nbsp;Long Shelf Life guaranteed
                  </h2>
                  <p>The avocados stay fresh throughout the supply chain..</p>
                </div>
                <div className="box">
                  <h2>
                    <BsFillTrashFill className="boxIcon" />
                    &nbsp;&nbsp;Conserving weight of the avocados
                  </h2>
                  <p>
                    Our partners farmers are proud and happy working with us!.
                  </p>
                </div>
                <div className="box">
                  <h2>
                    <BiCut className="boxIcon" />
                    &nbsp;&nbsp;Guaranteed avocado freshness
                  </h2>
                  <p>
                    The freshness of the avocados is guaranteed for a long
                    time..
                  </p>
                </div>
                <div className="box">
                  <h2>
                    <FaCertificate className="boxIcon" />
                    &nbsp;&nbsp;Quality to customers
                  </h2>
                  <p>
                    Customers stay top of the market because of the high quality
                    of our avocados..
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <img src={precooling} alt="avocado" className="freshelaImg" data-aos="flip-left"/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Question and Answers */}
      <section className="freshela mb-5">
        <Container>
          <Row className="question">
            <Col>
              <img src={book} alt="avocado" className="freshelaImg" data-aos="flip-right"/>
            </Col>
            <Col className="mt-5">
              <h1 className="boxHeader text-center">Questions & Answers</h1>
              <p className="p1">
                Use these paragraphs to focus on the topic in the headline. Make
                sure you keep it short and attractive.
              </p>
              <div className="article">
                <div className="article1">
                  {data.map((item, i) => (
                    <>
                      <div className="title" onClick={() => toggle(i)}>
                        <h2 className={selected === i ? "green" : "grey"}>
                          {selected === i ? (
                            <MdOutlineKeyboardArrowDown />
                          ) : (
                            <MdOutlineKeyboardArrowRight />
                          )}
                          {item.question}
                        </h2>
                        <span></span>
                      </div>
                      <div
                        className={selected === i ? "answer show" : "answer"}
                      >
                        <p>{item.answer}</p>
                      </div>
                    </>
                  ))}
                </div>
              </div>
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
                <h1 className="footerLink2">Quick Links</h1>
                <li>
                  <NavLink className="navLink" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navLink" to="/about">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navLink" to="/precooling">
                    Avocado Precooling
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navLink" to="/sourcing">
                    Avocado Sourcing
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navLink" to="/contact">
                    Contact
                  </NavLink>
                </li>
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
const data = [
  {
    id: 1,
    question: "What kind of fruits do you specialize in?",
    answer:
      "Avocado Is our top exporting fruit. Our main varieties are Hass avocado, Fuerte Avocado",
  },
  {
    id: 2,
    question: "Is your company licensed?",
    answer: "YES. We are Licensed to export from Kenya.",
  },
];
export default Home;
