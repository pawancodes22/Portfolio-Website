import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

import "./index.css";

const Footer = () => {
  return (
    <footer className="footer-bg">
      <Container>
        <Row>
          <Col
            xs={3}
            className="d-flex flex-column justify-content-center align-items-start"
          >
            <img src={logo} alt="logo" className="logo-sizer" />
          </Col>
          <Col
            xs={9}
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="social-icons mb-0">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/pawansaibalivada/"
              >
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="facebook" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="instagram" />
              </a>
            </div>
          </Col>
          <Col
            xs={12}
            md={3}
            className="d-flex justify-content-center mt-3 mt-md-0"
          >
            <div className="d-flex align-items-center">
              <p className="m-0">&copy; 2025 All rights reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
