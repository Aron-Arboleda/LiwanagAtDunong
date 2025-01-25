import {
  FlexLayoutColumn,
  GridLayout3Column,
  InlineImageAndTextLayout,
  StandardLayout,
} from "@components/Layouts/Layouts";
import "./FAQsPage.css";
import Section from "@components/Section/Section";
import {
  SharpBrightWhiteShadowTitle,
  StandardChunkFiveTitle,
} from "@components/PageTitles/PageTitles";
import {
  CurvyLargeContainer,
  MainContainer,
} from "@components/LargeContainers/LargeContainers";
import { PageDivider } from "@components/CustomComponents/CustomComponents";

import facebookSVG from "@images/Graphics/WEBSITE_Graphics/IconsAndVectors/BlackIcons/facebook.svg";
import instagramSVG from "@images/Graphics/WEBSITE_Graphics/IconsAndVectors/BlackIcons/instagram.svg";
import {
  VolunteerHavingFunWithAetaKids,
  VolunteersTravelingByFoot,
  VolunteerTeaching,
} from "@images/PageImages/FAQsPage";
import { useEffect } from "react";
import { recordInitialPageLoadStatistics } from "@controllers/analytics";

const FAQsPage = () => {
  useEffect(() => {
    recordInitialPageLoadStatistics();
  }, []);

  return (
    <StandardLayout>
      <MainContainer>
        <Section backgroundColor="#347928">
          <div className="headerSpace"></div>
          <SharpBrightWhiteShadowTitle title="FREQUENTLY ASKED QUESTIONS FOR VOLUNTEERS" />
          <CurvyLargeContainer>
            <FlexLayoutColumn>
              <ol className="pageOrderedList">
                <li>
                  <strong>
                    I'M A STUDENT, CAN I JOIN? CAN SENIOR CITIZENS PARTICIPATE?
                    I DON'T HAVE ANY EXPERIENCE, WILL I BE ALLOWED TO ASSIST THE
                    STUDENTS? CAN I BRING MY FAMILY WITH ME? CAN I JOIN SOLO?
                  </strong>
                </li>
                <p>
                  Yes! Definitely! Everyone with a willing heart and a desire to
                  become an instrument in helping our Aeta students achieve
                  their educational aspirations are most welcome. Solo joiners
                  usually end up with meaningful friendships in the community
                  and with other volunteers. This is also a remarkable
                  experience for those who bring their families.
                </p>
                <li>
                  <strong>
                    WHERE IS THE MEETING PLACE? HOW CAN I GO TO THE SITIO?
                  </strong>
                </li>
                <p>
                  Let's travel together! For volunteers from the South (Laguna,
                  Cavite, Batangas, etc.) we'll meet at Zapote, Las Pinas. While
                  those from Metro Manila (Quezon City, Mandalyong, Marikina,
                  etc.) we'll meet you at P. Campa Espana. For those who are
                  from Bulacan, Pampanga, Tarlac, we'll set a special meeting
                  place for you. *For security purposes, exact location and
                  itinerary are provided for those who have signed up the
                  volunteer form.
                </p>
                <li>
                  <strong>I HAVE MY OWN TRANSPORTATION, CAN I BRING IT?</strong>
                </li>
                <p>
                  Yes! We'll set a location for us to meet so we can convoy to
                  the community. But take note, it's a rough road experience.
                </p>
                <li>
                  <strong>WHEN IS THE SCHEDULE? WHAT WILL BE MY TASKS?</strong>
                </li>
                <p>
                  Every Sunday is the weekly session, and we have different
                  tasks: story telling and fun activities with the kids,
                  house-to-house data gathering, and assist the Aeta students in
                  reading and writing.
                </p>
                <li>
                  <strong>IS THERE A FEE OR CONTRIBUTION REQUIRED?</strong>
                </li>
                <p>
                  The organization will provide a simple lunch for you. We do
                  ask for a contribution towards the van we will be using, as
                  Liwanag at Dunong doesn't have its own transportation.
                  However, the van contribution can be paid in installments or
                  at a later time. What matters most is your willingness to make
                  a difference.
                </p>
              </ol>
            </FlexLayoutColumn>
            <StandardChunkFiveTitle title="VOLUNTEER WITH US!" />
            <GridLayout3Column>
              <img
                src={VolunteersTravelingByFoot}
                alt="Liwanag at Dunong: Volunteers Traveling by Foot"
                className="pageImage"
                loading="lazy"
              />
              <img
                src={VolunteerTeaching}
                alt="Liwanag at Dunong: Volunteer Teaching Aeta People"
                className="pageImage"
                loading="lazy"
              />
              <img
                src={VolunteerHavingFunWithAetaKids}
                alt="Liwanag at Dunong: Volunteer Having Fun with Aeta Kids"
                className="pageImage"
                loading="lazy"
              />
            </GridLayout3Column>
            <InlineImageAndTextLayout>
              <a
                href="https://www.facebook.com/LiwanagAtDunongProject"
                target="_blank"
              >
                <img src={facebookSVG} alt="Facebook Icon" loading="lazy" />
              </a>
              <a
                href="https://www.instagram.com/liwanagatdunong/"
                target="_blank"
              >
                <img src={instagramSVG} alt="Instagram Icon" loading="lazy" />
              </a>
              LiwanagAtDunongProject
            </InlineImageAndTextLayout>
          </CurvyLargeContainer>
        </Section>
        <PageDivider />
      </MainContainer>
    </StandardLayout>
  );
};

export default FAQsPage;
