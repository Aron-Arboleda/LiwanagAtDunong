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

const PrivacyPolicyPage = () => {
  return (
    <StandardLayout>
      <MainContainer>
        <Section backgroundColor="#fffbe6">
          <div className="headerSpace"></div>
          <TransparentLargeContainer>
            <StandardChunkFiveTitle
              title="Privacy Policy"
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
              <div>
                <StandardChunkFiveSubTitleH4
                  title="b. Non-Personal Information"
                  style={{ margin: "0" }}
                />
                <MontserratUnorderedList context="Information automatically collected when you access our website, such as:">
                  <MontserratBulletInfo>IP address</MontserratBulletInfo>
                  <MontserratBulletInfo>Browser type</MontserratBulletInfo>
                  <MontserratBulletInfo>Operating system</MontserratBulletInfo>
                  <MontserratBulletInfo>Referring URLs</MontserratBulletInfo>
                  <MontserratBulletInfo>
                    Pages visited on our site
                  </MontserratBulletInfo>
                  <MontserratBulletInfo>
                    Date and time of access
                  </MontserratBulletInfo>
                </MontserratUnorderedList>
              </div>
              <StandardChunkFiveSubTitleH3
                title="2. How We Use Your Information"
                style={{ margin: "0" }}
              />
              <div>
                <MontserratUnorderedList context="We use the information we collect for the following purposes:">
                  <MontserratBulletInfo>
                    To process and respond to inquiries or requests submitted
                    through our website.
                  </MontserratBulletInfo>
                  <MontserratBulletInfo>
                    To communicate updates, news, or changes related to our
                    organization's activities.
                  </MontserratBulletInfo>
                  <MontserratBulletInfo>
                    To improve our website's functionality, performance, and
                    user experience.
                  </MontserratBulletInfo>
                  <MontserratBulletInfo>
                    To comply with applicable legal obligations.
                  </MontserratBulletInfo>
                </MontserratUnorderedList>
              </div>
              <StandardChunkFiveSubTitleH3
                title="3. Sharing Your Information"
                style={{ margin: "0" }}
              />
              <div>
                <MontserratUnorderedList context="We do not sell, rent, or trade your personal information. We may share your information in the following circumstances:">
                  <MontserratBulletInfo>
                    <strong>With Service Providers</strong>: Trusted third-party
                    vendors that assist us in operating our website and
                    providing services (e.g., hosting providers, email
                    services).
                  </MontserratBulletInfo>
                  <MontserratBulletInfo>
                    <strong>Legal Requirements</strong>: When required by law,
                    or when we believe such disclosure is necessary to protect
                    our rights, comply with legal obligations, or prevent fraud.
                  </MontserratBulletInfo>
                </MontserratUnorderedList>
              </div>
              <StandardChunkFiveSubTitleH3
                title="4. Cookies and Tracking Technologies"
                style={{ margin: "0" }}
              />
              <p className="pageParagP">
                We may use cookies and similar tracking technologies to enhance
                your experience on our website. These tools help us understand
                user behavior and improve site performance. You can manage or
                disable cookies through your browser settings.
              </p>
              <StandardChunkFiveSubTitleH3
                title="5. Data Security"
                style={{ margin: "0" }}
              />
              <p className="pageParagP">
                We take reasonable measures to protect your information from
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of data transmission or storage is completely
                secure. We cannot guarantee the absolute security of your
                information.
              </p>
              <StandardChunkFiveSubTitleH3
                title="6. Third-Party Links"
                style={{ margin: "0" }}
              />
              <p className="pageParagP">
                Our website may contain links to external websites. We are not
                responsible for the privacy practices of these third-party
                sites. We encourage you to review their privacy policies before
                providing any personal information.
              </p>
              <StandardChunkFiveSubTitleH3
                title="7. Your Rights"
                style={{ margin: "0" }}
              />
              <div>
                <MontserratUnorderedList context="Depending on your location, you may have the following rights regarding your personal information:">
                  <MontserratBulletInfo>
                    Access: Request access to the personal information we hold
                    about you.
                  </MontserratBulletInfo>
                  <MontserratBulletInfo>
                    Correction: Request correction of inaccurate or incomplete
                    information.
                  </MontserratBulletInfo>
                  <MontserratBulletInfo>
                    Deletion: Request deletion of your personal information,
                    subject to legal obligations.
                  </MontserratBulletInfo>
                  <MontserratBulletInfo>
                    Opt-Out: Opt-out of receiving promotional communications.
                  </MontserratBulletInfo>
                </MontserratUnorderedList>
              </div>
              <p className="pageParagP">
                To exercise these rights, please contact us at{" "}
                <a href="mailto:liwanag.at.dunong@gmail.com" target="_blank">
                  liwanag.at.dunong@gmail.com
                </a>
                .
              </p>
              <StandardChunkFiveSubTitleH3
                title="8. Children's Privacy"
                style={{ margin: "0" }}
              />
              <p className="pageParagP">
                Our website is not intended for children under the age of 13. We
                do not knowingly collect personal information from children. If
                you believe we have collected information from a child, please
                contact us to address the issue.
              </p>
              <StandardChunkFiveSubTitleH3
                title="9. Changes to This Privacy Policy"
                style={{ margin: "0" }}
              />
              <p className="pageParagP">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. The updated policy will be posted on this
                page with the “Effective Date” revised.
              </p>
              <StandardChunkFiveSubTitleH3
                title="10. Contact Us"
                style={{ margin: "0" }}
              />
              <p className="pageParagP">
                If you have questions or concerns about this Privacy Policy or
                our data practices, please contact us at:
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
                This Privacy Policy was last updated on{" "}
                <strong>January 6, 2025</strong>. Thank you for trusting Liwanag
                at Dunong. Your privacy is important to us.
              </p>
            </FlexLayoutColumn>
          </CurvyLargeContainer>
        </Section>
        <PageDivider />
      </MainContainer>
    </StandardLayout>
  );
};

export default PrivacyPolicyPage;
