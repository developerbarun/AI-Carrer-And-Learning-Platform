import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(response.data);
      } catch (err) {
        console.error(err.response?.data?.message || "Error fetching profile");
      }
    };

    fetchProfile();
  }, []);

  return profile ? (
    <div>
      <h2>{profile.name}</h2>
      <p>{profile.email}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Profile;
