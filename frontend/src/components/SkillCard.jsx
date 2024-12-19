import React from "react";

const SkillCard = ({ name, category, difficulty, level }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600">Category: {category}</p>
      <p className="text-gray-600">Difficulty: {difficulty}</p>
      <div className="mt-2">
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${level}%` }}
          ></div>
        </div>
        <p className="text-right text-sm text-gray-500">{level}%</p>
      </div>
    </div>
  );
};

export default SkillCard;
