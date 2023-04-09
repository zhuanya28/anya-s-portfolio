import React from 'react';
import linkedIn from "../media/linkedin.svg"
import telegram from "../media/telegram-original.svg"
import email from "../media/envelope.svg"
import wechat from "../media/wechat.svg"



function Contact() {
  return (
    <div className="contactPage">
      <div className="contactPageIcon">
        <a href="https://www.linkedin.com/in/zhuanya/">
          <svg className="contactIcon" src={linkedIn}></svg>
        </a>
      </div>
      <div className="contactPageIcon">
        <a href="mailto:zhuanya@nyu.edu">
          <svg className="contactIcon" src={email}></svg>
        </a>
      </div>
      <div className="contactPageIcon">
        <a href="https://t.me/zhuanya14">
          <svg className="contactIcon" src={telegram}></svg>
        </a>
      </div>
      <div className="contactPageIcon">
        <a href="https://drive.google.com/file/d/11S9MyukDqzKQrzuQyfdxfIB1ePn0wm1s/view?usp=sharing">
          <svg className="contactIcon" src={wechat}></svg>
        </a>
      </div>
    </div>
  );
}

export default Contact;