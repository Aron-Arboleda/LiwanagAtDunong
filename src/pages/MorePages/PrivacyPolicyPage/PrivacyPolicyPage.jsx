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

const PrivacyPolicyPage = () => {
  return (
    <StandardLayout>
      <MainContainer>
        <Section backgroundColor="#fffbe6">
          <div className="headerSpace"></div>
          <StandardChunkFiveTitle
            title="Privacy Policy"
            style={{ textAlign: "left" }}
          />
          <StandardChunkFiveSubTitleH2 title="Effective Date: Jan. 6, 2025" />
          <p className="pageParagP">
            Liwanag at Dunong is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website{" "}
            <a href="http://liwanagatdunong.ct.ws">liwanagatdunong.ct.ws</a>.
            Please read this policy carefully to understand our practices
            regarding your personal information.
          </p>
          <CurvyLargeContainer>
            <FlexLayoutColumn style={{ width: "100%" }}></FlexLayoutColumn>
          </CurvyLargeContainer>
        </Section>
        <PageDivider />
      </MainContainer>
    </StandardLayout>
  );
};

export default PrivacyPolicyPage;
