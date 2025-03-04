import React, { useEffect, useState } from 'react';

const JobOpportunities = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/jobs')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setJobs(data))
      .catch(error => {
        console.error('Error fetching job opportunities:', error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error loading jobs: {error.message}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Job Opportunities</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id} className="mb-4">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobOpportunities;
