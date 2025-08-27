import { Container, Row, Col, Tab } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";

import jobbyImg from "../../assets/img/jobbyImg.png";
import nxtTrendz from "../../assets/img/nxtTrendz.jpg";
import nxtWatch from "../../assets/img/nxtWatch.png";
import foodMunch from "../../assets/img/foodMunch.png";
import chatApplication from "../../assets/img/chatApplication.png";
import busBooking from "../../assets/img/busBooking.png";
import iottIcon from "../../assets/img/iottIcon.png";
import waymaartIcon from "../../assets/img/waymaartIcon.png";
import hotelIcon from "../../assets/img/hotelIcon.png";
import githubIcon from "../../assets/img/githubIcon.png";

import ProjectCard from "../ProjectCard";

import "./index.css";

const Experience = () => {
  const projectsTab1 = [
    {
      title: "IOTT",
      projectLink: "https://iott.co.in",
      imgUrl: iottIcon,
      description:
        "Worked in a team to develop an OTT platform, fixing UI/UX issues and improving user experience by adding many additional features to the OTT platform.",
      skills: "ReactJS,React Router, Redux, CSS, RESTful APIs",
    },
    {
      title: "Waymaart",
      projectLink: "https://waymaart.nssorg.com/",
      imgUrl: waymaartIcon,
      description:
        "Note: APIs are accessible on weekdays (office working days), as the Tomcat server is manually activated during working hours.",
      skills: "ReactJS, React Router, Redux, Tailwind, RESTful APIS",
      otherDetails:
        "Note: APIs are active on weekdays (office working days) as the Tomcat server is started manually.",
    },
    {
      title: "Hotel Management",
      projectLink: "https://web.nssorg.com/",
      imgUrl: hotelIcon,
      description:
        "Developed a UI to track room availability, user reservations, and guest occupancy. Integrated APIs to enable room booking, advance payments, additional services, and checkout for a seamless booking experience.",
      skills:
        "ReactJS, React Router, Authentication, Redux, Tailwind, RESTful APIS",
      otherDetails:
        "Note: APIs are active on weekdays (office working days) as the Tomcat server is started manually. Project credentials are kept secure to avoid unintended data changes, but the application can be demonstrated live during interviews.",
    },
  ];
  // const projectsTab2 = [
  //   {
  //     title: "Nxttrendz",
  //     projectLink: "https://pawanxtrendz.ccbp.tech/",
  //     imgUrl: nxtTrendz,

  //     description:
  //       "I developed a cutting-edge e-commerce platform inspired by Amazon and Flipkart. The platform includes pages for Login, Products, and Product details, built with React Router, React components, form inputs, and event handlers. Secure authentication and authorization are enabled using JWT tokens, with dynamic data interactions via REST API calls.",
  //     skills: "React.js, React Router, RESTful APIs, Cookies, Jsonwebtoken",
  //     loginDetails: 'Project username is "rahul" and password is "rahul@2021".',
  //   },
  //   {
  //     title: "NxtWatch",
  //     projectLink: "http://thenxtwatch.ccbp.tech/",
  //     imgUrl: nxtWatch,

  //     description:
  //       "I developed the Nxt Watch platform, a YouTube-inspired application where users can access various video categories, such as Trending, Gaming, and Saved videos, and search for specific content while customizing the visual theme. Crafted a responsive UI with React components for pages like Login, Home, Trending, Gaming, and Saved videos, utilizing event handlers and form inputs. Established user authentication through username/password input and HTTP API calls, maintaining login state with JWT tokens and local storage.",
  //     skills: "React.js, React Router, RESTful APIs, Cookies, Jsonwebtoken",
  //     loginDetails: 'Project username is "rahul" and password is "rahul@2021".',
  //   },
  // ];

  return (
    <section className="projects" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <h1 className="text-center">Experience</h1>
            <p style={{ textAlign: "justify" }} className="proj-para mb-5">
              Worked as a Frontend Developer at Nithish Software Solutions on
              projects including an OTT platform, an e-commerce platform, and a
              hotel management system. Built responsive, reusable UI components
              and integrated them with RESTful APIs. Enhanced user experience
              and delivered production-ready features using React.js, Redux,
              Tailwind CSS.
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
                    {projectsTab1.map((project, index) => (
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

export default Experience;
