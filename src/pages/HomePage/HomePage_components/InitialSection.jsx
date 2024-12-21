import { useState } from "react";
import "../HomePage_styles/InitialSection.css";

const InitialSection = () => {
  // State to track the visibility of the info container
  const [isInfoVisible, setInfoVisible] = useState(false);

  return (
    <div id="homePage">
      <div id="btnVolunteerAndAboutContainer">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfQ0HulrO3VvR5c18WbKwIbCMm9ObSySxA86AQMdetsaMeHcA/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button id="btnVolunteer">VOLUNTEER</button>
        </a>
        <div
          id="btnVolunteerAboutContainer"
          className="cartoonyComponentShadow"
          onMouseEnter={() => setInfoVisible(true)}
          onMouseLeave={() => setInfoVisible(false)}
        >
          {isInfoVisible && (
            <div id="iButtonInfoContainer">
              <p id="dialogThemedInfoText">
                Liwanag at Dunong is a non-governmental organization that seeks
                to uplift the Aeta Indigenous People. We hope to raise and
                support the Aetas by providing education, development of skills,
                and cultural preservation efforts, ensuring their voices are
                heard and their rights are acknowledged. Help us by unifying in
                this effort as we provide sustainable opportunities and
                encourage Aeta self-determination to grow more.
              </p>
            </div>
          )}
          <div id="btnVolunteerAbout">i</div>
        </div>
      </div>
    </div>
  );
};

export default InitialSection;
