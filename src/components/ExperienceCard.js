
function ExperienceCard({ data }) {
    return (
        data.map((data, index) => (
            <div key={index} className="row">
                <div className="col">
                    <div className="card experience-card p-3 my-2">
                        <div className="card-body">
                            <div className="row d-flex align-items-start">
                                <div className="col experience-company-col">
                                    <h5 className="company-1">{data.company}</h5>
                                    <p className="text-muted">{data.place}</p>
                                </div>
                                <div className="col experience-ctn-col">
                                    <h5>{data.role}</h5>
                                    <ul className="txt-color">
                                        <li className="pb-1">
                                            {data.descriptions[0]}
                                        </li>
                                        <li className="pb-1">
                                            {data.descriptions[1]}
                                        </li>
                                        <li className="pb-1">
                                            {data.descriptions[2]}
                                        </li>
                                        <li className="pb-1">
                                            {data.descriptions[3]}
                                        </li>
                                        <li className="pb-1">
                                            {data.descriptions[4]}
                                        </li>
                                        <li className="pb-1">
                                            {data.descriptions[5]}
                                        </li>
                                        <li>
                                            {data.descriptions[6]}
                                        </li>
                                    </ul>
                                </div>
                                <div className="col d-flex justify-content-end year">
                                    <p className="text-muted">{data.years}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}

export default ExperienceCard