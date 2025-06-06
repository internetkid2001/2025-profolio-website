import React from 'react';
import '../Views/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <video
        className="contact-video"
        src="https://victor-videos.b-cdn.net/LUCKI%20TV%20(NEW%20EXPORT).mov"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="contact-overlay">
        <p className="contact-description">
          Victor Grisson is a director and photographer based out of Chicago and Metro-Detroit.
        </p>
        <a href="mailto:victorgrisson1@gmail.com" className="contact-name">
          Contact Victor
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
