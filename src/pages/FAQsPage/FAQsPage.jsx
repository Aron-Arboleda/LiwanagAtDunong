import StandardLayout from "@components/StandardLayout/StandardLayout";
import "./FAQsPage.css";
import MainContainer from "@components/MainContainer/MainContainer";
import Section from "@components/Section/Section";
import PageDivider from "@components/PageDivider/PageDivider";
import CurvySubSection from "@components/CurvySubSection/CurvySubSection";
import {
  SharpBrightWhiteShadowTitle,
  StandardChunkFiveTitle,
} from "@components/PageTitles/PageTitles";

const FAQsPage = () => {
  return (
    <StandardLayout>
      <MainContainer>
        <Section backgroundColor="#347928">
          <div className="headerSpace"></div>
          <SharpBrightWhiteShadowTitle title="FREQUENTLY ASKED QUESTIONS FOR VOLUNTEERS" />
          <CurvySubSection>
            <div className="flex-container-column">
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
            </div>
            <StandardChunkFiveTitle title="VOLUNTEER WITH US!" />
            <div className="grid-container-3">
              <img
                src="/images/FAQsPage/VolunteersTravelingByFoot.jpg"
                alt="Liwanag at Dunong: Volunteers Traveling by Foot"
                className="pageImage"
              />
              <img
                src="/images/FAQsPage/VolunteerTeaching.JPG"
                alt="Liwanag at Dunong: Volunteer Teaching Aeta People"
                className="pageImage"
              />
              <img
                src="/images/FAQsPage/VolunteerHavingFunWithAetaKids.jpg"
                alt="Liwanag at Dunong: Volunteer Having Fun with Aeta Kids"
                className="pageImage"
              />
            </div>
            <div className="inlineImageAndTextContainer">
              <a
                href="https://www.facebook.com/LiwanagAtDunongProject"
                target="_blank"
              >
                <img src="/images/SVGs/facebook.svg" alt="Facebook Icon" />
              </a>
              <a
                href="https://www.instagram.com/liwanagatdunong/"
                target="_blank"
              >
                <img src="/images/SVGs/instagram.svg" alt="Instagram Icon" />
              </a>
              LiwanagAtDunongProject
            </div>
          </CurvySubSection>
        </Section>
        <PageDivider />
      </MainContainer>
    </StandardLayout>
  );
};

export default FAQsPage;
