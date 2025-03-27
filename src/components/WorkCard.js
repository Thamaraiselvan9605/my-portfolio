function WorkCard({ data }) {
  return data.map((details, index) => (
    <div key={index} className="card experience-card my-3 ">
      <div className={`row ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}>
        <div className="col col-lg-5 py-4 card-imgs  d-flex justify-content-center">
          <img src={`${details.projectImage}`} width="60%" alt="My Portfolio" />
        </div>
        <div className="col">
          <div className="row ">
            <div className="col px-4">
              <h4 className="pt-2">{details.projectName}</h4>
              <p className="text-justify">{details.description} </p>
              {/* <a
                href=""
                className="btn btn-sm btn-light mb-2"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${index}`}
              >
                Features Developed <i class="fa-solid fa-angle-down"></i>
              </a>
              <div className="collapse" id={`collapse-${index}`}>
                <div className="card card-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat, ut, reiciendis expedita est harum saepe aliquid
                    nulla tenetur numquam, quam repellat necessitatibus
                    provident quidem atque vero explicabo distinctio cum nam.
                  </p>
                </div>
              </div> */}
              <h6>Technology used:</h6>
              <div className="row row-gap-3 my-3 mx-0">
                {details.technologies.map((tech, index) => (
                  <div className="col-auto">
                    <span key={index} className="skill-highlight ">
                      {tech}
                    </span>
                  </div>
                ))}
                {/* <span className="skill-highlight">HTML</span> */}
              </div>
            </div>
            {details.referencePlantformLink &&
              details.referencePlantformLink !== "" && (
                <>
                  <div className="row px-4">
                    <div className="col">
                      <h6 className="text-muted">Reference :</h6>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col px-4 pb-3">
                      <img
                        src={`${details.referencePlatformLogo}`}
                        width="15%"
                        alt="Google-Playstore"
                        className="me-2"
                      />
                      <a href={`${details.referencePlantformLink}`}>Explore</a>
                    </div>
                  </div>
                </>
              )}
          </div>
        </div>
      </div>
    </div>
  ));
}

export default WorkCard;
