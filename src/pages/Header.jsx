import React from "react";
import { Link } from "react-router-dom";

const Header = ({ classLink, setClassLink, handleClick }) => {
  return (
    <header className="head">
      <h3 className="cover">Cover</h3>
      <nav>
        {" "}
        <Link
          onClick={() => setClassLink("home-link")}
          className={classLink === "home-link" ? "home-link" : "default-link"}
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={() => setClassLink("features-link")}
          className={
            classLink === "features-link" ? "features-link" : "default-link"
          }
          to="/features"
        >
          Features
        </Link>
        <Link
          onClick={() => setClassLink("contact-link")}
          className={
            classLink === "contact-link" ? "contact-link" : "default-link"
          }
          to="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
