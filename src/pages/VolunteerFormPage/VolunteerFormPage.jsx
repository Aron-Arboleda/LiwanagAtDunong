import { StandardLayout } from "@components/Layouts/Layouts";
import React from "react";
import Section from "@components/Section/Section";
import {
  MainContainer,
  TransparentLargeContainer,
} from "@components/LargeContainers/LargeContainers";
import { PageDivider } from "@components/CustomComponents/CustomComponents";
import Form from "@components/Form/Form";

const VolunteerFormPage = () => {
  return (
    <StandardLayout>
      <MainContainer>
        <Section backgroundColor="#fffbe6">
          <div className="headerSpace"></div>
          <TransparentLargeContainer>
            <Form />
          </TransparentLargeContainer>
        </Section>
        <PageDivider />
      </MainContainer>
    </StandardLayout>
  );
};

export default VolunteerFormPage;
