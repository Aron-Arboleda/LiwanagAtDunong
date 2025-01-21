import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import LoadingPage from "@pages/morePages/LoadingPage/LoadingPage";
import ProtectedAdminRoute from "@pages/adminPages/ProtectedAdminRoute";

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
  import("@pages/morePages/NotFoundPage/NotFoundPage")
);
const PrivacyPolicyPage = React.lazy(() =>
  import("@pages/morePages/PrivacyPolicyPage/PrivacyPolicyPage")
);
const TermsAndConditionsPage = React.lazy(() =>
  import("@pages/morePages/TermsAndConditionsPage/TermsAndConditionsPage")
);
const AdminPage = React.lazy(() => import("@pages/adminPages/AdminPage"));
const AdminSubmissionsPage = React.lazy(() =>
  import("@pages/adminPages/AdminSubmissionsPage/AdminSubmissionsPage")
);
const AdminArchivedPage = React.lazy(() =>
  import("@pages/adminPages/AdminArchivedPage/AdminArchivedPage")
);
const AuthPage = React.lazy(() =>
  import("@pages/adminPages/AuthPage/AuthPage")
);
const AdminAdminsPage = React.lazy(() =>
  import("@pages/adminPages/AdminAdminsPage/AdminAdminsPage")
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

        {/* Admin Routes */}

        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminPage />
            </ProtectedAdminRoute>
          }
        />

        <Route
          path="/admin/submissions"
          element={
            <ProtectedAdminRoute>
              <AdminPage Page={AdminSubmissionsPage} />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/archive"
          element={
            <ProtectedAdminRoute>
              <AdminPage Page={AdminArchivedPage} />
            </ProtectedAdminRoute>
          }
        />

        <Route
          path="/admin/admins"
          element={
            <ProtectedAdminRoute>
              <AdminPage Page={AdminAdminsPage} />
            </ProtectedAdminRoute>
          }
        />

        <Route path="/admin-auth" element={<AuthPage />} />

        {/* 404 Route */}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
