import React from 'react';

function Contact() {
  return (
    <div className="contactPage">
      <div className="contactPageIcon">
        <a href="https://www.linkedin.com/">
          <i className="fab fa-linkedin"></i>
          <label>linked in</label>
        </a>
      </div>
      <div className="contactPageIcon">
        <a href="mailto:example@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <div className="contactPageIcon">
        <a href="https://telegram.org/">
          <i className="fab fa-telegram"></i>
        </a>
      </div>
      <div className="contactPageIcon">
        <i className="fab fa-weixin"></i>
      </div>
    </div>
  );
}

export default Contact;