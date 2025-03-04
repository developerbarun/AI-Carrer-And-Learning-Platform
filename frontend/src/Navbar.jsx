import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">AI Career Platform</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-gray-300">Profile Setup</Link>
          </li>
          <li>
            <Link to="/courses" className="hover:text-gray-300">Course Recommendations</Link>
          </li>
          <li>
            <Link to="/analytics" className="hover:text-gray-300">Analytics Dashboard</Link>
          </li>
          <li>
            <Link to="/jobs" className="hover:text-gray-300">Job Opportunities</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
