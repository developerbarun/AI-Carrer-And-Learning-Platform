import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { authState, themeState } from "./state/atoms";
import AuthPage from "./components/AuthPage";
import Navbar from "./Navbar";
import ProfileSetup from "./ProfileSetup";
import CourseRecommendations from "./CourseRecommendations";
import AnalyticsDashboard from "./AnalyticsDashboard";
import JobOpportunities from "./JobOpportunities";

export default function App() {
  const [auth, setAuth] = useRecoilState(authState);
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth({ token, isAuthenticated: true });
    }

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme === "dark" ? "dark" : "light");
    }
  }, [setAuth, setTheme]);

  return (
    <div className={theme === "dark" ? "dark bg-black text-white" : "bg-white text-black"}>
      <Router>
  <Routes>
    <Route path="/login" element={<AuthPage isSignup={false} />} />
    <Route path="/signup" element={<AuthPage isSignup={true} />} />
    <Route
      path="/dashboard/*"
      element={auth.isAuthenticated ? <MainApp /> : <Navigate to="/login" />}
    />
    <Route path="*" element={<Navigate to={auth.isAuthenticated ? "/dashboard" : "/login"} />} />
  </Routes>
</Router>

    </div>
  );
}

function MainApp() {
  return (
    <div className="App">
      <Navbar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<h1>Welcome to AI Career Platform</h1>} />
          <Route path="/profile" element={<ProfileSetup />} />
          <Route path="/courses" element={<CourseRecommendations />} />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
          <Route path="/jobs" element={<JobOpportunities />} />
        </Routes>
      </main>
    </div>
  );
}
