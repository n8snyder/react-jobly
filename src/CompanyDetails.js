import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import Job from "./Job";
import "./CompanyDetails.css"


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
      <div className="details px-4 mt-4">
        <h3 className="fw-bold">{company.name}</h3>
        <p className="lead">{company.description}</p>
      </div>

      <ul className="px-4 pb-4">
        {company.jobs.map(job => {
          return <li  key={job.id}><Job job={job} /></li>
        })}
      </ul>
    </div>
  );
}

export default CompanyDetails;