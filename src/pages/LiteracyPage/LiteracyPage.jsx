import { PageDivider } from "@components/CustomComponents/CustomComponents";
import { MainContainer } from "@components/LargeContainers/LargeContainers";
import { BrownCircleTitle } from "@components/PageTitles/PageTitles";
import Section from "@components/Section/Section";
import StandardLayout from "@components/StandardLayout/StandardLayout";
import React from "react";

const LiteracyPage = () => {
  return (
    <StandardLayout>
      <MainContainer>
        <Section backgroundColor="#c0eba6">
          <div className="headerSpace"></div>
          <BrownCircleTitle
            title="Adult Literacy Program"
            id="adultLiteracyProgramTitle"
          />
          {/* <div className="flex-container-column">
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
          </div> */}
        </Section>
        <PageDivider />
      </MainContainer>
    </StandardLayout>
  );
};

export default LiteracyPage;
