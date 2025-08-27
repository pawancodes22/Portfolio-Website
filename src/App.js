import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "../src/components/Navbar";

import Banner from "../src/components/Banner";

import Skills from "../src/components/Skills";

import Projects from "./components/Projects";

import Contact from "./components/Contact";

import Footer from "./components/Footer";

import Experience from "./components/Experience";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
