import { FlexLayoutColumn, StandardLayout } from "@components/Layouts/Layouts";
import React, { useEffect } from "react";
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
import { recordInitialPageLoadStatistics } from "@controllers/analytics";

const TermsAndConditionsPage = () => {
  useEffect(() => {
    recordInitialPageLoadStatistics();
  }, []);

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
              Welcome to the website of <strong>Liwanag at Dunong</strong>. By
              accessing or using our website , you agree to comply with and be
              bound by these Terms and Conditions. If you do not agree with
              these terms, please do not use the Site.
            </p>
          </TransparentLargeContainer>
          <CurvyLargeContainer style={{ margin: "2rem 0" }}>
            <FlexLayoutColumn style={{ width: "100%" }}>
              <StandardChunkFiveSubTitleH3
                title="1. Acceptance of Terms"
                style={{ margin: "0" }}
              />
              <p className="pageParagP">
                By using this Site, you affirm that you are at least 14 years
                old or have the consent of a parent or guardian to use the Site.
              </p>
              <StandardChunkFiveSubTitleH3
                title="2. Purpose of the Site"
                style={{ margin: "0" }}
              />
              <p className="pageParagP">
                The Site is intended to provide information about Liwanag at
                Dunong, our mission, programs, and activities. The content is
                for general informational purposes only.
              </p>
              <StandardChunkFiveSubTitleH3
                title="3. Use of the Site"
                style={{ margin: "0" }}
              />
              <div>
                <MontserratUnorderedList context="You agree to use the Site for lawful purposes only. You may not:">
                  <MontserratBulletInfo>
                    Use the Site to transmit harmful, offensive, or illegal
                    content.
                  </MontserratBulletInfo>
                  <MontserratBulletInfo>
                    Attempt to interfere with the operation or security of the
                    Site.
                  </MontserratBulletInfo>
                  <MontserratBulletInfo>
                    Copy or distribute Site content without prior written
                    permission.
                  </MontserratBulletInfo>
                </MontserratUnorderedList>
              </div>
              <StandardChunkFiveSubTitleH3
                title="4. User-Submitted Information"
                style={{ margin: "0" }}
              />
              <div>
                <MontserratUnorderedList context="When submitting forms, inquiries, or other information via the Site, you agree:">
                  <MontserratBulletInfo>
                    To provide accurate and truthful information.
                  </MontserratBulletInfo>
                  <MontserratBulletInfo>
                    That we may use the information in accordance with our{" "}
                    <a href="/privacy-policy" target="_blank">
                      Privacy Policy
                    </a>
                    .
                  </MontserratBulletInfo>
                </MontserratUnorderedList>
              </div>
              <p className="pageParagP">
                We reserve the right to refuse or remove submissions that
                violate these Terms.
              </p>
              <StandardChunkFiveSubTitleH3
                title="6. Third-Party Links"
                style={{ margin: "0" }}
              />
              <p className="pageParagP">
                The Site may contain links to third-party websites. These links
                are provided for convenience, and we are not responsible for the
                content or practices of these external sites.
              </p>
              <StandardChunkFiveSubTitleH3
                title="7. Disclaimer of Warranties"
                style={{ margin: "0" }}
              />
              <p className="pageParagP">
                The Site and its content are provided "as is" and "as
                available." We make no warranties, express or implied, regarding
                the Site's operation, availability, or accuracy.
              </p>
              <StandardChunkFiveSubTitleH3
                title="8. Limitation of Liability"
                style={{ margin: "0" }}
              />
              <p className="pageParagP">
                To the fullest extent permitted by law,{" "}
                <strong>Liwanag at Dunong</strong> will not be liable for any
                direct, indirect, or consequential damages resulting from the
                use of the Site or its content.
              </p>
              <StandardChunkFiveSubTitleH3
                title="9. Changes to Terms"
                style={{ margin: "0" }}
              />
              <p className="pageParagP">
                We reserve the right to update or modify these Terms at any
                time. Changes will be effective immediately upon posting on the
                Site. Continued use of the Site constitutes acceptance of the
                revised Terms.
              </p>
              <StandardChunkFiveSubTitleH3
                title="10. Contact Us"
                style={{ margin: "0" }}
              />
              <p className="pageParagP">
                If you have questions or concerns about these Terms, please
                contact us at:
              </p>
              <StandardChunkFiveSubTitleH4
                title="Liwanag at Dunong"
                style={{ margin: "0" }}
              />
              <div>
                <p className="pageParagP">
                  Email:{" "}
                  <a href="mailto:liwanag.at.dunong@gmail.com" target="_blank">
                    liwanag.at.dunong@gmail.com
                  </a>
                </p>
                <p className="pageParagP">
                  Phone:{" "}
                  <a href="tel:+639068366000" target="_blank">
                    (+63) 906-836-6000
                  </a>
                </p>
              </div>
              <PageDividerThin color="black" />
              <p className="pageParagP">
                This Terms and Conditions was last updated on{" "}
                <strong>January 6, 2025</strong>.
              </p>
            </FlexLayoutColumn>
          </CurvyLargeContainer>
        </Section>
        <PageDivider />
      </MainContainer>
    </StandardLayout>
  );
};

export default TermsAndConditionsPage;
