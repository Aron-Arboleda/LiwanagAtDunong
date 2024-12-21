import React, { useEffect } from "react";
import "../HomePage_styles/LatestActivitiesSection.css";

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
          <h2 className="lightTextBorderWithShadow">
            “WHAT DO WE HAVE TO OFFER”
          </h2>
          <p>
            Our hands, to make things beautiful and clean. <br />
            Our creativity, to make things meaningful and impactful. <br />
            Our time, to make things possible. <br />
            Our sensitivity, to see what more we can do. <br />
            <br />
            Whatever gifts we hold, we offer them for a greater purpose. And
            these simple, yet powerful, acts are what it takes to empower the
            community. <br />
            <br />A special thanks to our dear volunteers for offering all that
            you can, with all your hearts!
          </p>
          <div>
            <a
              href="https://www.facebook.com/LiwanagAtDunongProject"
              target="_blank"
            >
              <div
                id="facebookContainer"
                className="lightCartoonyBorder cartoonyComponentShadow"
              >
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
            src="/images/latestActivities/paper_butterflies.jpg"
            alt="paper butterflies image"
            className="latestActivitiesImage"
            id="LA_image1"
          />
          <img
            src="/images/latestActivities/medals.jpg"
            alt="paper butterflies image"
            className="latestActivitiesImage"
            id="LA_image2"
          />
          <img
            src="/images/latestActivities/cert.jpg"
            alt="paper butterflies image"
            className="latestActivitiesImage"
            id="LA_image3"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestActivitiesSection;
