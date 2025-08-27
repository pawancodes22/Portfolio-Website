import { Container, Row, Col } from "react-bootstrap";

import { useState, useEffect } from "react";

import headerImg from "../../assets/img/header-img.svg";

import { ArrowRightCircle } from "react-bootstrap-icons";

import "./index.css";

const Banner = () => {
  const rotateArray = [
    "React",
    "Node JS",
    "Mongo DB",
    "Sqlite",
    "HTML",
    "CSS",
    "Javascript",
    "Tailwind",
    "Redux",
    "Git",
  ];
  const [activeArrayIndex, setActiveArrayIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(
    rotateArray[activeArrayIndex].length
  );
  const [currentWord, setCurrentWord] = useState(rotateArray[0]);
  const [delta, setDelta] = useState(5000);
  useEffect(() => {
    const timer = setInterval(alterWord, delta);
    return () => clearInterval(timer);
  }, [delta]);

  useEffect(() => {
    // setCurrentIndex(1)
    if (isDeleting) {
      setCurrentWord(rotateArray[activeArrayIndex]);
      setCurrentIndex(rotateArray[activeArrayIndex].length);
      // setIsDeleting(false)
      setDelta(5000);
    } else {
      setCurrentWord(rotateArray[activeArrayIndex].slice(0, 1));
      setCurrentIndex(1);
      setDelta(1000);
    }
  }, [activeArrayIndex]);

  const alterWord = () => {
    if (isDeleting) {
      const alteredWord = rotateArray[activeArrayIndex].slice(0, currentIndex);
      setCurrentWord(alteredWord);
      setDelta((prev) => prev / 2);
      setCurrentIndex((prev) => prev - 1);
      if (alteredWord === "") {
        setActiveArrayIndex((prev) => (prev + 1) % rotateArray.length);
        setIsDeleting(false);
      }
    } else {
      const alteredWord = rotateArray[activeArrayIndex].slice(0, currentIndex);
      setCurrentWord(alteredWord);
      setDelta((prev) => prev - 70);
      if (alteredWord === rotateArray[activeArrayIndex]) {
        setIsDeleting(true);
        setDelta(5000);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    }
  };

  return (
    <section className="banner-bg" id="banner">
      <Container>
        <Row>
          <Col xs={12} lg={8} xl={7}>
            <span className="banner-welcome">Welcome to Portfolio</span>
            <h1 className="intro-h1">
              Hello! I'm Pawan, a skilled MERN stack developer.
            </h1>
            <h2>My skills include {currentWord}</h2>
            <p className="header-para">
              Full-Stack Developer skilled in React.js, Node.js, Express.js, and
              MongoDB, building dynamic web applications, and real-time features
              with clean, maintainable code. Skilled in building RESTful APIs,
              managing databases .
            </p>
            <a href="#contact-us" className="lets-connect-btn">
              Let's Connect
              <ArrowRightCircle />
            </a>
          </Col>
          <Col
            xs={12}
            lg={4}
            xl={5}
            className="d-flex justify-content-center mb-md-5"
          >
            <img src={headerImg} className="header-img" alt="header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
