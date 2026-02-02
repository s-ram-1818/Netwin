import React from "react";

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="mb-4">About Us</h1>

          <section className="mb-5">
            <h3>Our Mission</h3>
            <p>
              To empower businesses through innovative technology solutions and
              exceptional customer service.
            </p>
          </section>

          <section className="mb-5">
            <h3>Our Vision</h3>
            <p>
              To be the leading provider of digital transformation services in
              the industry, trusted by enterprises globally.
            </p>
          </section>

          <section className="mb-5">
            <h3>Our Story</h3>
            <p>
              Founded in 2015, NetWin started as a small startup with a big
              vision. Today, we serve hundreds of clients across multiple
              industries, delivering cutting-edge solutions that drive growth
              and innovation.
            </p>
          </section>

          <section className="mb-5">
            <h3>Our Values</h3>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Integrity:</strong> We operate with honesty and
                transparency
              </li>
              <li className="list-group-item">
                <strong>Excellence:</strong> We strive for the highest quality
                in everything we do
              </li>
              <li className="list-group-item">
                <strong>Innovation:</strong> We embrace new ideas and
                technologies
              </li>
              <li className="list-group-item">
                <strong>Collaboration:</strong> We work closely with our clients
                and partners
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
