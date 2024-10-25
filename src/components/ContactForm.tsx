import React from "react";
import "./ContactForm.scss";

const ContactForm: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form className="contact__form">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
