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
} from "@components/CustomComponents/CustomComponents";
import Form from "@components/Form/Form";
import {
  StandardChunkFiveSubTitleH2,
  StandardChunkFiveSubTitleH3,
  StandardChunkFiveSubTitleH4,
  StandardChunkFiveTitle,
} from "@components/PageTitles/PageTitles";
import { sections } from "./sections";
import { CartoonyContainer } from "@components/CardContainers/CardContainers";
import {
  SampleItinerary1,
  SampleItinerary2,
} from "@images/PageImages/VolunteerFormPage";
import { CONFIG } from "@controllers/config";
import { recordPageView } from "@controllers/page_views";

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
      console.log(JSON.stringify(data));

      const response = await fetch(
        `${CONFIG.BACKEND_API}volunteer_form_submissions/create.php`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        setSubmission({
          isSuccess: true,
          errorMessage: "",
          errorError: "",
        });
        setSubmissionMessageVisible(true);
        return true;
      } else {
        const result = await response.json();
        setSubmission({
          isSuccess: false,
          errorMessage: result.message,
          errorError: result.error,
        });
        setSubmissionMessageVisible(true);
        return false;
      }
    } catch (error) {
      setSubmission({
        isSuccess: false,
        errorMessage: error.message,
        errorError: error.error,
      });
      setSubmissionMessageVisible(true);
      return false;
    }
  };

  useEffect(() => {
    recordPageView();
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
            </FlexLayoutColumn>
            <StandardChunkFiveSubTitleH2 title="Sample Itinerary" />
            <FlexLayoutColumn>
              <GridLayout>
                <img
                  src={SampleItinerary1}
                  alt="Liwanag at Dunong: Sample Itinerary Morning"
                  className="pageImage-auto"
                  loading="lazy"
                />
                <img
                  src={SampleItinerary2}
                  alt="Liwanag at Dunong: Sample Itinerary Afternoon"
                  className="pageImage-auto"
                  loading="lazy"
                />
              </GridLayout>
            </FlexLayoutColumn>
            <StandardChunkFiveSubTitleH2 title="Frequently Asked Questions" />
            <FlexLayoutColumn>
              <ol className="pageOrderedList">
                <li>
                  <strong>Where is the community located?</strong>
                </li>
                <p>
                  Our partner-community is in Barangay CutCut II, Capas, Tarlac.
                </p>
                <li>
                  <strong>How do the volunteers go to the community?</strong>
                </li>
                <p>
                  Our volunteers either bring their own transportation, commute,
                  or join us in a van coming from Manila.
                </p>
                <li>
                  <strong>What is the route of the Manila Van?</strong>
                </li>
                <p>
                  We set a meeting place and pick up the volunteers from these
                  points:
                </p>
                <p>
                  LP cityhall - Jollibee Zapote - Baclaran/Heritage - Roxas Blvd
                  - Cityhall/Lawton - Quiapo/Morayta/Espana/UST - Welcome
                  Rotonda - Mayon - A. bonifacio - Cloverleaf Ayala - NLex - San
                  Fernando - Bamban
                </p>
                <li>
                  <strong>Is there any fee to pay to be able to join?</strong>
                </li>
                <p>
                  None, except for those who'd be joining us in the van coming
                  from Manila. Although we deeply wish to cover all expenses for
                  the weekly learning sessions, we are still falling short when
                  it comes to transportation. To rent a van, each volunteer
                  joining will contribute P800, which includes gas, tolls, and
                  food for the driver. However, the option for the volunteer to
                  bring their own transpo or commute is still open.
                </p>
                <li>
                  <strong>I am from Tarlac and I want to join!</strong>
                </li>
                <p>
                  Awesome! We have Team Tarlac who meets every 7:00 am at DCT.
                  They rent their own transpo going to the community and
                  depending on the number of volunteers, they usually contribute
                  P100-P200 for their transpo.
                </p>
              </ol>
            </FlexLayoutColumn>
            <StandardChunkFiveSubTitleH2 title="Volunteer Form" />
          </TransparentLargeContainer>
          <Form
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
                        Please refresh the page and try again or reach out to us
                        through our{" "}
                        <a
                          href="https://www.facebook.com/LiwanagAtDunongProject"
                          target="_blank"
                        >
                          Facebook page
                        </a>
                        . We're here to help!
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
