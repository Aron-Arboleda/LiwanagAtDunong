import React, { useEffect } from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.getElementById("ulNav");
      if (window.scrollY > 100) {
        navBar.classList.add("shrink");
      } else {
        navBar.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <li>
            <a
              rel="noopener"
              target="_self"
              href="#homePage"
              className="navLinks"
            >
              Home
            </a>
          </li>
          <li>
            <a
              rel="noopener"
              target="_self"
              href="#goalsPage"
              className="navLinks"
            >
              Goals
            </a>
          </li>
          <li>
            <a
              rel="noopener"
              target="_self"
              href="#aetaLearningCenterPage"
              className="navLinks"
            >
              ALC
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
          <li>
            <a
              rel="noopener"
              target="_self"
              href="#partnershipsPage"
              className="navLinks"
            >
              Partnerships
            </a>
          </li>
          <li>
            <a
              rel="noopener"
              target="_self"
              href="#supportPage"
              className="navLinks"
            >
              Support
            </a>
          </li>
          <li>
            <a
              rel="noopener"
              target="_self"
              href="#footerPage"
              className="navLinks"
            >
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
