import StandardLayout from "@components/StandardLayout/StandardLayout";
import React from "react";
import MainContainer from "@components/MainContainer/MainContainer";
import Section from "@components/Section/Section";
import PageDivider from "@components/PageDivider/PageDivider";
import WhiteSubSection from "@components/WhiteSubSection/WhiteSubSection";
import CurvySubSection from "@components/CurvySubSection/CurvySubSection";

const AboutPage = () => {
  return (
    <StandardLayout>
      <MainContainer>
        <Section backgroundColor="#fffbe6">
          <div className="headerSpace"></div>
          <h1 className="pageTitleH1 pageTitleH1-style1">
            Project Liwanag at Dunong
          </h1>
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
        </Section>
        <Section backgroundColor="#c0eba6">
          <h1 className="pageTitleH1 pageTitleH1-style2">Community Profile</h1>
          <WhiteSubSection>
            <div className="flex-container-column">
              <p className="pageParagP">
                Sitio Kalangitan serves as a resettlement zone for the
                populations impacted by the eruption of Mount Pinatubo in 1991.
                This area is divided into nine distinct sitios, one of which is
                Sitio Gayaman, where the Aeta Learning Center (ALC) is situated.
                The ALC presently serves approximately 50 families in Gayaman,
                as well as those residing in the adjacent sitio of Baguingan,
                offering educational support to both young and adult learners.
              </p>
              <p className="pageParagP">
                The livelihoods within the community vary significantly from
                family to family. While a majority of families rely on selling
                produce as their primary source of income, others have chosen to
                engage in construction work or housekeeping.
              </p>
              <p className="pageParagP">
                In terms of education, the statistics reveal a diverse picture.
                Approximately 20% of individuals have attained a high school
                education. Half of the population has completed elementary
                school. However, there remains a significant portion of the
                community who lack basic literacy skills and are unable to read
                or write.
              </p>
              <table className="pageTable">
                <tr>
                  <th>Community</th>
                  <th>No. of Households</th>
                  <th>Total Population</th>
                  <th>
                    No. of Children <br />
                    (17 years old and below)
                  </th>
                </tr>
                <tr>
                  <td>Gayaman</td>
                  <td>41</td>
                  <td>212</td>
                  <td>101</td>
                </tr>
                <tr>
                  <td>Baguingan</td>
                  <td>32</td>
                  <td>137</td>
                  <td>51</td>
                </tr>
                <tr>
                  <td>TOTAL</td>
                  <td>73</td>
                  <td>349</td>
                  <td>152</td>
                </tr>
              </table>
              <p>Kids currently enrolled at school:</p>
              <div className="grid-container">
                <table className="pageTable">
                  <tr>
                    <th colSpan={2}>Gayaman</th>
                  </tr>
                  <tr>
                    <td>DayCare</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>Pre-School</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Kinder</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>Prep</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Grade 1</td>
                    <td>13</td>
                  </tr>
                  <tr>
                    <td>Grade 2</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>Grade 3</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Grade 4</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Grade 5</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>Grade 6</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Grade 7</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Grade 8</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Grade 9</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>Grade 10</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Grade 12</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>No Data shows</td>
                    <td>22</td>
                  </tr>
                  <tr>
                    <td>TOTAL</td>
                    <td>91</td>
                  </tr>
                </table>
                <table className="pageTable">
                  <tr>
                    <th colSpan={2}>Baguingan</th>
                  </tr>
                  <tr>
                    <td>Pre-School</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Kinder</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Grade 1</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Grade 2</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td>Grade 3</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Grade 4</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Grade 5</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Grade 6</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Grade 8</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Grade 10</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Grade 12</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Elementary</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>No Data shows</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td>TOTAL</td>
                    <td>57</td>
                  </tr>
                </table>
              </div>
            </div>
          </WhiteSubSection>
        </Section>
        <PageDivider />
        <Section backgroundColor="#fccd2a">
          <h1 className="pageTitleH1 pageTitleH1-style1">Construction Phase</h1>
          <CurvySubSection>
            <div className="flex-container-column">
              <p className="pageParagP">
                The primary feature of the building is its solar power system,
                which has the capability to support the lighting and ventilation
                of the Aeta Learning Center. The proposal for a solar power
                system aligns with the project's focus on cost-effectiveness,
                environmental friendliness, and sustainability.
              </p>
              <p>
                Our technical team, consisting of engineering students and
                dedicated volunteers, initially designed a structure that
                incorporates indigenous materials such as cogon and bamboo to
                harmonize with the community's surroundings and culture.
                Following extensive consultations with the community and new
                project partners, the original design was fortified with
                additional materials to ensure its long-lasting durability and
                practicality.
              </p>
              <div className="grid-container">
                <img
                  src="/images/AboutPage/AetaKidsHoldingHands.png"
                  alt="Liwanag at Dunong: Image of Aeta Orientation"
                  className="pageImage"
                />
                <img
                  src="/images/AboutPage/AetaLearningCenterConstruction.png"
                  alt="Liwanag at Dunong: Image of Aeta People Raising Hands"
                  className="pageImage"
                />
              </div>
              <p>
                The male members of the community joined forces to construct the
                ALC, utilizing materials provided by IP supporters. As a token
                of gratitude for their active involvement in the construction of
                the ALC and their contributions to community development, they
                received food support.
              </p>
            </div>
          </CurvySubSection>
        </Section>
        <PageDivider />
      </MainContainer>
    </StandardLayout>
  );
};

export default AboutPage;
