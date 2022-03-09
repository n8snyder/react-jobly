import { useEffect, useState } from "react";
import JoblyApi from "./api";
import Company from "./Company"
import SearchBar from "./SearchBar";

/** Companies, list of companies with search bar
 * 
 * State:
 * - companies: array of companies
 * 
 * Routes -> Companies
 */

function Companies() {
  const [companies, setCompanies] = useState(null);

  async function fetchCompanies(formData) {
    const searchTerm = formData?.search;
    const newCompanies = await JoblyApi.getCompanies(searchTerm);
    setCompanies(newCompanies);
  }

  useEffect(function fetchCompaniesWhenMounted() {
    fetchCompanies();
  }, []);

  if (!companies) {
    return <p className="Companies">Loading...</p>
  }

  return (
    <div className="Companies">
      <SearchBar performSearch={fetchCompanies} />
      {companies.map(company => {
        return <Company company={company} />
      })}
    </div>
  );
}

export default Companies;