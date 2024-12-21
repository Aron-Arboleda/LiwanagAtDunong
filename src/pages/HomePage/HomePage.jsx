import AnnouncementBar from "@components/AnnouncementBar/AnnouncementBar";
import InitialSection from "../HomePage/HomePage_components/InitialSection";
import LatestActivitiesSection from "../HomePage/HomePage_components/LatestActivitiesSection";
import ReelsSection from "../HomePage/HomePage_components/ReelsSection";
import GoalsSection from "../HomePage/HomePage_components/GoalsSection";
import AetaLearningCenterSection from "../HomePage/HomePage_components/AetaLearningCenterSection";
import PartnershipsSection from "../HomePage/HomePage_components/PartnershipsSection";
import SupportSection from "../HomePage/HomePage_components/SupportSection";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homePageSection">
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

      <div className="pageDivider"></div>
    </div>
  );
};

export default HomePage;
