import React from "react";

export default function Contact() {
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
              <a href="mailto:sadapan@gmail.com">sadapan@gmail.com</a>
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
                href="https://www.linkedin.com/in/sada-pan-nord-021160198"
                target="_blank"
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
                <p>First Name:</p>
                <input
                  className="form-input firstName"
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group">
                <p>Last Name:</p>
                <input
                  className="form-input lastName"
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group">
                <p>Company:</p>
                <input
                  className="form-input company"
                  type="text"
                  id="company"
                  placeholder="Company"
                />
              </div>
              <div className="form-group">
                <p>Contact Email:</p>
                <input
                  className="form-input email"
                  type="text"
                  id="email"
                  placeholder="email"
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary" type="submit">
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
