import React from "react";

function Project(props) {

  return (
    <div className="projects main">
      <h1 className="projectName">{props.name}</h1>
      <h3 className="projectDate">{props.date}</h3>
      <h5 className="projectRole">{props.role}</h5>
      <h5 className="projectMedium">{props.medium}</h5>
      <img className="projectsImages" src={props.media} alt={props.media} />
      <p className="projectDescription">{props.description}</p>
      <a
        className="projectLink"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.link}
      </a>
    </div>
  );
}

export default Project;
