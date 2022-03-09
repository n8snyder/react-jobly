/** Companies, list of companies with search bar
 * 
 * State:
 * - companies: array of companies
 * 
 * Routes -> Companies
 */

import { useState } from "react";

function Companies() {
  const [companies, setCompanies] = useState(null);

  return <div className="Companies">COMPANIES PAGE</div>;
}

export default Companies;