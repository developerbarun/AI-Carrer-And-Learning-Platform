import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  // Check for token in localStorage on load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Profile onLogout={handleLogout} />
      ) : isSignup ? (
        <Register onSignupComplete={() => setIsLoggedIn(true)} />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} onNavigateToSignup={() => setIsSignup(true)} />
      )}
    </div>
  );
};

export default App;
