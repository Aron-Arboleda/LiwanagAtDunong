import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "@pages/AboutPage/AboutPage";
import FAQsPage from "@pages/FAQsPage/FAQsPage";
import LiteracyPage from "@pages/LiteracyPage/LiteracyPage";
import NetworkPage from "@pages/NetworkPage/NetworkPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/faqs" element={<FAQsPage />} />
      <Route path="/literacy" element={<LiteracyPage />} />
      <Route path="/network" element={<NetworkPage />} />
    </Routes>
  );
};

export default AppRoutes;
