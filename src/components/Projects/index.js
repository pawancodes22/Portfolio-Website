import { Container, Row, Col, Tab } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";

import jobbyImg from "../../assets/img/jobbyImg.png";
import nxtTrendz from "../../assets/img/nxtTrendz.jpg";
import nxtWatch from "../../assets/img/nxtWatch.png";
import foodMunch from "../../assets/img/foodMunch.png";

import ProjectCard from "../ProjectCard";

import "./index.css";

const Projects = () => {
  const projects = [
    {
      title: "Jobby App",
      projectLink: "https://pawancjobby.ccbp.tech/",
      imgUrl: jobbyImg,
      description:
        "I created a job-listing website featuring advanced filtering options and detailed job information. Secure authentication and authorization are enabled using JWT tokens, with dynamic data interactions via REST API calls. User-friendly pages for Login, Job Listings, and Job Details are built using React components and React Router for seamless navigation.",
      skills: "React.js, React Router, RESTful APIs, Cookies, Jsonwebtoken",
      loginDetails: 'Project username is "rahul" and password is "rahul@2021".',
    },
    {
      title: "Nxttrendz",
      projectLink: "https://pawanxtrendz.ccbp.tech/",
      imgUrl: nxtTrendz,

      description:
        "I developed a cutting-edge e-commerce platform inspired by Amazon and Flipkart. The platform includes pages for Login, Products, and Product details, built with React Router, React components, form inputs, and event handlers. Secure authentication and authorization are enabled using JWT tokens, with dynamic data interactions via REST API calls.",
      skills: "React.js, React Router, RESTful APIs, Cookies, Jsonwebtoken",
      loginDetails: 'Project username is "rahul" and password is "rahul@2021".',
    },
    {
      title: "NxtWatch",
      projectLink: "http://thenxtwatch.ccbp.tech/",
      imgUrl: nxtWatch,

      description:
        "I developed the Nxt Watch platform, a YouTube-inspired application where users can access various video categories, such as Trending, Gaming, and Saved videos, and search for specific content while customizing the visual theme. Crafted a responsive UI with React components for pages like Login, Home, Trending, Gaming, and Saved videos, utilizing event handlers and form inputs. Established user authentication through username/password input and HTTP API calls, maintaining login state with JWT tokens and local storage.",
      skills: "React.js, React Router, RESTful APIs, Cookies, Jsonwebtoken",
      loginDetails: 'Project username is "rahul" and password is "rahul@2021".',
    },
  ];
  const projectsTab2 = [
    {
      title: "Restaurant App",
      projectLink: "https://pawancodes.ccbp.tech/",
      imgUrl: foodMunch,
    },
  ];
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h1 className="text-center">Projects</h1>
            <p className="proj-para mb-5">
              I have successfully developed and deployed several projects
              utilizing my proficiency in HTML, CSS, JavaScript, and
              React.js.These projects highlight my expertise in building dynamic
              and responsive user interfaces, API integration, routing, and
              implementing secure authentication and authorization using JWT
              (JSON Web Token).
            </p>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Nav variant="pills" className="flex-row justify-content-center">
                <Nav.Item className="project-nav-item nav-item-1">
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item className="project-nav-item">
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item className="project-nav-item nav-item-3">
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} project={project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="py-5">
                    <p className="text-center">Place to add more projects</p>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="py-5">
                    <p className="text-center">Place to add more projects</p>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
