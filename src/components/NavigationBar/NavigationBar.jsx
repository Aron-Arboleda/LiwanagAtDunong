import React, { useEffect, useState } from "react";
import "./NavigationBar.css";
import Menu from "lucide-react/dist/esm/icons/menu";

const NavigationBar = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.getElementById("ulNav");
      if (window.scrollY > 100) {
        navBar.classList.add("shrink");
      } else {
        navBar.classList.remove("shrink");
      }
    };

    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handleLocationChange); // Update on browser back/forward.

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const isActive = (path) => currentPath === path;

  return (
    <header>
      <nav id="navBar">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <Menu size={30} />
        </label>
        <ul id="ulNav">
          <li className={isActive("/") ? "active" : ""}>
            <a href="/" className="navLinks">
              Home
            </a>
          </li>
          <li className={isActive("/about") ? "active" : ""}>
            <a href="/about" className="navLinks">
              About
            </a>
          </li>
          <li className={isActive("/faqs") ? "active" : ""}>
            <a href="/faqs" className="navLinks">
              FAQs
            </a>
          </li>
          <li
            id="volunteerLi"
            className={isActive("/volunteer") ? "center-active" : ""}
          >
            <a href="/volunteer" id="volunteer" className="navLinks">
              Volunteer
            </a>
            {/* <a
              rel="noopener"
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfQ0HulrO3VvR5c18WbKwIbCMm9ObSySxA86AQMdetsaMeHcA/viewform"
              id="volunteer"
              className="lightTextBorder navLinks"
            >
              VOLUNTEER
            </a> */}
          </li>
          <li className={isActive("/literacy") ? "active" : ""}>
            <a href="/literacy" className="navLinks">
              Literacy
            </a>
          </li>
          <li className={isActive("/network") ? "active" : ""}>
            <a href="/network" className="navLinks">
              Network
            </a>
          </li>
          <li className={isActive("/support") ? "active" : ""}>
            <a href="/support" className="navLinks">
              Support
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
