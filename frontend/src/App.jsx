import React, { useState, useEffect } from 'react';
import Header from './components/Header';

const App = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/profile')
      .then(response => response.json())
      .then(data => setProfile(data));
  }, []);

  return (
    <div>
      <Header/>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>Skills: {profile.skills.join(', ')}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
