import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import LoadingPage from "@pages/MorePages/LoadingPage/LoadingPage";

// Lazy-loaded components
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const AboutPage = React.lazy(() => import("@pages/AboutPage/AboutPage"));
const FAQsPage = React.lazy(() => import("@pages/FAQsPage/FAQsPage"));
const LiteracyPage = React.lazy(() =>
  import("@pages/LiteracyPage/LiteracyPage")
);
const NetworkPage = React.lazy(() => import("@pages/NetworkPage/NetworkPage"));
const SupportPage = React.lazy(() => import("@pages/SupportPage/SupportPage"));
const VolunteerFormPage = React.lazy(() =>
  import("@pages/VolunteerFormPage/VolunteerFormPage")
);
const NotFoundPage = React.lazy(() =>
  import("@pages/MorePages/NotFoundPage/NotFoundPage")
);
const PrivacyPolicyPage = React.lazy(() =>
  import("@pages/MorePages/PrivacyPolicyPage/PrivacyPolicyPage")
);
const TermsAndConditionsPage = React.lazy(() =>
  import("@pages/MorePages/TermsAndConditionsPage/TermsAndConditionsPage")
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/literacy" element={<LiteracyPage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/volunteer" element={<VolunteerFormPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditionsPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
