import React from "react";
import "../../css/contact.css";
import { IoCallOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillBook } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import SectionWrapper from "../../components/scrol/SectionWraper";

const Contact = () => {
  return (
   
      <div className="contact">
        <h1 className="contacth1">Contact</h1>
        <div className="contact-email">
          <div className="contact-email-input">
            <input placeholder="Enter your Email" type="email" />
            <textarea placeholder="Enter message" type="text" />
            <button>Send</button>
          </div>
        </div>
        <div className="contact-header-content">
          <h1>Any Question? Contact us</h1>
          <p>Your services</p>
        </div>
        <div className="contact-imgs">
          <div className="contact-img-contents">
            <FaLocationDot className="contact-icons" />
            <h3>Location</h3>
            <p>Gorakhpur</p>
          </div>
          <div className="contact-img-contents">
            <MdEmail className="contact-icons" />
            <h3>Email</h3>
            <p>shivam6386000621@gmail.com</p>
          </div>
        </div>
      </div>
  );
};

export default Contact;
