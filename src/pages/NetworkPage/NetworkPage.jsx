import {
  CardGridLayout,
  FlexLayoutColumn,
  GridLayout3Column,
  StandardLayout,
} from "@components/Layouts/Layouts";
import { PageDivider } from "@components/CustomComponents/CustomComponents";
import {
  MainContainer,
  TransparentLargeContainer,
} from "@components/LargeContainers/LargeContainers";
import {
  StandardChunkFiveSubTitleH2,
  StandardChunkFiveTitle,
} from "@components/PageTitles/PageTitles";
import Section from "@components/Section/Section";
import React, { useEffect } from "react";
import PartnerCard from "./NetworkPageComponents/PartnerCard";

import { networkPageData } from "./programData.js";
import { recordInitialPageLoadStatistics } from "@controllers/analytics";

const NetworkPage = () => {
  const { programPartners_data, programDonors_data, volunteerImages } =
    networkPageData;

  useEffect(() => {
    recordInitialPageLoadStatistics();
  }, []);

  return (
    <StandardLayout>
      <MainContainer>
        <Section backgroundColor="#f8f7de">
          <div className="headerSpace"></div>
          <TransparentLargeContainer>
            <StandardChunkFiveTitle title="Network of Organizations and Volunteers" />
            <StandardChunkFiveSubTitleH2 title="Program Partners" />
            <p className="pageParagP">
              Program partners are organizations that have played a pivotal role
              in both shaping and executing the programs.
            </p>
            <CardGridLayout>
              {programPartners_data.map((card, index) => (
                <PartnerCard
                  key={index}
                  imgSrc={card.imgSrc}
                  title={card.title}
                  info={card.info}
                />
              ))}
            </CardGridLayout>
            <StandardChunkFiveSubTitleH2 title="Program Donors" />
            <p className="pageParagP">
              Program donors are individuals and organizations that have
              contributed resources for the establishment and maintenance of the
              ALC, as well as the execution of the program.
            </p>
            <CardGridLayout>
              {programDonors_data.map((card, index) => (
                <PartnerCard
                  key={index}
                  imgSrc={card.imgSrc}
                  title={card.title}
                  info={card.info}
                />
              ))}
            </CardGridLayout>
            <StandardChunkFiveSubTitleH2 title="Network of Volunteers" />
            <FlexLayoutColumn>
              <p className="pageParagP">
                From its inception, Project Liwanag at Dunong has been supported
                by an expanding network of volunteers who actively contribute to
                program execution and the mobilization of resources.
              </p>
              <GridLayout3Column>
                {volunteerImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className="pageImage"
                    loading="lazy"
                  />
                ))}
              </GridLayout3Column>
            </FlexLayoutColumn>
          </TransparentLargeContainer>
        </Section>
        <PageDivider />
      </MainContainer>
    </StandardLayout>
  );
};

export default NetworkPage;
