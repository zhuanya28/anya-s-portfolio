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
            <h1 className="projectName" onClick={handleClick}>{props.name}</h1>
            <h3 className="projectDate">{props.date}</h3>
            <h5 className="projectRole">{props.role}</h5>
            <h5 className="projectMedium">{props.medium}</h5>
          </div>
          <div className="projectFirstPartArrow" onClick={handleClick}>
            <button className="btn btn-secondary btn-arrow">
              <FontAwesomeIcon
                icon={faAnglesDown}
                size="2xl"
                className={`arrow ${isExpanded ? "rotate" : ""}`}
              />
            </button>
          </div>
        </div>
        {isExpanded && (
          <>
            <p className="projectDescription">{props.description}</p>
            {props.link && (
              <div className="button-container">
                <a
                  className="projectLink"
                  href={props.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  type="button"
                >
                  [see the project]
                </a>
                <br></br>
                <img
                  className="projectsImages"
                  src={props.media}
                  alt={props.media}
                />
              </div>
            )}
            {!props.link && (
              <img
                className="projectsImages"
                src={props.media}
                alt={props.media}
              />
            )}
          </>
        )}
      </div>
      <div className="projectLine"></div>
    </div>
  );
}

export default Project;




