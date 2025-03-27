import WorkCard from "./WorkCard";
import "./Works.css";

function WroksBlock() {
  const workCardData = [
    {
      projectImage: "/images/about.jfif",
      projectName: "My Portfolio",
      description:
        "This portfolio is a showcase of my skills and experience as a full-stack developer, built using React for the front end and Django for the back end. It features a clean, modern design with smooth navigation, ensuring a great user experience.",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "React",
        "Python",
        "Django",
        "Docker",
        "Sqlite",
      ],
    },
    {
      projectImage: "/images/stock-chitta-logo.png",
      projectName: "Stock Chitta Web Application",
      description:
        "Stock Chitta Admin Panel is designed to manage mobile app user details efficiently. Admins can control user access and enable or disable payment notifications. It allows monitoring of new users and tracking their activities. The panel provides real-time insights and management tools. Admins can also export data to Excel for reporting and analysis.",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "Python",
        "Django",
        "Docker",
        "Firebase",
        "Google Cloud",
      ],
    },
    {
      projectImage: "/images/stock-chitta-logo.png",
      projectName: "Stock Chitta Mobile Application",
      description:
        "Stock Chitta is a comprehensive stock management app designed to help store owners efficiently track and manage their inventory. The app allows users to record store opening and closing stock, track receipts, and monitor sales transactions. Owners can generate detailed stock reports in PDF format for better analysis and record-keeping. Additionally, store owners can add and manage salespersons, ensuring smooth operations and access control.",
      technologies: ["Flutter", "Dart", "Sqlite", "Firebase"],
      referencePlatformLogo: "/images/google-play-4.svg",
      referencePlantformLink:
        "https://play.google.com/store/search?q=stock%20chitta&c=apps&hl=en_IN",
    },
  ];
  return (
    <div className="h-container works-ctn" id="Work">
      <div className="container">
        <div className="row">
          <div className="col-lg about-col">
            <h6 className="sub-head">Works</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-lg d-flex justify-content-center">
            <p className="txt-color text-center">
              Some of the noteworthy projects I have built:
            </p>
          </div>
        </div>
        <div className="row m-0">
          <WorkCard data={workCardData} />
        </div>
      </div>
    </div>
  );
}

export default WroksBlock;
