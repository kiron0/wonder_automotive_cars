import React from "react";
import "./ContactUs.css";
import Swal from "sweetalert2";

const ContactUs = () => {
  const handleContact = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    Swal.fire({
      title: `Thank you, ${name} for contacting with us!`,
      text: `We will get back to you in ${email}'s inbox.`,
      icon: "success",
      confirmButtonText: "Close",
    });
    e.target.reset();
  };

  return (
    <div id="contact">
      <div className="section-title">
      <p className="text-center fs-5">Get in touch</p>
      <h2 className="text-center title fs-1">Contact With <span className="heading-color">Us</span></h2>
      </div>
      <div className="contact">
        <div className="contact-left">
          <img
            src="https://cdn.dribbble.com/users/1484145/screenshots/14190807/contact_us_4x.png"
            alt=""
          />
        </div>
        <div className="contact-right">
          <form onSubmit={handleContact}>
            <input
              type="text"
              placeholder="Your Name"
              className="text-field"
              name="name"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="text-field"
              name="email"
              required
            />
            <textarea
              placeholder="Your Message"
              className="text-field"
              id=""
              cols="30"
              rows="10"
              required
            ></textarea>
            <button className="btn btn-danger submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
