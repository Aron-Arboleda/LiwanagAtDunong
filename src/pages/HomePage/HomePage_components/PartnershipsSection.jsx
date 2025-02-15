import React, { useEffect, useRef } from "react";
import "../HomePage_styles/PartnershipsSection.css";
import { CHR, ECEP_NESC, Ecohumans } from "@images/Graphics/PartnersGraphics";
import {
  ArtSolaceManila,
  BigBrew,
  FCC,
  IBISStudentCouncil,
  KunaNiShobe,
  Nawaya,
  PAGASA,
  PHINMA,
  RPsycheS,
  StPatrickSchool,
  TeamLisaPH,
  Tulasalitaan,
  UnionOfVolunteers,
  VibalFoundation,
} from "@images/Graphics/DonorsGraphics";

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
            <img src={Ecohumans} alt="" className="pLogo" loading="lazy" />
          </div>
          <div className="pLogoContainer">
            <img src={Nawaya} alt="" className="pLogo" loading="lazy" />
          </div>
          <div className="pLogoContainer">
            <img
              src={UnionOfVolunteers}
              alt=""
              className="pLogo"
              loading="lazy"
            />
          </div>
          <div className="pLogoContainer">
            <img src={PAGASA} alt="" className="pLogo" loading="lazy" />
          </div>
          <div className="pLogoContainer">
            <img src={TeamLisaPH} alt="" className="pLogo" loading="lazy" />
          </div>
        </div>
        <div id="partnershipsRow2">
          <div id="pyramidGroup1" className="pyramidGroup">
            <div className="pLogoContainer">
              <img src={KunaNiShobe} alt="" className="pLogo" loading="lazy" />
            </div>
            <div className="pLogoContainer">
              <img
                src={ArtSolaceManila}
                alt=""
                className="pLogo"
                loading="lazy"
              />
            </div>
            <div className="pLogoContainer">
              <img src={BigBrew} alt="" className="pLogo" loading="lazy" />
            </div>
          </div>
          <div className="flex-center">
            <h1 id="ptHeading" ref={ptHeadingRef}>
              BUILDING PARTNERSHIPS
            </h1>
          </div>
          <div id="pyramidGroup2" className="pyramidGroup">
            <div className="pLogoContainer">
              <img src={Tulasalitaan} alt="" className="pLogo" loading="lazy" />
            </div>
            <div className="pLogoContainer">
              <img src={CHR} alt="" className="pLogo" loading="lazy" />
            </div>
            <div className="pLogoContainer">
              <img src={PHINMA} alt="" className="pLogo" loading="lazy" />
            </div>
          </div>
        </div>
        <div id="partnershipsRow3">
          <div className="pLogoContainer">
            <img src={RPsycheS} alt="" className="pLogo" loading="lazy" />
          </div>
          <div className="pLogoContainer">
            <img
              src={VibalFoundation}
              alt=""
              className="pLogo"
              loading="lazy"
            />
          </div>
          <div className="pLogoContainer">
            <img
              src={StPatrickSchool}
              alt=""
              className="pLogo"
              loading="lazy"
            />
          </div>
          <div className="pLogoContainer">
            <img
              src={IBISStudentCouncil}
              alt=""
              className="pLogo"
              loading="lazy"
            />
          </div>
          <div className="pLogoContainer">
            <img src={ECEP_NESC} alt="" className="pLogo" loading="lazy" />
          </div>
          <div className="pLogoContainer">
            <img src={FCC} alt="" className="pLogo" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipsSection;
