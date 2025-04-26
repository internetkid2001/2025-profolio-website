import React from 'react';
import '../Views/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <video
        className="contact-video"
        src="/videos/LUCKI TV (NEW EXPORT).mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="contact-overlay">
        <p className="contact-description">
          Victor Grisson is a director and photographer based out of Chicago and Metro-Detriot.
        </p>
        <a href="mailto:victorgrisson1@gmail.com" className="contact-name">
          Contact Victor
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
