import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from './/Header';

const Profile = ({ onLogout }) => {
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

  return (
    <>
      <Header/>
    <div className="p-8 text-center">

      <h1 className="text-3xl font-bold">Welcome to Your Profile</h1>
      <button
        onClick={onLogout}
        className="mt-4 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
      >
        Log Out
      </button>
    </div>
    </>
  );
};

export default Profile;