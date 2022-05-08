import React from "react";
import Swal from "sweetalert2";
import Google from "../../../Assets/googleplay.png";
import Apple from "../../../Assets/appstore.png";
import FooterAfter from '../../../Assets/footer-after.png';
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaGooglePlusG,
} from "react-icons/fa";
import "./Footer.css";
import { AiFillCar } from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();

  const defaultForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    Swal.fire({
      title: "Thank you for sign up!",
      text: `We will keep you updated with our latest news in ${email}'s inbox.`,
      icon: "success",
      confirmButtonText: "Close",
    });
    e.target.reset();
  };
  return (
    <>
      <footer className="footer-bg">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="widget">
                  <div className="logo">
                    {" "}
                    <h2><AiFillCar className="car-icons"></AiFillCar> Wonder Automotive Cars</h2>
                    {/* <img alt="" src="images/logo.png" />{" "} */}
                  </div>
                  <p>
                  Wonder Automotive Cars have the best facilities in the world, which no one
                    else can give you most probably. We are always best at your service.
                  </p>
                  <ul className="apps-downloads">
                    <li>
                      <a href="!#">
                        <img src={Google} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <img src={Apple} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="widget social-icons">
                  <h5>Follow Us</h5>
                  <ul>
                    <li>
                      <a className="Facebook" href="!#">
                        <i className="fa fa-facebook">
                          <FaFacebookF
                            style={{ fontSize: "1rem" }}
                          ></FaFacebookF>
                        </i>
                      </a>
                      <span>Facebook</span>
                    </li>
                    <li>
                      <a className="Twitter" href="!#">
                        <i className="fa fa-twitter">
                          <FaTwitter style={{ fontSize: "1rem" }}></FaTwitter>
                        </i>
                      </a>
                      <span>Twitter</span>
                    </li>
                    <li>
                      <a className="Linkedin" href="!#">
                        <i className="fa fa-linkedin">
                          <FaLinkedinIn
                            style={{ fontSize: "1rem" }}
                          ></FaLinkedinIn>
                        </i>
                      </a>
                      <span>Linkedin</span>
                    </li>
                    <li>
                      <a className="Google" href="!#">
                        <i className="fa fa-google-plus">
                          <FaGooglePlusG
                            style={{ fontSize: "1rem" }}
                          ></FaGooglePlusG>
                        </i>
                      </a>
                      <span>Google+</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2  col-sm-6 col-xs-12">
                <div className="widget my-quicklinks">
                  <h5>Quick Links</h5>
                  <ul>
                    <li>
                      <a href="!#">About Us</a>
                    </li>
                    <li>
                      <a href="!#">Faqs</a>
                    </li>
                    <li>
                      <a href="!#">Packages</a>
                    </li>
                    <li>
                      <a href="!#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5  col-sm-6 col-xs-12">
                <div className="widget widget-newsletter">
                  <h5>Sign up for Weekly Newsletter</h5>
                  <div className="fieldset">
                    <p>
                      We may send you information about related events,
                      webinars, products and services which we believe.
                    </p>
                    <form onSubmit={defaultForm}>
                      <input
                        className=""
                        placeholder="Enter your email address"
                        type="text"
                        name="email"
                        required
                      />
                      <input
                        className="btn btn-danger submit-btn"
                        name="submit"
                        value="Submit"
                        type="submit"
                      />
                    </form>
                  </div>
                </div>
                <div className="copyright">
                  <p>
                    &copy; Copyright {year}{" "}
                    <strong>Wonder Automotive Cars</strong> || All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={FooterAfter} alt="" />
      </footer>
    </>
  );
};

export default Footer;
