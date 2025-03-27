import "./Skills.css";
import React, { useState } from "react";
import SkillCards from "./SkillCard";

function SkillsBlock() {
  const [activeLink, setSkillActiveLink] = useState("Frontend");

  const frontendData = [
    {
      image: "/images/html-1.svg",
      name: "HTML",
      className: "html-card",
      column: "",
    },
    {
      image: "/images/css-3.svg",
      name: "CSS",
      className: "css-card",
      column: "",
    },
    {
      image: "/images/bootstrap-5-1.svg",
      name: "Bootstrap",
      className: "bootstrap-card",
      column: "",
    },
    {
      image: "/images/logo-javascript.svg",
      name: "JavaScript",
      className: "javascript-card",
      column: "",
    },
    {
      image: "/images/react-2.svg",
      name: "React",
      className: "react-card",
      column: "",
    },
  ];

  const backendData = [
    {
      image: "/images/python-5.svg",
      name: "Python",
      className: "python-card",
      column: "-3",
    },
    {
      image: "/images/dart.svg",
      name: "Dart",
      className: "dart-card",
      column: "-3",
    },
    {
      image: "/images/docker-4.svg",
      name: "Docker",
      className: "docker-card",
      column: "-3",
    },
  ];
  const frameworkData = [
    {
      image: "/images/django.svg",
      name: "Django",
      className: "django-card",
      column: "-3",
    },
    {
      image: "/images/flutter-logo.svg",
      name: "Flutter",
      className: "flutter-card",
      column: "-3",
    },
  ];
  const databaseData = [
    {
      image: "/images/sqlite.svg",
      name: "Sqlite",
      className: "sqlite-card",
      column: "-3",
    },
    {
      image: "/images/firebase-1.svg",
      name: "Firebase",
      className: "firebase-card",
      column: "-3",
    },
  ];
  const ideData = [
    {
      image: "/images/visual-studio-code-1.svg",
      name: "Visual studio code",
      className: "vs-code-card",
      column: "-3",
    },
    {
      image: "/images/android-4.svg",
      name: "Android studio",
      className: "android-studio-card",
      column: "-3",
    },
  ];
  const versionControlData = [
    {
      image: "/images/github-icon.svg",
      name: "Github",
      className: "github-card",
      column: "-3",
    },
  ];

  return (
    <div className="h-container skills-ctn" id="Skills">
      <div className="container">
        <div className="row">
          <div className="col-lg about-col">
            <h6 className="sub-head">Skills</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-lg d-flex justify-content-center">
            <p className="txt-color text-center">
              The skills, tools and technologies I am really at:
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg skills-sub-head d-flex justify-content-evenly">
            {[
              "Frontend",
              "Backend",
              "Frameworks",
              "Database",
              "IDE",
              "Version-Control",
            ].map((text) => (
              // <a
              <button
                key={text}
                onClick={() => setSkillActiveLink(text)}
                className={`skill-nav-link ${
                  activeLink === text ? "skill-active" : ""
                }`}
                data-bs-toggle="collapse"
                data-bs-target={`#${text}`}
              >
                {text}
              </button>

            ))}
          </div>
        </div>
        <div className="row">
          <div
            className={`frontend-info collapse hight ${
              activeLink === "Frontend" ? "show" : ""
            }`}
            id="Frontend"
          >
            <div className="row my-5 mx-0 d-flex justify-content-center">
              <SkillCards data={frontendData} />
            </div>
          </div>
          <div
            className={`backend-info collapse ${
              activeLink === "Backend" ? "show" : ""
            }`}
            id="Backend"
          >
            <div className="row my-5 mx-0 d-flex justify-content-center ">
              <SkillCards data={backendData} />
            </div>
          </div>
          <div
            className={`framework-info collapse ${
              activeLink === "Frameworks" ? "show" : ""
            }`}
            id="Frameworks"
          >
            <div className="row my-5 mx-0 d-flex justify-content-center">
              <SkillCards data={frameworkData} />
            </div>
          </div>
          <div
            className={`database-info collapse ${
              activeLink === "Database" ? "show" : ""
            }`}
            id="Database"
          >
            <div className="row my-5 mx-0 d-flex justify-content-center">
              <SkillCards data={databaseData} />
            </div>
          </div>
          <div
            className={`ide-info collapse ${
              activeLink === "IDE" ? "show" : ""
            }`}
            id="IDE"
          >
            <div className="row my-5 mx-0 d-flex justify-content-center">
              <SkillCards data={ideData} />
            </div>
          </div>
          <div
            className={`version-control-info collapse ${
              activeLink === "Version-Control" ? "show" : ""
            }`}
            id="Version-Control"
          >
            <div className="row my-5 mx-0 d-flex justify-content-center">
              <SkillCards data={versionControlData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsBlock;
