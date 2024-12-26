import StandardLayout from "@components/StandardLayout/StandardLayout";
import React from "react";
import MainContainer from "@components/MainContainer/MainContainer";
import ContentArea from "@components/ContentArea/ContentArea";

const AboutPage = () => {
  return (
    <StandardLayout>
      <MainContainer>
        <ContentArea>
          <div className="headerSpace"></div>
          <h1 className="pageTitleH1">Project Primer</h1>
          <h2 className="pageSubTitleH2">Project Brief</h2>
          <div className="flex-container">
            <div className="flex-container-column">
              <p className="pageParagP">
                Project Liwanag at Dunong aims to enhance indigenous peoples'
                access to educational opportunities by establishing a learning
                center that promotes culturally relevant literacy programs for
                young and adult learners.
              </p>
              <p className="pageParagP">
                In collaboration with the Aeta community from Sitio
                Gayaman-Kalangitan and a group of dedicated volunteer advocates,
                Project Liwanag at Dunong inaugurated the Aeta Learning Center
                (ALC) powered by solar energy in 2022. At present, the ALC
                administers an adult literacy program, aiding community members
                in obtaining a Certificate of Completion for Basic Education
                through the Alternative Learning System.
              </p>
            </div>
            <img
              src="/images/AboutPage/LearningCenterWithKids.png"
              alt="Aeta Learning Center with Kids"
              className="float-right pageImageLimited"
            />
          </div>

          <h2 className="pageSubTitleH2">Project Site</h2>
          <div className="flex-container">
            <img
              src="/images/AboutPage/SitioGayamanMap.png"
              alt="Aeta Learning Center with Kids"
              className="float-left pageImageLimited"
            />
            <div>
              <p className="pageParagP">
                Sitio Kalangitan serves as a resettlement zone for the
                populations impacted by the eruption of Mount Pinatubo in 1991.
                This area is divided into nine distinct sitios, one of which is
                Sitio Gayaman, where the Aeta Learning Center (ALC) is situated.
                The ALC presently serves approximately 50 families in Gayaman,
                as well as those residing in the adjacent sitio of Baguingan,
                offering educational support to both young and adult learners.
              </p>
            </div>
          </div>

          <h2 className="pageSubTitleH2">Project History</h2>
          <div className="flex-container-column">
            <p className="pageParagP">
              The project's advancement was facilitated by EcoHumans, Inc., a
              non-governmental organization dedicated to fostering environmental
              and ecological awareness among humanity. At its core, EcoHumans,
              Inc. maintains a close partnership with the farming and Aeta
              communities of Central Luzon, working together to advocate for
              social and environmental justice.
            </p>
            <p className="pageParagP">
              In 2021, during one of their engagements with Sitio
              Kalangitan-Gayaman, the volunteer advocates became aware of how
              the pandemic had exacerbated the educational difficulties faced by
              Aeta youth. Challenges such as the lack of access to electricity,
              limited internet connectivity, and insufficient educational
              materials in most sitios heightened the obstacles to implementing
              modular learning for Aeta children.
            </p>
            <p className="pageParagP">
              In February 2022, the volunteer advocates returned to the
              community and proposed the establishment of a learning and
              cultural exchange hub, subsequently named the Gayaman Aeta
              Learning Center (ALC). The ALC was designed to complement formal
              school programs by offering supplementary learning activities,
              including tutorials and basic literacy programs for both young
              learners and adult community members.
            </p>
            <div className="grid-container">
              <img
                src="/images/AboutPage/AetaOrientation.png"
                alt="Liwanag at Dunong: Image of Aeta Orientation"
                className="pageImage"
              />
              <img
                src="/images/AboutPage/AetaPeopleRaisingHands.png"
                alt="Liwanag at Dunong: Image of Aeta People Raising Hands"
                className="pageImage"
              />
            </div>
            <p className="pageParagP">
              Following unanimous approval of the proposal, the community
              collaborated with the technical team to designate a suitable
              construction site, ensuring the area's suitability. Construction
              commenced in March 2022 and concluded in November 2022.
            </p>
          </div>
        </ContentArea>
      </MainContainer>
    </StandardLayout>
  );
};

export default AboutPage;
