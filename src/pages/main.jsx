import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/header";
import AboutMe from "../components/aboutme";
const mainPage = () => {
  return (
    <>
      <Header />
      <section className="py-5 mt-2 vh-100">
        <Container>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <img src="/Photos/img2.jpg" alt="" className="img-home" />
            <h4 className="mt-2">Hi, I'm Omar 👨‍💻</h4>
            <h1 className="text-center mt-3">
              Building WebApps <br /> UI/UX Design.
            </h1>
            <p className="mt-3 text-center">
              a Systems Engineer and Front-End Web Developer <br /> with
              knowledge and experience in responsive web design <br /> for Web
              pages and Administrative Software.
            </p>
            <a href="#contact" className="btn btn-dark mt-3 btn-rd">
              Contact Me
            </a>
          </div>
        </Container>
      </section>
      <section id="resume" className="min-vh-100 bg-dark text-white">
        <Container fluid className="min-vh-100">
          <div className="p-5 min-vh-100 d-flex flex-column justify-content-center">
            <div className="content-about">
              <AboutMe />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default mainPage;
