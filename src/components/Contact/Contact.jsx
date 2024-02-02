import React from "react";
import SnowfallComponent from "../Snowfall";
import "./Contact.css";
import SocialIcons from "../SocialIcons";

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
          <SocialIcons />
        </div>

        <div className="contact-form">
          <form action="https://formspree.io/f/xvoekzka" method="POST">
            <input
              name="fullname"
              type="text"
              maxlength="30"
              placeholder="Full Name"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email address"
              required
            />

            <textarea
              name="message"
              maxlength="500"
              placeholder="Write me something..."
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <SnowfallComponent />
    </section>
  );
};

export default Contact;
