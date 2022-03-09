import { useEffect, useState } from "react";
import JoblyApi from "./api";
import Company from "./Company"

/** Companies, list of companies with search bar
 * 
 * State:
 * - companies: array of companies
 * 
 * Routes -> Companies
 */

function Companies() {
  const [companies, setCompanies] = useState(null);

  useEffect(function fetchCompaniesWhenMounted() {
    async function fetchCompanies() {
      const initialCompanies = await JoblyApi.getCompanies();
      setCompanies(initialCompanies);
    }
    fetchCompanies();
  }, []);

  if(!companies){
    return <p>Loading...</p>
  }

  return <div className="Companies">{companies.map(company => {
    return <Company company ={company}/>

  })}</div>;
}

export default Companies;