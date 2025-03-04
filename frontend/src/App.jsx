import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import ProfileSetup from './ProfileSetup';
import CourseRecommendations from './CourseRecommendations';
import AnalyticsDashboard from './AnalyticsDashboard';
import JobOpportunities from './JobOpportunities';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
