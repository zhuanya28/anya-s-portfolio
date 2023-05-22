import React from "react";
import linkedIn from "../media/linkedin.svg";
import telegram from "../media/telegram-original.svg";
import email from "../media/envelope.svg";
import wechat from "../media/wechat.svg";

function Contact() {
  return (
    <div className="contactPage">
      <div className="contactPageIcon">
        <a
          className="contactPageIcon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/zhuanya/"
        >
          <svg className="contactIcon">
            <image className="contactIcon" xlinkHref={linkedIn} />
          </svg>
        </a>
      </div>
      <div className="contactPageIcon">
        <a
          className="contactPageIcon"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:zhuanya@nyu.edu"
        >
          <svg className="contactIcon">
            <image className="contactIcon" xlinkHref={email} />
          </svg>
        </a>
      </div>
      <div className="contactPageIcon">
        <a
          className="contactPageIcon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/zhuanya14"
        >
          <svg className="contactIcon">
            <image className="contactIcon" xlinkHref={telegram} />
          </svg>
        </a>
      </div>
      <div className="contactPageIcon">
        <a
          className="contactPageIcon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/11S9MyukDqzKQrzuQyfdxfIB1ePn0wm1s/view?usp=sharing"
        >
          <svg className="contactIcon">
            <image className="contactIcon" xlinkHref={wechat} />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Contact;
