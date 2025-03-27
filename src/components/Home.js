import "./Home.css";

function HomeBlock() {
  return (
    <div className="container h-container" id="Home">
      <div className="row home-ctn">
        <div className="col-lg">
          <h1>Hi, I'm Thamaraiselvan&#128075;</h1>
          <p className="txt-color text-justify">
            As a Full Stack Developer specializing in React and Django, I build
            dynamic, high-performance web applications that deliver seamless
            user experiences. With expertise in both front-end and back-end
            development, I develop scalable and secure applications tailored to
            business needs.
          </p>
          <br />
          <p className="txt-color">
            <i class="fa-solid fa-location-dot "></i> &nbsp;Tamilnadu, India
          </p>
          <p>
            <span class="green-dot">●</span> &nbsp;
            <span className="txt-color">
              Eager to Collaborate: Let's Build Something Great!
            </span>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/selvatsk-k-9605ts96">
              <i class="fa-brands fa-linkedin social-icon"></i>
            </a>
            &nbsp; &nbsp;
            <a href="">
              <i class="fa-brands fa-github social-icon"></i>
            </a>
          </p>
        </div>
        <div className="col-lg profile-img">
          <img
            src="/images/images.jfif"
            alt="My-Profile-Img"
            width="50%"
            // height="40%"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeBlock;
