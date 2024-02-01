import React from "react";
import SnowfallComponent from "../Snowfall";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Feel Free to Connect!</h2>

      <div className="contact-content">
        <div className="contact-info">
          <p className="contact-text">
            Please don't hesitate to drop me a message on my Contact Page. I'm
            excited to hear from you.
          </p>
        </div>

        <div className="contact-form">
          <form>
            <input type="text" id="name" name="name" />

            <input type="email" id="email" name="email" />

            <textarea id="message" name="message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <SnowfallComponent />
    </section>
  );
};

export default Contact;
