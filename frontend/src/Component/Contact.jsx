import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Lottie from "lottie-react";
import animationData from "../lottie/contact.json";
import "../style/Contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setMessage("Please enter a valid email");
    } else {
      setMessage("");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="lottie-container">
          <Lottie
            animationData={animationData}
            loop={true}
            className="lottie-animation"
          />
        </div>
        <div className="contact-content">
          <h1 className="contact-heading">Contact Us</h1>
          <p className="contact-description">
            We would love to hear from you. Please fill out the form below to
            get in touch.
          </p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                onChange={handleEmailChange}
                placeholder="you@example.com"
              />
              {message && <p className="error-message">{message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="form-textarea"
                placeholder="Your Message"
              />
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/himanshunarware/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
            <a
              href="https://github.com/HimanshuNarware/Devlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
