import Introduction from "./Introduction";
import { webDevNDes, digitalArtNGraphDesign, visualArts } from "../data";
import Project from "./Project";
import React, { useState } from "react";

function fillProjects() {
  return webDevNDes.map((project) => (
    <Project
      id={project.id}
      name={project.name}
      date={project.date}
      role={project.role}
      media={project.media}
      description={project.description}
      link={project.link}
    />
  ));
}

function fillDigArtNGraphDesProjects() {
  return digitalArtNGraphDesign.map((project) => (
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
  ));
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
      link={project.link}
    />
  ));
}

function Menu() {
  const [activeLink, setActiveLink] = useState("home");
  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  return (
    <div className="menuDiv ">
      <ul className="menuUl main">
        <li className="menuLi">
          <a
            onClick={() => handleLinkClick("home")}
            className={activeLink === "home" ? "activeMenu" : ""}
          >
            home
          </a>
        </li>
        <li className="menuLi">
          <a
            onClick={() => handleLinkClick("webDev&Des")}
            className={activeLink === "webDev&Des" ? "activeMenu" : ""}
          >
            web development & design
          </a>
        </li>
        <li className="menuLi">
          <a
            onClick={() => handleLinkClick("digitalArt&GraphDes")}
            className={activeLink === "digitalArt&GraphDes" ? "activeMenu" : ""}
          >
            digital art & graphic design
          </a>
        </li>
        <li className="menuLi">
          <a
            onClick={() => handleLinkClick("visualArt")}
            className={activeLink === "visualArt" ? "activeMenu" : ""}
          >
            visual art
          </a>
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
