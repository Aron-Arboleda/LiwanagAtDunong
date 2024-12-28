import React, { useEffect, useState } from "react";
import "./NavigationBar.css";

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
          <svg
            viewBox="-5.105 -4.982 34.088 33.922"
            fill="none"
            stroke="#ffffff"
            transform="rotate(180)"
          >
            <defs />
            <g
              id="SVGRepo_bgCarrier"
              strokeWidth="0"
              transform="translate(0,0), scale(1)"
            >
              <rect
                x="-4.32"
                y="-4.32"
                width="32.64"
                height="32.64"
                rx="5.15"
                fill="#347928"
                strokeWidth="1"
                ry="5.15"
                style={{
                  paintOrder: "fill markers",
                  stroke: "rgb(255, 251, 230)",
                  strokeWidth: "1px",
                }}
              />
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.528"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="#FFFBE6"
                strokeWidth="1.68"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
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
          <li id="volunteerLi">
            <a
              rel="noopener"
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfQ0HulrO3VvR5c18WbKwIbCMm9ObSySxA86AQMdetsaMeHcA/viewform"
              id="volunteer"
              className="lightTextBorder navLinks"
            >
              VOLUNTEER
            </a>
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
          <li>
            <a href="#footerPage" className="navLinks">
              Support
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
