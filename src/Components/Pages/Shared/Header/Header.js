import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import CustomLink from "../CustomLink/CustomLink";
import { RiMenu4Fill } from "react-icons/ri";
import "./Header.css";
import { auth } from "../../../../Firebase/Firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const [header, setHeader] = useState(false);

  const handleLogout = () => {
    signOut(auth);
  };

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <Navbar
      bg="white"
      expand="lg"
      sticky="top 2rem"
      className={header ? "header active" : "header"}
    >
      <Container>
        <Navbar.Brand>
          <Link className="title text-black" to="/">
            Car Warehouse System
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle">
          <RiMenu4Fill className="nav-icon"></RiMenu4Fill>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto nav-link py-3">
            <CustomLink className="link" to="/home">
              HOME
            </CustomLink>
            <CustomLink className="link" to="/blog">
              Blog
            </CustomLink>
            {user && (
              <>
                <CustomLink as={Link} to="add-inventory" className="link">
                  Add
                </CustomLink>
                <CustomLink as={Link} to="manage" className="link">
                  Manage
                </CustomLink>
                {/* <CustomLink as={Link} to="my-items" className="link">
                  My Items
                </CustomLink> */}
              </>
            )}
            {user?.email ? (
              <button onClick={handleLogout} className="link btn btn-primary">
                Logout
              </button>
            ) : (
              <CustomLink className="link btn btn-primary" to="/login">
                Login
              </CustomLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
