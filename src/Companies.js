import { useEffect, useState } from "react";
import JoblyApi from "./api";

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

  return <div className="Companies">COMPANIES PAGE</div>;
}

export default Companies;