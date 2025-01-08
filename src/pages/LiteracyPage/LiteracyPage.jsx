import {
  FlexLayoutColumn,
  GridLayout,
  StandardLayout,
} from "@components/Layouts/Layouts";
import { PageDivider } from "@components/CustomComponents/CustomComponents";
import {
  CardLargeContainer,
  MainContainer,
} from "@components/LargeContainers/LargeContainers";
import {
  BrownCircleTitle,
  StandardChunkFiveTitle,
} from "@components/PageTitles/PageTitles";
import Section, { ContentArea } from "@components/Section/Section";

import React from "react";
import { StaticFolderContainer } from "@components/LargeContainers/FoldersUIPackage";

const LiteracyPage = () => {
  return (
    <StandardLayout>
      <MainContainer>
        <Section backgroundColor="#c0eba6" fullContentArea={true}>
          <div className="headerSpace"></div>
          <BrownCircleTitle
            title="Adult Literacy Program"
            id="adultLiteracyProgramTitle"
          />
          <StaticFolderContainer color={"yellow"} withSpaceAbove={false}>
            <ContentArea fullWidth={false}>
              <CardLargeContainer>
                <FlexLayoutColumn>
                  <p className="pageParagP">
                    The Adult Literacy Program stands as the flagship initiative
                    of Project Liwanag at Dunong, with the primary goal of
                    aiding community members in obtaining an Alternative
                    Learning System (ALS) Certificate of Completion for Basic
                    Education.
                  </p>
                  <GridLayout>
                    <img
                      src="/images/PageImages/LiteracyPage/NanayLindaSmiling.png"
                      alt="Liwanag at Dunong: Image of Nanay Linda Smiling"
                      className="pageImage"
                      loading="lazy"
                    />
                    <img
                      src="/images/PageImages/LiteracyPage/VolunteerTeachingAnAeta.png"
                      alt="Liwanag at Dunong: Image of a Volunteer Teaching an Aeta"
                      className="pageImage"
                      loading="lazy"
                    />
                  </GridLayout>
                  <p className="pageParagP">
                    The impetus for developing this program emerged from
                    research findings and community interactions that
                    highlighted the low educational attainment levels among
                    adults in the community. This presents a significant
                    obstacle when it comes to supporting students' learning at
                    home.
                  </p>
                  <p className="pageParagP">
                    Following the recommendations stemming from a situational
                    analysis, the program has identified specific areas of
                    focus: (1) Pagbasa sa Filipino; (2) Reading in English; and
                    (3) Basic numeracy. Currently, the program is undergoing
                    adjustments to align with the competencies necessary for
                    completing basic education.
                  </p>
                  <p className="pageParagP">
                    Delivery of the program is facilitated in partnership with
                    the Manila Public School Teachers Association (MPSTA). MPSTA
                    consistently deploys volunteer teachers every Sunday to
                    conduct classes for individuals at Beginning, Developing,
                    and Intermediate Levels. Individual volunteers also sign up
                    to provide personalized guidance for beginning readers,
                    engage in educational activities with the children, and
                    conduct research tasks.
                  </p>
                  <StandardChunkFiveTitle title="Program Wins" />
                  <p className="pageParagP">
                    Since its initiation in April 2023, the program has
                    successfully aided ten community members in achieving their
                    elementary and secondary education through the Alternative
                    Learning System (ALS).
                  </p>
                  <p className="pageParagP">
                    Currently, the program is expanding its efforts to train
                    Aeta teachers from the pool of ALS completers, enabling them
                    to lead supplementary classes for beginning readers on
                    weekdays.
                  </p>
                  <GridLayout>
                    <img
                      src="/images/PageImages/LiteracyPage/AetaALSGraduation.png"
                      alt="Liwanag at Dunong: Image of Nanay Linda Smiling"
                      className="pageImage"
                      loading="lazy"
                    />
                    <img
                      src="/images/PageImages/LiteracyPage/AetaALSGraduation2.png"
                      alt="Liwanag at Dunong: Image of a Volunteer Teaching an Aeta"
                      className="pageImage"
                      loading="lazy"
                    />
                    <img
                      src="/images/PageImages/LiteracyPage/AetaPeopleOnMuseum.png"
                      alt="Liwanag at Dunong: Image of Nanay Linda Smiling"
                      className="pageImage"
                      loading="lazy"
                    />
                    <img
                      src="/images/PageImages/LiteracyPage/AetaPeopleOnRizalPark.png"
                      alt="Liwanag at Dunong: Image of a Volunteer Teaching an Aeta"
                      className="pageImage"
                      loading="lazy"
                    />
                  </GridLayout>
                </FlexLayoutColumn>
              </CardLargeContainer>
            </ContentArea>
          </StaticFolderContainer>
        </Section>
        <PageDivider />
      </MainContainer>
    </StandardLayout>
  );
};

export default LiteracyPage;
