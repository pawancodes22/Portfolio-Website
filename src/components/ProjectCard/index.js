import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "./index.css";
const ProjectCard = (props) => {
  const { project } = props;
  const { title, description, imgUrl, projectLink, skills, loginDetails } =
    project;
  const [modalShow, setModalShow] = useState(false);
  return (
    <Col md={4}>
      <div className="project-card-div">
        <div className="project-card-details">
          <h1>{title}</h1>
          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="text-black"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{description}</p>
              <p>
                <span className="fw-bold">Skills Used: </span>
                {skills}
              </p>
              <p>
                <span className="fw-bold">Login Details: </span>
                {loginDetails}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <a
                onClick={() => setModalShow(true)}
                href={projectLink}
                target="_blank"
                className="open-project-btn"
              >
                Open Project
              </a>
            </Modal.Footer>
          </Modal>
          <button onClick={() => setModalShow(true)} className="project-link">
            See More
          </button>
        </div>

        <img src={imgUrl} className="proj-card-img" alt={title} />
      </div>
    </Col>
  );
};

export default ProjectCard;
