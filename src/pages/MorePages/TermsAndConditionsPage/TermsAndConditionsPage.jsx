import { FlexLayoutColumn, StandardLayout } from "@components/Layouts/Layouts";
import React from "react";
import Section from "@components/Section/Section";
import {
  StandardChunkFiveTitle,
  StandardChunkFiveSubTitleH2,
  MontserratUnorderedList,
  MontserratBulletInfo,
  StandardChunkFiveSubTitleH3,
  StandardChunkFiveSubTitleH4,
} from "@components/PageTitles/PageTitles";
import {
  CurvyLargeContainer,
  MainContainer,
  TransparentLargeContainer,
} from "@components/LargeContainers/LargeContainers";
import {
  PageDivider,
  PageDividerThin,
} from "@components/CustomComponents/CustomComponents";

const TermsAndConditionsPage = () => {
  return (
    <StandardLayout>
      <MainContainer>
        <Section backgroundColor="#fffbe6">
          <div className="headerSpace"></div>
          <TransparentLargeContainer>
            <StandardChunkFiveTitle
              title="Terms and Condition"
              style={{ textAlign: "left", margin: "0" }}
            />
            <StandardChunkFiveSubTitleH2 title="Effective Date: Jan. 6, 2025" />
            <p className="pageParagP">
              Liwanag at Dunong is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website{" "}
              <a href="http://liwanagatdunong.ct.ws">liwanagatdunong.ct.ws</a>.
              Please read this policy carefully to understand our practices
              regarding your personal information.
            </p>
          </TransparentLargeContainer>
          <CurvyLargeContainer style={{ margin: "2rem 0" }}>
            <FlexLayoutColumn style={{ width: "100%" }}>
              <StandardChunkFiveSubTitleH3
                title="1. Information We Collect"
                style={{ margin: "0" }}
              />
              <p className="pageParagP">
                We may collect the following types of information when you
                interact with our website:
              </p>
              <div>
                <StandardChunkFiveSubTitleH4
                  title="a. Personal Information"
                  style={{ margin: "0" }}
                />
                <MontserratUnorderedList context="Personal information that you voluntarily provide to us, including:">
                  <MontserratBulletInfo>Name</MontserratBulletInfo>
                  <MontserratBulletInfo>Age</MontserratBulletInfo>
                  <MontserratBulletInfo>Email address</MontserratBulletInfo>
                  <MontserratBulletInfo>Phone number</MontserratBulletInfo>
                  <MontserratBulletInfo>
                    Other details submitted through forms on our website
                  </MontserratBulletInfo>
                </MontserratUnorderedList>
              </div>
            </FlexLayoutColumn>
          </CurvyLargeContainer>
        </Section>
        <PageDivider />
      </MainContainer>
    </StandardLayout>
  );
};

export default TermsAndConditionsPage;
