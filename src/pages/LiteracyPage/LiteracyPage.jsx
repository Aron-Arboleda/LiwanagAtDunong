import MainContainer from "@components/MainContainer/MainContainer";
import PageDivider from "@components/PageDivider/PageDivider";
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
        </Section>
        <PageDivider />
      </MainContainer>
    </StandardLayout>
  );
};

export default LiteracyPage;
