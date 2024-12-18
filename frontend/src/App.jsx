import React, { useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
// import Register from "./components/Register";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <Profile /> : <Login onLogin={() => setIsLoggedIn(true)} />}
    </div>
  );
};

export default App;
