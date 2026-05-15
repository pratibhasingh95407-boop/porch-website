import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import UrbonixHomepage from "./pages/UrbonixHomepage";
import PorchLandingPage from "./pages/PorchLandingPage";
import AboutPage from "./pages/AboutPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsPage from "./pages/TermsPage";
import PartnerPage from "./pages/PartnerPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<UrbonixHomepage />}
        />

        <Route
          path="/porch"
          element={<PorchLandingPage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/terms"
          element={<TermsPage />}
        />

        <Route
          path="/partner"
          element={<PartnerPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;