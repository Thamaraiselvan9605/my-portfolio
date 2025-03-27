import "./About.css";

function AboutBlock() {
  return (
    <div className="h-container about-ctn" id="About">
      <div className="container ">
        <div className="row">
          <div className="col-lg about-col">
            <h6 className="sub-head">About me</h6>
          </div>
        </div>
        <div className="row about-second-row">
          <div className="col-lg about-img">
            <img
              src="/images/about.jfif"
              alt="About-Img"
              width="50%"
              height="30%"
            />
          </div>  
          <div className="col-lg">
            &nbsp;
            <h4 className="text-center">Crusius about me? Here you have it:</h4>
            &nbsp;
            <p className="text-justify txt-color">
              I am a passionate Full Stack Developer with over two years of
              experience in building dynamic and responsive web applications. My
              expertise lies in front-end technologies like HTML, CSS,
              Bootstrap, and JavaScript, complemented by strong back-end skills
              in Python and the Django framework. I have successfully deployed
              projects on Google Cloud, showcasing my ability to manage
              end-to-end development and deployment processes.
            </p>
            <p className="text-justify  txt-color">
              In addition to web development, I have six months of experience in
              mobile application development using Flutter, enabling me to
              create seamless cross-platform apps. Currently, I am working on a
              full-stack project leveraging React for the front end and Django
              for the back end, further enhancing my proficiency in modern
              frameworks.
            </p>
            <p className="text-justify txt-color">
              I am driven by a commitment to delivering efficient, scalable
              solutions and continuously expanding my technical skill set.
              Whether it's crafting intuitive user interfaces or architecting
              robust server-side logic, I thrive on turning ideas into impactful
              digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBlock;
