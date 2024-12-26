import AnnouncementBar from "@components/AnnouncementBar/AnnouncementBar";
import InitialSection from "../HomePage/HomePage_components/InitialSection";
import LatestActivitiesSection from "../HomePage/HomePage_components/LatestActivitiesSection";
import ReelsSection from "../HomePage/HomePage_components/ReelsSection";
import GoalsSection from "../HomePage/HomePage_components/GoalsSection";
import AetaLearningCenterSection from "../HomePage/HomePage_components/AetaLearningCenterSection";
import PartnershipsSection from "../HomePage/HomePage_components/PartnershipsSection";
import SupportSection from "../HomePage/HomePage_components/SupportSection";
import "./HomePage.css";
import StandardLayout from "@components/StandardLayout/StandardLayout";
import PageDivider from "@components/PageDivider/PageDivider";

const HomePage = () => {
  return (
    <StandardLayout>
      <InitialSection />
      <LatestActivitiesSection />
      <AnnouncementBar />
      <ReelsSection />
      <AnnouncementBar />
      <GoalsSection />
      <AnnouncementBar />
      <AetaLearningCenterSection />
      <PartnershipsSection />
      <AnnouncementBar />
      <SupportSection />
      <PageDivider />
    </StandardLayout>
  );
};

export default HomePage;
