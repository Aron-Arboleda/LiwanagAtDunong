import {
  FlexLayoutColumn,
  GridLayout,
  StandardLayout,
} from "@components/Layouts/Layouts";
import { useEffect, useState } from "react";
import Section from "@components/Section/Section";
import {
  DarkBackgroundContainer,
  MainContainer,
  TransparentLargeContainer,
} from "@components/LargeContainers/LargeContainers";
import XButton, {
  Callout,
  PageDivider,
  PageDividerThin,
} from "@components/CustomComponents/CustomComponents";
import Form from "@components/Form/Form";
import {
  StandardChunkFiveSubTitleH2,
  StandardChunkFiveSubTitleH3,
  StandardChunkFiveSubTitleH4,
  StandardChunkFiveTitle,
} from "@components/PageTitles/PageTitles";
import { agreementsCheckboxes, sections } from "./sections";
import { CartoonyContainer } from "@components/CardContainers/CardContainers";
import {
  SampleItinerary1,
  SampleItinerary2,
} from "@images/PageImages/VolunteerFormPage";
import { CONFIG } from "@controllers/config";
import { recordInitialPageLoadStatistics } from "@controllers/analytics";
import { createRecord } from "@controllers/volunteer_form_table";

const VolunteerFormPage = () => {
  const [submission, setSubmission] = useState({
    isSuccess: true,
    errorMessage: "",
    errorError: "",
  });
  const [submissionMessageVisible, setSubmissionMessageVisible] =
    useState(false);

  const handleClose = () => {
    setSubmissionMessageVisible(false);
  };

  const formSubmit = async (data) => {
    try {
      console.log(data);

      const result = await createRecord(data);
      if (result.success) {
        setSubmission({
          isSuccess: true,
          errorMessage: "",
          errorError: "",
        });
        setSubmissionMessageVisible(true);
        return { message: "Form submitted successfully", success: true };
      } else {
        setSubmission({
          isSuccess: false,
          errorMessage: result.message,
          errorError: "Error",
        });
        setSubmissionMessageVisible(true);
        return { message: "Form submission failed", success: false };
      }
    } catch (error) {
      console.error(error);
      setSubmission({
        isSuccess: false,
        errorMessage: error.message,
        errorError: error.error,
      });
      setSubmissionMessageVisible(true);
      return { message: "Form submission failed", success: false };
    }
  };

  useEffect(() => {
    recordInitialPageLoadStatistics();
  }, []);

  return (
    <StandardLayout>
      <MainContainer>
        <Section backgroundColor="#fffbe6">
          <div className="headerSpace"></div>
          <TransparentLargeContainer>
            <StandardChunkFiveTitle>Being a Volunteer</StandardChunkFiveTitle>
            <FlexLayoutColumn>
              <p className="pageParagP">Hello, Advocates! 👋</p>
              <p className="pageParagP">
                We want to start by sending a big thank you for your unwavering
                dedication and support for our Aeta brothers and sisters' right
                to education. We're just getting started, and it's an exciting
                journey ahead! 🎉
              </p>
              <p className="pageParagP">
                To get involved and volunteer with us, please take a moment to
                fill out the form.If you have any questions or simply want to
                chat, feel free to reach out through our{" "}
                <a
                  href="https://www.facebook.com/LiwanagAtDunongProject"
                  target="_blank"
                >
                  Facebook page
                </a>
                . We're here to help!
              </p>
              <p className="pageParagP">
                Thank you once again, and we can't wait to see you very, very
                soon! ✨
              </p>

              <PageDividerThin color="black" />

              <p className="pageParagP">
                Please take a moment to read through this manual, as it will
                serve as your reference while filling out the registration form.
              </p>
              <p className="pageParagP">
                Manual Link:{" "}
                <a href="https://tinyurl.com/LDBloluntirManual">click here</a>
              </p>
            </FlexLayoutColumn>

            <StandardChunkFiveSubTitleH2 title="Volunteer Form" />
          </TransparentLargeContainer>
          <Form
            agreements={agreementsCheckboxes}
            sections={sections}
            disclaimerText="By submitting this form, you consent to the use
        of your data for organizing volunteer activities and understand that
        your data won't be shared without your consent, except as required by
        law. You can contact us to access or correct your data or withdraw
        consent at any time."
            formSubmit={formSubmit}
          >
            <FlexLayoutColumn>
              <Callout variant="warning">
                <strong>No last-minute cancellation, please.</strong>
              </Callout>
              <p className="pageParagP">
                For the volunteers who will come from Manila, the van can
                accommodate only 12 to 14 volunteers. Once you confirm your
                attendance, we will reserve a slot for you.
              </p>
              <p className="pageParagP">
                Last-minute cancellations hinder us from offering opportunities
                to other volunteers who wish to join. Cancellations made on
                Friday or Saturday are particularly challenging, as potential
                volunteers often assume they cannot join on Sunday and make
                other plans. Consequently, Liwanag at Dunong must cover the
                transportation expenses for the canceled slot. Please note that
                Liwanag at Dunong operates on a very limited budget to sustain
                the weekly learning sessions in the community. We request that
                before committing to join, please make sure that you are all set
                and ready.
              </p>
              <p className="pageParagP">
                While we understand that the time and sacrifices involved in
                giving your whole-hearted service may not be the most
                convenient, we promise that your efforts will be deeply
                meaningful and rewarding.
              </p>
              <p className="pageParagP">Thank you and see you soon!</p>
            </FlexLayoutColumn>
          </Form>
        </Section>
        <PageDivider />
        {submissionMessageVisible && (
          <DarkBackgroundContainer>
            <div>
              <CartoonyContainer
                style={{
                  maxWidth: "500px",
                  minHeight: "250px",
                  margin: "0 1rem",
                }}
                handleClose={handleClose}
              >
                <XButton onClick={handleClose} />
                <StandardChunkFiveSubTitleH3
                  title={
                    submission.isSuccess
                      ? "Form submitted successfully"
                      : "Form submission failed"
                  }
                  style={{ margin: "0" }}
                />
                <StandardChunkFiveSubTitleH4
                  title={
                    submission.isSuccess
                      ? "Thank You for Volunteering with Liwanag at Dunong! 🌟"
                      : "Oops! something must have gone wrong."
                  }
                ></StandardChunkFiveSubTitleH4>
                <FlexLayoutColumn>
                  {submission.isSuccess ? (
                    <p className="pageParagP">
                      If you have any questions or concerns, please feel free to
                      reach out to us through our{" "}
                      <a
                        href="https://www.facebook.com/LiwanagAtDunongProject"
                        target="_blank"
                      >
                        Facebook page
                      </a>
                      . We're here to help!
                    </p>
                  ) : (
                    <>
                      <div>
                        <p className="pageParagP">
                          Message: {submission.errorMessage}
                        </p>
                        <p className="pageParagP">
                          Error: {submission.errorError}
                        </p>
                      </div>
                      <p className="pageParagP">
                        Please refresh the page and try again. If errors still
                        persist you can fill up our alternative google forms to
                        register{" "}
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLScXHyrwh4v7z9j67SkM5_0lTTQBlw_lWMhShE8zODx7-xM96w/viewform"
                          target="_blank"
                        >
                          Form link
                        </a>
                        .
                      </p>
                    </>
                  )}
                </FlexLayoutColumn>
              </CartoonyContainer>
            </div>
          </DarkBackgroundContainer>
        )}
      </MainContainer>
    </StandardLayout>
  );
};

export default VolunteerFormPage;
