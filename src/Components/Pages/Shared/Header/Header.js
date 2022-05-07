import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import CustomLink from "../CustomLink/CustomLink";
import { RiMenu4Fill } from "react-icons/ri";
import "./Header.css";
import { auth } from "../../../../Firebase/Firebase.init";
import userIcon from "../../../Assets/logo/users-alt.png";

const Header = () => {
  const [user] = useAuthState(auth);
  const [header, setHeader] = useState(false);

  const handleLogout = () => {
    signOut(auth);
  };

  const changeBackground = () => {
    if (window.scrollY >= 65) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <Navbar
      bg=""
      expand="lg"
      sticky="top 2rem"
      className={header ? "header active" : "header"}
    >
      <Navbar.Brand>
        <Link className="title text-black" to="/">
          Wonder Automotive Cars
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle">
        <RiMenu4Fill className="nav-icon"></RiMenu4Fill>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mx-auto nav-link py-3">
          <CustomLink className="link" to="/home">
            HOME
          </CustomLink>

          {user && (
            <>
              <CustomLink as={Link} to="add-inventory" className="link">
                Add Item
              </CustomLink>
              <CustomLink as={Link} to="manage" className="link">
                Manage Items
              </CustomLink>
              <CustomLink as={Link} to="my-items" className="link">
                My Items
              </CustomLink>
            </>
          )}
          <CustomLink className="link" to="/blog">
            Blog
          </CustomLink>
          {user?.email && (
            <li className="nav-item user pl-2">
              <img src={userIcon} alt="" />
              {user?.displayName
                ? user?.displayName.split(" ").slice(0, 1)
                : "User"}
            </li>
          )}
          {user?.email ? (
            <button onClick={handleLogout} className="link btn btn-danger">
              Logout
            </button>
          ) : (
            <CustomLink className="link btn btn-danger" to="/login">
              Login
            </CustomLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
