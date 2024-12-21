import React, { useEffect, useRef } from "react";
import "../HomePage_styles/PartnershipsSection.css";

const PartnershipsSection = () => {
  // Create a ref for the ptHeading element
  const ptHeadingRef = useRef(null);

  useEffect(() => {
    // Set up the IntersectionObserver to observe the ptHeading element
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If ptHeading is in the viewport, add 'spread' class to all elements
            document.getElementById("partnershipsRow1").classList.add("spread");
            document.getElementById("partnershipsRow3").classList.add("spread");
            document.getElementById("pyramidGroup1").classList.add("spread");
            document.getElementById("pyramidGroup2").classList.add("spread");
            document.getElementById("ptHeading").classList.add("spread");
          } else {
            // If ptHeading is out of the viewport, remove 'spread' class
            document
              .getElementById("partnershipsRow1")
              .classList.remove("spread");
            document
              .getElementById("partnershipsRow3")
              .classList.remove("spread");
            document.getElementById("pyramidGroup1").classList.remove("spread");
            document.getElementById("pyramidGroup2").classList.remove("spread");
            document.getElementById("ptHeading").classList.remove("spread");
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of ptHeading is visible in the viewport
      }
    );

    // Observe the ptHeading element
    if (ptHeadingRef.current) observer.observe(ptHeadingRef.current);

    // Clean up the observer when the component unmounts
    return () => {
      if (ptHeadingRef.current) observer.unobserve(ptHeadingRef.current);
    };
  }, []);

  return (
    <div id="partnershipsPage">
      <div id="partnershipsContainer">
        <div id="partnershipsRow1">
          <div className="pLogoContainer">
            <img
              src="./images/partnershipsPage/logo1.png"
              alt=""
              className="pLogo"
            />
          </div>
          <div className="pLogoContainer">
            <img
              src="./images/partnershipsPage/logo2.png"
              alt=""
              className="pLogo"
            />
          </div>
          <div className="pLogoContainer">
            <img
              src="./images/partnershipsPage/logo3.png"
              alt=""
              className="pLogo"
            />
          </div>
          <div className="pLogoContainer">
            <img
              src="./images/partnershipsPage/logo4.png"
              alt=""
              className="pLogo"
            />
          </div>
          <div className="pLogoContainer">
            <img
              src="./images/partnershipsPage/logo5.png"
              alt=""
              className="pLogo"
            />
          </div>
        </div>
        <div id="partnershipsRow2">
          <div id="pyramidGroup1" className="pyramidGroup">
            <div className="pLogoContainer">
              <img
                src="./images/partnershipsPage/logo6.png"
                alt=""
                className="pLogo"
              />
            </div>
            <div className="pLogoContainer">
              <img
                src="./images/partnershipsPage/logo7.png"
                alt=""
                className="pLogo"
              />
            </div>
            <div className="pLogoContainer">
              <img
                src="./images/partnershipsPage/logo8.png"
                alt=""
                className="pLogo"
              />
            </div>
          </div>
          <div className="flex-center">
            <h1 className="lightTextBorder" id="ptHeading" ref={ptHeadingRef}>
              BUILDING PARTNERSHIPS
            </h1>
          </div>
          <div id="pyramidGroup2" className="pyramidGroup">
            <div className="pLogoContainer">
              <img
                src="./images/partnershipsPage/logo9.png"
                alt=""
                className="pLogo"
              />
            </div>
            <div className="pLogoContainer">
              <img
                src="./images/partnershipsPage/logo10.png"
                alt=""
                className="pLogo"
              />
            </div>
            <div className="pLogoContainer">
              <img
                src="./images/partnershipsPage/logo11.png"
                alt=""
                className="pLogo"
              />
            </div>
          </div>
        </div>
        <div id="partnershipsRow3">
          <div className="pLogoContainer">
            <img
              src="./images/partnershipsPage/logo12.png"
              alt=""
              className="pLogo"
            />
          </div>
          <div className="pLogoContainer">
            <img
              src="./images/partnershipsPage/logo13.png"
              alt=""
              className="pLogo"
            />
          </div>
          <div className="pLogoContainer">
            <img
              src="./images/partnershipsPage/logo14.png"
              alt=""
              className="pLogo"
            />
          </div>
          <div className="pLogoContainer">
            <img
              src="./images/partnershipsPage/logo15.png"
              alt=""
              className="pLogo"
            />
          </div>
          <div className="pLogoContainer">
            <img
              src="./images/partnershipsPage/logo16.png"
              alt=""
              className="pLogo"
            />
          </div>
          <div className="pLogoContainer">
            <img
              src="./images/partnershipsPage/logo17.png"
              alt=""
              className="pLogo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipsSection;
