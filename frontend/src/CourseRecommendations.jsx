import React, { useEffect, useState } from 'react';

const CourseRecommendations = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/courses/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setCourses(data))
      .catch(error => {
        console.error('Error fetching course recommendations:', error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error loading courses: {error.message}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Course Recommendations</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id} className="mb-4">
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseRecommendations;
