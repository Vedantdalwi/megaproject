import "./App.css";
import Navbar from "./Components/Navbar";
import PolicyRegistration from "./Pages/PolicyRegistration";
import HomePage from "./Pages/HomePage"; // HomePage for the root path
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import DashboardPage from "./Pages/DashboardPage.jsx";
import MyPolicies from "./Pages/MyPolicies";
import SettingsPage from "./Pages/SettingsPage";
import DocumentSummaryPage from "./Pages/DocumentSummaryPage";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar /> {/* Keep the Navbar on all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        {/* Root path leads to HomePage */}
        <Route path="/policy-registration" element={<PolicyRegistration />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/my-policies" element={<MyPolicies />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route
          path="/document-summary-page"
          element={<DocumentSummaryPage />}
        />
      </Routes>
    </div>
  );
}

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
