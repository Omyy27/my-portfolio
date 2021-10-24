import React from "react";
import { UilReact } from "@iconscout/react-unicons";
import { UilVuejs } from '@iconscout/react-unicons';
import { UilJavaScript } from '@iconscout/react-unicons';
import { UilHtml5 } from '@iconscout/react-unicons';
import { UilHtml3 } from '@iconscout/react-unicons';
import { UilGithub } from '@iconscout/react-unicons';

const AboutMe = () => {
  return (
    <>
      <div className="content-inner-about">
        <h4 className="fw-bold">About me. 🙋‍♂️</h4>
        <p className="mt-3">
          I am a Systems Engineer, almost graduated from Simón Bolivar
          University in Barranquilla, Colombia. Currently I have experience in
          Front-end web development, I love the design, the details and the
          harmonic UI. Since I was very young I had a passion for technology, as
          well as a great use for it.
        </p>
      </div>

      <div className="content-inner-about">
        <h4 className="fw-bold">Jobs. 👨‍💼</h4>
        <p className="fw-bold mb-0">
          Junior Front-End Developer (Feb - 2021 to Currently)
        </p>
        <p className="mb-0">
          <span class="fw-bold">Company:</span>{" "}
          <a href="https://www.developapp.co/" target="_blank">
            Develop App S.A.S
          </a>
        </p>
        <p>
          <span className="fw-bold">Location:</span> Barranquilla, CO
        </p>
        <p className="fw-bold mb-0">Responsibilities:</p>
        <p>
          Design, planning, analysis and development of administrative web
          platforms. Providing project support. Design user interfaces, propose
          solutions in an active and proactive way.
        </p>
      </div>

      <div className="content-inner-about">
        <h4 className="fw-bold">Technical expertise. 🛠️</h4>
        <div className="d-flex align-items-center mt-3">
          <div className="col-md-2">
            <UilReact size="100" color="#5ED3F3"></UilReact>
          </div>
          <div className="col-md-10">
            <p>
              My most skillful and recent tool is Reac.Js, I've been working
              with it for at least <span className="fw-bold">one-and-a-half years</span>.
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center mt-3">
          <div className="col-md-2">
            <UilVuejs size="100" color="#3FB27F"></UilVuejs>
          </div>
          <div className="col-md-10">
            <p>
                A little bit of Vue.js wouldn't hurt <span className="fw-bold">to get started</span> in the world of Front-End Development.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column mt-3">
            <h5 className="fw-bold"> - Others.</h5>
            <div className="d-flex flex-row justify-content-around align-items-center">
                <div className="d-flex flex-column">
                    <UilJavaScript size="80" color="#F7DF1E"></UilJavaScript>
                    <p className="text-center">JavaScript</p>
                </div>
                <div className="d-flex flex-column">
                    <UilHtml5 size="80" color="#DD4B25"></UilHtml5>
                    <p className="text-center">HTML5</p>
                </div>
                <div className="d-flex flex-column">
                    <UilHtml3 size="80" color="#254BDD"></UilHtml3>
                    <p className="text-center">CSS</p>
                </div>
                <div className="d-flex flex-column">
                    <UilGithub size="80" color="#dddddd"></UilGithub>
                    <p className="text-center">GitHub</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
