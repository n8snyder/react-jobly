import { useState, useEffect } from "react";
import JoblyApi from "./api";
import SearchBar from "./SearchBar";
import Job from "./Job";

/** Jobs, list of jobs with search bar
 * 
 * State:
 * - jobs: array of jobs
 * 
 * Routes -> Jobs
 */


function Jobs() {
  const [jobs, setJobs] = useState(null);

  async function fetchJobs(formData) {
    const searchTerm = formData?.search;
    const newJobs = await JoblyApi.getJobs(searchTerm);
    setJobs(newJobs);
  }

  useEffect(function fetchJobsWhenMounted() {
    fetchJobs();
  }, []);

  if (!jobs) {
    return <p className="Jobs">Loading...</p>
  }

  return (
    <div className="Jobs">
      <SearchBar performSearch={fetchJobs} />
      <ul>
        {jobs.map(job => {
          return <li key={job.id}><Job job={job} /></li>
        })}

      </ul>


    </div>
  );
}

export default Jobs;