
function SkillCards({ data }) {
    console.log(data);



    return (
        data.map((data, index) => (
            <div key={index} className={`col-6 col-md-4 col-lg${data.column} mb-3 d-flex justify-content-center`}>
                <div className={`card skill-card ${data.className}`}>
                    <div className="card-body d-flex justify-content-center">
                        <div className="row row-gap-3 card-ctn">
                            <div className="col d-flex justify-content-center">
                                <img
                                    src={data.image}
                                    alt={`${data.name}-logo`}
                                    width="30%"
                                />
                            </div>
                            <div className="col d-flex justify-content-center">
                                <h6>{data.name}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))

    )
}

export default SkillCards