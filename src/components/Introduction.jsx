import React from "react";


function Introduction(){
    return (
      <div className="main introduction">
        <div>
          <h5 className="introHey">hey there,</h5>
          <h1 className="introName">I'm Anya!</h1>
        </div>
        <div className="aboutMeDiv">
          <p className="segment">about me</p>
          <h4 className="aboutMeText">
            Welcome to my portfolio website! I am an{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inTextA"
              href="https://shanghai.nyu.edu/academics/majors/interactive-media-arts"
            >
              Interactive Media Arts student
            </a>{" "}
            at{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inTextA"
              href="https://shanghai.nyu.edu"
            >
              New York University Shanghai
            </a>
            , currently residing in Shanghai. I am passionate about Web Design
            and Web Development, especially Front-end Development.{" "}
          </h4>
          <br />
          <h4 className="aboutMeText">
            This Portfolio Website includes cross-medium projects I have worked
            on throughout last couple of years. Right now I am actively
            searching for internships and part-time positions in the field of
            Web Design, UX/UI and Front-End Development.
          </h4>
          <br />
          <h4 className="aboutMeText">
            If you would like to know more about me, you can check out my{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inTextA"
              href="https://drive.google.com/file/d/1ylZsx8a5YqT3r9iVDYC5Ds7nvpIBafbf/view?usp=sharing"
            >
              CV
            </a>
            , or email me:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inTextA"
              href="mailto:zhuanya@nyu.edu"
            >
              zhuanya@nyu.edu
            </a>
            .
          </h4>
        </div>
      </div>
    );
}


export default Introduction;

