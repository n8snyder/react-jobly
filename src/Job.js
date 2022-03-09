/** Job: One job component
 * 
 * Props: job object
 * 
 * State: none
 * 
 * Jobs -> Job
 */


 function Job({ job }) {
    return (
    <div className="job">
        <h6>{job.title}</h6>
        <p>{job.companyName}</p>
        <p>Equity: {job.equity}</p>
        <p>Salary: {job.salary}</p>
    </div>
    );
}

export default Job;