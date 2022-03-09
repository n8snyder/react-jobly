import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import Job from "./Job";


/** CompanyDetails, details about a company and list of their jobs
 * 
 * Props: none
 * 
 * State:
 *  - company: object of company
 * 
 * Routes -> CompanyDetails
 */

function CompanyDetails() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(function fetchCompanyDetailsWhenMounted() {
    async function fetchCompanyDetails() {
      const details = await JoblyApi.getCompany(handle);
      setCompany(details);
    }
    fetchCompanyDetails();
  }, [handle]);

  if (!company) {
    return <p className="CompanyDetails">Loading...</p>
  }

  return (
    <div className="CompanyDetails">
      <h3>{company.name}</h3>
      <p>{company.description}</p>

      {company.jobs.map(job => {
        return <li key={job.id}><Job job={job} /></li>
      })}
    </div>
  );
}

export default CompanyDetails;