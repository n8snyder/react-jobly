import { useState, useEffect, useContext } from "react";
import JoblyApi from "./api";
import SearchBar from "./SearchBar";
import Job from "./Job";
import UserContext from "./userContext";
import Loading from "./Loading";

/** Jobs, list of jobs with search bar
 * 
 * State:
 * - jobs: array of jobs
 * 
 * Routes -> Jobs -> {SearchBar, Job}
 */


function Jobs() {
  const [jobs, setJobs] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(function fetchJobsWhenMounted() {
    if (user) {
      fetchJobs();
    }
  }, [user]);


  // Get jobs based on searching word user typed in
  async function fetchJobs(formData) {
    const searchTerm = formData?.search;
    const newJobs = await JoblyApi.getJobs(searchTerm);
    setJobs(newJobs);
  }

  if (jobs === null) {
    return <div className="Jobs"><Loading /></div>
  }

  return (
    <div className="Jobs">
      <SearchBar performSearch={fetchJobs} />
      <ul className="px-4 pb-4">
        {jobs.length === 0 && <h2>Sorry... No jobs found</h2>}
        {jobs.map(job => {
          return <li key={job.id}><Job job={job} /></li>
        })}
      </ul>
    </div>
  );
}

export default Jobs;