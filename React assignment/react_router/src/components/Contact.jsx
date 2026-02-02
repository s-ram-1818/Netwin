import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mb-5">
          <h1 className="mb-4">Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

        <div className="col-md-6">
          <h3 className="mb-4">Contact Information</h3>
          <div className="mb-4">
            <h5>Address</h5>
            <p>
              123 Tech Street
              <br />
              San Francisco, CA 94105
              <br />
              United States
            </p>
          </div>
          <div className="mb-4">
            <h5>Email</h5>
            <p>
              <a href="mailto:info@netwin.com">info@netwin.com</a>
            </p>
          </div>
          <div className="mb-4">
            <h5>Phone</h5>
            <p>
              <a href="tel:+14155551234">+1 (415) 555-1234</a>
            </p>
          </div>
          <div className="mb-4">
            <h5>Business Hours</h5>
            <p>
              Monday - Friday: 9:00 AM - 6:00 PM PST
              <br />
              Saturday: 10:00 AM - 4:00 PM PST
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
