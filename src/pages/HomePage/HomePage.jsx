import InitialSection from "../HomePage/HomePage_components/InitialSection";
import LatestActivitiesSection from "../HomePage/HomePage_components/LatestActivitiesSection";
import ReelsSection from "../HomePage/HomePage_components/ReelsSection";
import GoalsSection from "../HomePage/HomePage_components/GoalsSection";
import AetaLearningCenterSection from "../HomePage/HomePage_components/AetaLearningCenterSection";
import PartnershipsSection from "../HomePage/HomePage_components/PartnershipsSection";
import SupportSection from "../HomePage/HomePage_components/SupportSection";
import "./HomePage.css";
import {
  AnnouncementBar,
  PageDivider,
} from "@components/CustomComponents/CustomComponents";
import { StandardLayout } from "@components/Layouts/Layouts";
import { useEffect } from "react";
import { recordPageView } from "@controllers/page_views";

const HomePage = () => {
  useEffect(() => {
    recordPageView();
  }, []);

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
