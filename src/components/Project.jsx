import React, {useState} from "react";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Project(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={` box ${isExpanded ? "expandedProject" : "closedProject"}`}
      onClick={handleClick}
    >
      <div className="projects">
        <div className="projectFirstPart">
          <div>
            <h1 className="projectName">{props.name}</h1>
            <h3 className="projectDate">{props.date}</h3>
            <h5 className="projectRole">{props.role}</h5>
          </div>
          <div className="arrowIcon">
            <FontAwesomeIcon
              icon={faAnglesDown}
              className={`arrow ${isExpanded ? "rotate" : ""}`}
            />
          </div>
        </div>
        {isExpanded && (
          <>
            <h5 className="projectMedium">{props.medium}</h5>
            <img
              className="projectsImages"
              src={props.media}
              alt={props.media}
            />
            <p className="projectDescription">{props.description}</p>
            <a
              className="projectLink"
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.link}
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default Project;