import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import "./index.css";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    message: "",
  });

  const [didSentMail, setSentMailStatus] = useState(false);

  const setFormValue = (field, value) => {
    setFormDetails({ ...formDetails, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSentMailStatus(true);
    setFormDetails({});
    console.log(formDetails);
  };

  return (
    <section className="mt-5" id="contact-us">
      <Container>
        (
        <Row>
          <Col size={12} md={6}>
            <img src={contactImg} className="contact-img" alt="Contact" />
          </Col>
          {!didSentMail && (
            <Col
              size={12}
              md={6}
              className="d-flex flex-column justify-content-center"
            >
              <form
                onSubmit={handleSubmit}
                className="d-flex flex-column align-items-center"
              >
                <input
                  type="text"
                  className="contact-input-item"
                  placeholder="First Name"
                  value={formDetails.firstName}
                  onChange={(e) => setFormValue("firstName", e.target.value)}
                />
                <input
                  type="text"
                  className="contact-input-item"
                  placeholder="Last Name"
                  value={formDetails.lastName}
                  onChange={(e) => setFormValue("lastName", e.target.value)}
                />
                <input
                  type="text"
                  className="contact-input-item"
                  placeholder="Phone Number"
                  value={formDetails.phoneNumber}
                  onChange={(e) => setFormValue("phoneNumber", e.target.value)}
                />
                <textarea
                  rows="6"
                  className="contact-input-item"
                  placeholder="Message"
                  value={formDetails.message}
                  onChange={(e) => setFormValue("message", e.target.value)}
                />

                <button type="submit" className="contact-button ">
                  Send
                </button>
              </form>
            </Col>
          )}
          {didSentMail && (
            <Col
              size={12}
              md={6}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <h1>Thank you for your message!</h1>
              <p>I'll get back to you soon.</p>
              <p>This is just a dummy form, no messages are sent</p>
              <button
                className="send-another-msg-btn"
                onClick={() => setSentMailStatus(false)}
              >
                Send Another Message
              </button>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
