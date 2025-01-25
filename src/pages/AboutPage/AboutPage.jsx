import {
  FlexLayout,
  FlexLayoutColumn,
  GridLayout,
  StandardLayout,
} from "@components/Layouts/Layouts";
import React, { useEffect } from "react";
import Section from "@components/Section/Section";
import {
  CorbenWhiteCurvyTitle,
  StandardChunkFiveTitle,
  StandardChunkFiveSubTitleH2,
} from "@components/PageTitles/PageTitles";
import {
  CurvyLargeContainer,
  MainContainer,
  TransparentLargeContainer,
  WhiteLargeContainer,
} from "@components/LargeContainers/LargeContainers";
import { PageDivider } from "@components/CustomComponents/CustomComponents";
import {
  AetaKidsHoldingHands,
  AetaLearningCenterConstruction,
  AetaOrientation,
  AetaPeopleRaisingHands,
  LearningCenterWithKids,
  SitioGayamanMap,
} from "@images/PageImages/AboutPage";
import { recordInitialPageLoadStatistics } from "@controllers/analytics";

const communityCount_data = [
  { community: "Gayaman", households: 41, population: 212, children: 101 },
  { community: "Baguingan", households: 32, population: 137, children: 51 },
  { community: "TOTAL", households: 73, population: 349, children: 152 },
];

const gayamanChildrenEducationTally_data = [
  { level: "DayCare", count: 6 },
  { level: "Pre-School", count: 1 },
  { level: "Kinder", count: 9 },
  { level: "Prep", count: 1 },
  { level: "Grade 1", count: 13 },
  { level: "Grade 2", count: 8 },
  { level: "Grade 3", count: 3 },
  { level: "Grade 4", count: 4 },
  { level: "Grade 5", count: 8 },
  { level: "Grade 6", count: 2 },
  { level: "Grade 7", count: 4 },
  { level: "Grade 8", count: 2 },
  { level: "Grade 9", count: 5 },
  { level: "Grade 10", count: 2 },
  { level: "Grade 12", count: 1 },
  { level: "No Data shows", count: 22 },
  { level: "TOTAL", count: 91 },
];

const baguinganChildrenEducationTally_data = [
  { level: "Pre-School", count: 1 },
  { level: "Kinder", count: 4 },
  { level: "Grade 1", count: 4 },
  { level: "Grade 2", count: 7 },
  { level: "Grade 3", count: 4 },
  { level: "Grade 4", count: 3 },
  { level: "Grade 5", count: 2 },
  { level: "Grade 6", count: 1 },
  { level: "Grade 8", count: 1 },
  { level: "Grade 10", count: 1 },
  { level: "Grade 12", count: 1 },
  { level: "Elementary", count: 12 },
  { level: "No Data shows", count: 16 },
  { level: "TOTAL", count: 57 },
];

const AboutPage = () => {
  useEffect(() => {
    recordInitialPageLoadStatistics();
  }, []);

  return (
    <StandardLayout>
      <MainContainer>
        <Section backgroundColor="#fffbe6">
          <div className="headerSpace"></div>
          <TransparentLargeContainer>
            <StandardChunkFiveTitle title="Project Liwanag at Dunong" />
            <StandardChunkFiveSubTitleH2 title="Project Brief" />
            <FlexLayout>
              <FlexLayoutColumn>
                <p className="pageParagP">
                  Project Liwanag at Dunong aims to enhance indigenous peoples'
                  access to educational opportunities by establishing a learning
                  center that promotes culturally relevant literacy programs for
                  young and adult learners.
                </p>
                <p className="pageParagP">
                  In collaboration with the Aeta community from Sitio
                  Gayaman-Kalangitan and a group of dedicated volunteer
                  advocates, Project Liwanag at Dunong inaugurated the Aeta
                  Learning Center (ALC) powered by solar energy in 2022. At
                  present, the ALC administers an adult literacy program, aiding
                  community members in obtaining a Certificate of Completion for
                  Basic Education through the Alternative Learning System.
                </p>
              </FlexLayoutColumn>
              <img
                src={LearningCenterWithKids}
                alt="Aeta Learning Center with Kids"
                className="pageImageLimited"
                loading="lazy"
              />
            </FlexLayout>
            <StandardChunkFiveSubTitleH2 title="Project Site" />
            <FlexLayout>
              <img
                src={SitioGayamanMap}
                alt="Aeta Learning Center with Kids"
                className="pageImageLimited"
                loading="lazy"
              />
              <div>
                <p className="pageParagP">
                  Sitio Kalangitan serves as a resettlement zone for the
                  populations impacted by the eruption of Mount Pinatubo in
                  1991. This area is divided into nine distinct sitios, one of
                  which is Sitio Gayaman, where the Aeta Learning Center (ALC)
                  is situated. The ALC presently serves approximately 50
                  families in Gayaman, as well as those residing in the adjacent
                  sitio of Baguingan, offering educational support to both young
                  and adult learners.
                </p>
              </div>
            </FlexLayout>
            <StandardChunkFiveSubTitleH2 title="Project History" />
            <FlexLayoutColumn>
              <p className="pageParagP">
                The project's advancement was facilitated by EcoHumans, Inc., a
                non-governmental organization dedicated to fostering
                environmental and ecological awareness among humanity. At its
                core, EcoHumans, Inc. maintains a close partnership with the
                farming and Aeta communities of Central Luzon, working together
                to advocate for social and environmental justice.
              </p>
              <p className="pageParagP">
                In 2021, during one of their engagements with Sitio
                Kalangitan-Gayaman, the volunteer advocates became aware of how
                the pandemic had exacerbated the educational difficulties faced
                by Aeta youth. Challenges such as the lack of access to
                electricity, limited internet connectivity, and insufficient
                educational materials in most sitios heightened the obstacles to
                implementing modular learning for Aeta children.
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
              <GridLayout>
                <img
                  src={AetaOrientation}
                  alt="Liwanag at Dunong: Image of Aeta Orientation"
                  className="pageImage"
                  loading="lazy"
                />
                <img
                  src={AetaPeopleRaisingHands}
                  alt="Liwanag at Dunong: Image of Aeta People Raising Hands"
                  className="pageImage"
                  loading="lazy"
                />
              </GridLayout>
              <p className="pageParagP">
                Following unanimous approval of the proposal, the community
                collaborated with the technical team to designate a suitable
                construction site, ensuring the area's suitability. Construction
                commenced in March 2022 and concluded in November 2022.
              </p>
            </FlexLayoutColumn>
          </TransparentLargeContainer>
        </Section>
        <Section backgroundColor="#c0eba6">
          <CorbenWhiteCurvyTitle title="Community Profile" />
          <WhiteLargeContainer>
            <FlexLayoutColumn>
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
              <div className="tableContainer">
                <table className="pageTable longPageTable">
                  <thead>
                    <tr>
                      <th>Community</th>
                      <th>No. of Households</th>
                      <th>Total Population</th>
                      <th>
                        No. of Children <br />
                        (17 years old and below)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {communityCount_data.map((row, index) => (
                      <tr key={index}>
                        <td>{row.community}</td>
                        <td>{row.households}</td>
                        <td>{row.population}</td>
                        <td>{row.children}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>Kids currently enrolled at school:</p>
              <div className="grid-container">
                <div className="tableContainer">
                  <table className="pageTable">
                    <thead>
                      <tr>
                        <th colSpan={2}>Gayaman</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gayamanChildrenEducationTally_data.map((row, index) => (
                        <tr key={index}>
                          <td>{row.level}</td>
                          <td>{row.count}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="tableContainer">
                  <table className="pageTable">
                    <thead>
                      <tr>
                        <th colSpan={2}>Baguingan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {baguinganChildrenEducationTally_data.map(
                        (row, index) => (
                          <tr key={index}>
                            <td>{row.level}</td>
                            <td>{row.count}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </FlexLayoutColumn>
          </WhiteLargeContainer>
        </Section>
        <PageDivider />
        <Section backgroundColor="#fccd2a">
          <StandardChunkFiveTitle title="Construction Phase" />
          <CurvyLargeContainer>
            <FlexLayoutColumn>
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
              <GridLayout>
                <img
                  src={AetaKidsHoldingHands}
                  alt="Liwanag at Dunong: Aeta Kids Holding Hands"
                  className="pageImage"
                  loading="lazy"
                />
                <img
                  src={AetaLearningCenterConstruction}
                  alt="Liwanag at Dunong: Image of Aeta Learning Center Construction"
                  className="pageImage"
                  loading="lazy"
                />
              </GridLayout>
              <p>
                The male members of the community joined forces to construct the
                ALC, utilizing materials provided by IP supporters. As a token
                of gratitude for their active involvement in the construction of
                the ALC and their contributions to community development, they
                received food support.
              </p>
            </FlexLayoutColumn>
          </CurvyLargeContainer>
        </Section>
        <PageDivider />
      </MainContainer>
    </StandardLayout>
  );
};

export default AboutPage;
