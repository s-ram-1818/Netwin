import React from "react";

const AboutUs = () => {
  return (
    <section className="sw-aboutus">
      <div className="sw-footer">
        <h1 className="logo">Swiggy</h1>
        <p
          style={{
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: "small",
          }}
        >
          © 2026 Swiggy Limited
        </p>
      </div>

      <div className="sw-company">
        <h3>Company</h3>
        <span>About Us</span>
        <span>
          Swiggy <br /> Corporate
        </span>
        <span>Careers</span>
      </div>

      <div className="sw-contactus">
        <div className="sw-contactussub">
          <h3>Contact</h3>
          <span>Help & Support</span>
          <span>Partner with us</span>
          <span>Ride with us</span>
        </div>

        <div className="sw-contactussub">
          <h3>Legal</h3>
          <span>Terms & Conditions</span>
          <span>Refund & Cancellation</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
        </div>
      </div>

      <div className="sw-availablein">
        <h3>Available in</h3>
        <span>Nashik</span>
        <span>Mumbai</span>
        <span>Delhi</span>
        <span>Pune</span>
      </div>

      <div className="sw-lifeatswiggy">
        <div className="sw-lifeatswiggysub">
          <h3>Life at Swiggy</h3>
          <span>Explore With Swiggy</span>
          <span>Swiggy Blog</span>
          <span>Snackables</span>
        </div>

        <div className="sw-lifeatswiggysub sw-sociallinks">
          <h3>Social Links</h3>
          <div className="sw-sociallogo">
            <img src="images/instagram.png" alt="Instagram" />
            <img src="images/facebook.png" alt="Facebook" />
            <img src="images/twitter.png" alt="Twitter" />
            <img src="images/whatsapp.png" alt="WhatsApp" />
            <img src="images/linkedin.png" alt="LinkedIn" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
