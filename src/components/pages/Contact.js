import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_c7miyci", "template_id", e.target, "public_key");
  };
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setCompany(inputValue);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(email, name, company);
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }
    setName("");
    setCompany("");
    setEmail("");
    sendEmail();
  };

  // try to get send email to work
  return (
    <div>
      <h1>Contact Page</h1>
      <div className="row">
        <div className="col">
          <div className="row">
            <h2 className="col">My contact information: </h2>
          </div>
          <div className="row">
            <p className="row">
              <strong>Email:</strong>
              <a href="mailto:sadapan@gmail.com" rel="noopener noreferrer">
                sadapan@gmail.com
              </a>
            </p>
            <p className="row centering">
              <strong>Phone number:</strong>303-332-7351
            </p>
            <p className="row">
              <strong>GitHub:</strong>
              <a href="https://github.com/sadapannord" target="blank">
                https://www.github.com/sadapannord
              </a>
            </p>
            <p className="row">
              <strong>LinkedIn:</strong>
              <a
                href="https://www.linkedin.com/in/sada-pan-nord/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.linkedin.com/in/sada-pan-nord-021160198
              </a>
            </p>
          </div>
        </div>
        <div className="col">
          <h2 className="row">
            If you would Like me to contact you please leave your information:
          </h2>
          <div className="row">
            <form className="form">
              <div className="form-group">
                <p>Name:</p>
                <input
                  className="form-input firstName"
                  type="text"
                  id="firstName"
                  placeholder="Name"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <p>Company:</p>
                <input
                  className="form-input company"
                  type="text"
                  id="company"
                  placeholder="Company"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <p>Contact Email:</p>
                <input
                  className="form-input email"
                  type="text"
                  id="email"
                  placeholder="email"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={handleFormSubmit}
                >
                  Sign
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
