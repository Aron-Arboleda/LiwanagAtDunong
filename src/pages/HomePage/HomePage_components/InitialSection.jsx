import { useEffect, useState } from "react";
import "../HomePage_styles/InitialSection.css";
import backgroundImageUrl from "@images/Graphics/WEBSITE_Graphics/Backgrounds/backgroundImage.png";

const InitialSection = () => {
  // State to track the visibility of the info container
  const [isInfoVisible, setInfoVisible] = useState(false);

  return (
    <div
      id="homePage"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <div id="btnVolunteerAndAboutContainer">
        <a href="/volunteer" rel="noopener noreferrer">
          <button id="btnVolunteer">VOLUNTEER</button>
        </a>
        <div
          id="btnVolunteerAboutContainer"
          onMouseEnter={() => setInfoVisible(true)}
          onMouseLeave={() => setInfoVisible(false)}
          onClick={() => setInfoVisible(!isInfoVisible)}
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
