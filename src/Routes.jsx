import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "@pages/AboutPage/AboutPage";
import FAQsPage from "@pages/FAQsPage/FAQsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/faqs" element={<FAQsPage />} />
    </Routes>
  );
};

export default AppRoutes;
