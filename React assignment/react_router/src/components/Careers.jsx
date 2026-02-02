import React from "react";

const Careers = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "New York",
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco",
    },
    {
      id: 4,
      title: "Data Analyst",
      department: "Analytics",
      location: "Remote",
    },
    {
      id: 5,
      title: "Customer Success Manager",
      department: "Sales",
      location: "Chicago",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="mb-4">Join Our Team</h1>
          <p className="lead">
            Explore exciting career opportunities at NetWin!
          </p>

          <section className="mb-5">
            <h3>Why Work With Us?</h3>
            <ul className="list-group">
              <li className="list-group-item">
                Competitive salary and benefits package
              </li>
              <li className="list-group-item">
                Flexible work arrangements and remote options
              </li>
              <li className="list-group-item">
                Professional development and training opportunities
              </li>
              <li className="list-group-item">
                Inclusive and diverse workplace culture
              </li>
            </ul>
          </section>

          <section>
            <h3 className="mb-4">Open Positions</h3>
            <div className="row">
              {jobs.map((job) => (
                <div key={job.id} className="col-md-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{job.title}</h5>
                      <p className="card-text">
                        <strong>Department:</strong> {job.department}
                        <br />
                        <strong>Location:</strong> {job.location}
                      </p>
                      <button className="btn btn-primary btn-sm">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Careers;
