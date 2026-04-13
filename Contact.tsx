import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="section section-accent">
      <h2>Let’s Build Something Intelligent</h2>
      <p className="section-lead">
        If your organization is ready for clarity, speed, and scalable intelligence, let’s talk.
      </p>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <label>
            Name
            <input type="text" required />
          </label>
          <label>
            Email
            <input type="email" required />
          </label>
        </div>

        <label className="full-width">
          Organization
          <input type="text" />
        </label>

        <label className="full-width">
          What challenge are you trying to solve?
          <textarea rows={4} required />
        </label>

        <button className="btn-primary">Schedule a Consultation</button>
      </form>
    </section>
  );
};

export default Contact;
