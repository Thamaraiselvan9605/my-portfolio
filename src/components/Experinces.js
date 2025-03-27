import "./Experience.css";
import ExperienceCard from "./ExperienceCard";

function ExperienceBlock() {
  const experienceData = [
    {
      company: "Nibuna Tech Solutions",
      place: "Erode | Tamilnadu",
      years: "Jan 2023 - Jan 2025",
      role: "Web Developer",
      descriptions: [
        "Over 2 years of experience in Django, Python, HTML, CSS, Bootstrap, JavaScript, Firebase, Flutter, and Dart.",

        "Expertise in developing 3-layered architecture applications and creating RESTful APIs for seamless data communication.",

        "Skilled in implementing middleware for authorization and validation processes.",

        "Proficient in managing dependencies using Python Package Manager (PIP) and version control with Git.",

        "Hands-on experience with Docker for containerization and deployment.",

        "Proficient in working with IDEs like Visual Studio Code and Android Studio.",

        "Detail-oriented team player with strong analytical and problem-solving skills.",
      ],
    },
  ];

  return (
    <div className="experience-ctn" id="Experience">
      <div className="container">
        <div className="row ">
          <div className="col-lg about-col">
            <h6 className="sub-head">Experience</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-lg d-flex justify-content-center">
            <p className="txt-color text-center">
              Here is a quick summary of my recent experience:
            </p>
          </div>
        </div>
        <ExperienceCard data={experienceData} />
      </div>
    </div>
  );
}

export default ExperienceBlock;
