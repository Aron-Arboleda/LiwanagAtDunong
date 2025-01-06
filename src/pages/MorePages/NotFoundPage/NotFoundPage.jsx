import { FlexLayoutColumn, StandardLayout } from "@components/Layouts/Layouts";
import React from "react";
import Section from "@components/Section/Section";
import {
  StandardChunkFiveTitle,
  StandardChunkFiveSubTitleH2,
  MontserratUnorderedList,
  MontserratBulletInfo,
} from "@components/PageTitles/PageTitles";
import {
  CurvyLargeContainer,
  MainContainer,
} from "@components/LargeContainers/LargeContainers";
import { PageDivider } from "@components/CustomComponents/CustomComponents";
import { useLocation } from "react-router-dom";

const NotFoundPage = () => {
  const location = useLocation();
  const errorMessage = location.state?.errorMessage || "Page not found.";
  const pathName = location.state?.pathName || location.pathname;

  return (
    <StandardLayout>
      <MainContainer>
        <Section backgroundColor="#fffbe6">
          <div className="headerSpace"></div>
          <StandardChunkFiveTitle
            title="404 Not Found"
            style={{ textAlign: "left" }}
          />
          <CurvyLargeContainer>
            <FlexLayoutColumn style={{ width: "100%" }}>
              <StandardChunkFiveSubTitleH2 title="The page you are looking for does not exist." />
              <MontserratUnorderedList context="Error Info:">
                <MontserratBulletInfo>
                  <span>Routing:</span> No match found for
                  <code>{pathName}</code>
                </MontserratBulletInfo>
                <MontserratBulletInfo>
                  <span>Message:</span> {errorMessage}
                </MontserratBulletInfo>
              </MontserratUnorderedList>
            </FlexLayoutColumn>
          </CurvyLargeContainer>
        </Section>
        <PageDivider />
      </MainContainer>
    </StandardLayout>
  );
};

export default NotFoundPage;
