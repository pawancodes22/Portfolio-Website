import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import nodeIcon from "../../assets/img/nodeIcon.png";
import mongodbIcon from "../../assets/img/mongodbIcon.png";
import reactIcon from "../../assets/img/reactIcon.png";
import githubIcon from "../../assets/img/githubIcon.png";

import { Container, Col, Row } from "react-bootstrap";
import "./index.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Skills = () => {
  return (
    <section id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p className="skill-para">
                <span className="fw-bold text-white">Front-End:</span> HTML/CSS,
                Bootstrap, JavaScript, React.js, Tailwind, Redux <br />{" "}
                <span className="fw-bold text-white">Back-End:</span> Node.js,
                Express.js <br />
                <span className="fw-bold text-white">Databases:</span> SQLite,
                MongoDB <br />
                <span className="fw-bold text-white">Others: </span>
                Version Control System- Git/GitHub
              </p>
              <Carousel responsive={responsive} infinite={true}>
                <div>
                  <img
                    className="carousel-img"
                    src={reactIcon}
                    alt="carousel"
                  />
                  <h5 className="text-center mt-4">Front End Development</h5>
                </div>
                <div>
                  <img className="carousel-img" src={nodeIcon} alt="carousel" />
                  <h5 className="text-center mt-4">Back End Development</h5>
                </div>
                <div>
                  <img
                    className="carousel-img"
                    src={mongodbIcon}
                    alt="carousel"
                  />
                  <h5 className="text-center mt-4">Databases</h5>
                </div>
                <div>
                  <img
                    className="carousel-img"
                    src={githubIcon}
                    alt="carousel"
                  />
                  <h5 className="text-center mt-4">Github</h5>
                </div>
                {/* <div>
                  <img className="carousel-img" src={meter1} alt="image" />
                  <h5 className="text-center mt-4">Github</h5>
                </div> */}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
