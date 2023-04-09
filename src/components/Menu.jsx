import Introduction from "./Introduction";
import { webDevNDes, digitalArtNGraphDesign, visualArts } from "../data";
import Project from "./Project";
import React, { useState } from "react";

function fillProjects() {
  return (

     webDevNDes.map((project) => (
        <Project
          id={project.id}
          name={project.name}
          date={project.date}
          role={project.role}
          media={project.media}
          description={project.description}
          link={project.link}
        />
      ))
  );
}

function fillDigArtNGraphDesProjects(currentSection) {
  return (
    digitalArtNGraphDesign.map((project) => (
        <Project
          id={project.id}
          name={project.name}
          date={project.date}
          role={project.role}
          medium={project.medium}
          media={project.media}
          description={project.description}
          link={project.link}
        />
      ))
      
   
  );
}

function fillVisualArtsProjects() {
  return visualArts.map((project) => (
    <Project
      id={project.id}
      name={project.name}
      date={project.date}
      medium={project.medium}
      media={project.media}
      description={project.description}
    />
  ));

}

function Menu() {
  const [activeLink, setActiveLink] = useState("home");
  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  return (
    <div className="menuDiv">
      <ul className="menuUl">
      <li className="menuLi nameInMenu">
        Anya Zh.
      </li>
        <li className="menuLi">
          <button
            onClick={() => handleLinkClick("home")}
            className={`btn btn-outline-danger ${activeLink === "home" ? "activeMenu" : ""}`}
          >
            home
          </button>
        </li>
        <li className="menuLi">
          <button
            onClick={() => handleLinkClick("webDev&Des")}
            className={`btn btn-outline-danger ${
              activeLink === "webDev&Des" ? "activeMenu" : ""
            }`}
          >
            web development & design
          </button>
        </li>
        <li className="menuLi">
          <button
            onClick={() => handleLinkClick("digitalArt&GraphDes")}
            className={`btn btn-outline-danger ${
              activeLink === "digitalArt&GraphDes"
                ? "activeMenu"
                : ""
            }`}
          >
            digital art & graphic design
          </button>
        </li>
        <li className="menuLi">
          <button
            onClick={() => handleLinkClick("visualArt")}
            className={`btn btn-outline-danger ${
              activeLink === "visualArt" ? "activeMenu" : ""
            }`}
          >
            visual art
          </button>
        </li>
      </ul>
      <div>
        {activeLink === "webDev&Des" && fillProjects()}
        {activeLink === "home" && <Introduction />}
        {activeLink === "digitalArt&GraphDes" && fillDigArtNGraphDesProjects()}
        {activeLink === "visualArt" && fillVisualArtsProjects()}
      </div>
    </div>
  );
}

export default Menu;
