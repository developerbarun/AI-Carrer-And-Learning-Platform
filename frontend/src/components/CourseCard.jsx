import React from "react";

const CourseCard = ({ title, description, skills, onStart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-blue-50">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2">{description}</p>
      <div className="mt-4">
        <p className="font-semibold">Skills Covered:</p>
        <ul className="list-disc ml-4">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <button
        onClick={onStart}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Start Course
      </button>
    </div>
  );
};

export default CourseCard;
