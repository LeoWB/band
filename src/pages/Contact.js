import React from "react";

import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <p>Join the mailing list</p>
      <form>
        <input type="email" placeholder="Email" required />
        <button type="submit">Join</button>
      </form>
    </section>
  );
}

export default Contact;
