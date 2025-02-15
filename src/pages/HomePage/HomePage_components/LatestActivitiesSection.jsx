import React, { useEffect } from "react";
import "../HomePage_styles/LatestActivitiesSection.css";
import {
  act1,
  act2,
  act3,
} from "@images/PageImages/HomePage/LatestActivitiesSection";
import { FlexLayoutColumn } from "@components/Layouts/Layouts";

const LatestActivitiesSection = () => {
  useEffect(() => {
    // Select the element we want to observe
    const latestActivitiesBox = document.getElementById("latestActivitiesBox");

    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is in the viewport, add the 'show' class
        if (entry.isIntersecting) {
          latestActivitiesBox.classList.add("show");
        } else {
          latestActivitiesBox.classList.remove("show");
        }
      },
      {
        // Options to trigger the observer when the element is at least 50% visible
        threshold: 0.1,
      }
    );

    // Start observing the element
    observer.observe(latestActivitiesBox);

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="latestActivities">
      <div
        id="latestActivitiesBox"
        className="wrapper cartoonyBorder cartoonyComponentShadow"
      >
        <div id="latestActivitiesInfo">
          <h1 id="latestActivitiesh1" className="corben">
            LATEST ACTIVITIES
          </h1>
          <h2>“PAGBABALIK SA KOMUNIDAD”</h2>
          <FlexLayoutColumn style={{ marginBottom: "1rem" }}>
            <p className="latestActivitiesText">
              J.M. Barrie's quote, "Those who bring sunshine into the lives of
              others cannot keep it from themselves," beautifully captures the
              essence of the Liwanag at Dunong boluntirs. These individuals
              dedicate their time, talents, and hearts to bring light and
              knowledge to others, embodying both compassion and selflessness.
            </p>
            <p className="latestActivitiesText">
              Through their efforts, they illuminate lives with hope, education,
              and inspiration, spreading a ripple of positive change. In doing
              so, they not only empower others but also experience the profound
              joy and fulfillment that comes from making a difference. Like the
              sunshine they bring, their kindness warms their own hearts,
              proving that service to others is a gift that enriches everyone
              involved.
            </p>
            <p>Boluntir with us!</p>
          </FlexLayoutColumn>
          <div>
            <a
              href="https://www.facebook.com/LiwanagAtDunongProject"
              target="_blank"
            >
              <div id="facebookContainer">
                <svg
                  viewBox="0 0 24 24"
                  style={{ enableBackground: "new 0 0 24 24" }}
                >
                  <path
                    id="facebookSVG"
                    fill="blue"
                    d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073c0-6.627,5.373-12,12-12S24,5.445,24,12.073z"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div id="latestActivitiesImagesContainer">
          <img
            src={act1}
            alt="activity image 1"
            className="latestActivitiesImage"
            id="LA_image1"
            loading="lazy"
          />
          <img
            src={act2}
            alt="activity image 2"
            className="latestActivitiesImage"
            id="LA_image2"
            loading="lazy"
          />
          <img
            src={act3}
            alt="activity image 3"
            className="latestActivitiesImage"
            id="LA_image3"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestActivitiesSection;
