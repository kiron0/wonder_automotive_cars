import React from "react";
import "./ContactUs.css";
import Swal from "sweetalert2";

const ContactUs = () => {
  const handleContact = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    Swal.fire({
      title: `Thank you ${name} for contacting us!`,
      text: `We will get back to you in ${email}'s inbox.`,
      icon: "success",
      confirmButtonText: "Close",
    });
    e.target.reset();
  };

  return (
    <div id="contact">
      <div class="section-title">
        <h2>Contact With Us</h2>
      </div>
      <div class="contact">
        <div class="contact-left">
          <img
            src="https://cdn.dribbble.com/users/1484145/screenshots/14190807/contact_us_4x.png"
            alt=""
          />
        </div>
        <div class="contact-right">
          <form onSubmit={handleContact}>
            <input
              type="text"
              placeholder="Your Name"
              class="text-field"
              name="name"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              class="text-field"
              name="email"
              required
            />
            <textarea
              placeholder="Your Message"
              class="text-field"
              id=""
              cols="30"
              rows="10"
              required
            ></textarea>
            <button class="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
