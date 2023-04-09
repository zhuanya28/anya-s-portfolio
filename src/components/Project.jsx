import React, {useState} from "react";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Project(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={` box ${isExpanded ? "expandedProject" : "closedProject"}`}>
      <div className="projects">
        <div className="projectFirstPart">
          <div className="projectFirstPartInfo">
            <h1 className="projectName">{props.name}</h1>
            <h3 className="projectDate">{props.date}</h3>
            <h5 className="projectRole">{props.role}</h5>
            <h5 className="projectMedium">{props.medium}</h5>
          </div>
          <div className="projectFirstPartArrow" onClick={handleClick}>
            <FontAwesomeIcon
              icon={faAnglesDown}
              size="2xl"
              className={`arrow ${isExpanded ? "rotate" : ""}`}
            />
          </div>
        </div>
        {isExpanded && (
          <>
            <p className="projectDescription">{props.description}</p>
            <a
              className="projectLink btn btn-outline-danger"
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              type="button"
            >
              try it out!
            </a>
            <img
              className="projectsImages"
              src={props.media}
              alt={props.media}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Project;