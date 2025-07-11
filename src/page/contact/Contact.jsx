import React, { useRef, useState } from "react";
import "../../css/contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
const Contact = () => {
  const form = useRef(null);
  const tt = {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs;
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("✅ Email sent successfully!", tt);

          form.current.reset();
        },
        (error) => {
          toast.error("❌ Failed to send email:", tt);
        }
      );
  };

  return (
    <div className="contact">
      <h1 className="contacth1">Contact</h1>
      <div className="contact-email">
        <form ref={form} onSubmit={sendEmail} className="contact-email-input">
          <input name="user_name" placeholder="Enter your Email" type="email" />
          <textarea name="message" placeholder="Enter message" type="text" />
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-header-content">
        <h1>Any Question? Contact us</h1>
        <p>Your services</p>
      </div>
      <div className="contact-imgs">
        <FaLocationDot className="contact-icons" />
        <NavLink to="https://github.com/Shivam-75">
          <FaGithub className="contact-icons" />
        </NavLink>
        <NavLink to="">
          <FaFileDownload className="contact-icons" />
        </NavLink>
        <NavLink to="https://www.linkedin.com/in/shivam-pandey2006/">
          <FaLinkedin className="contact-icons" />
        </NavLink>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
