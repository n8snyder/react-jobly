import { Link } from "react-router-dom";

/** Company: One company component
 * 
 * Props: company object
 * 
 * State: none
 * 
 * Companies -> Company
 */

function Company({ company }) {
    return (
        <Link className="company" to={`/companies/${company.handle}`}>
            <h6>{company.name}</h6>
            <p>{company.description}</p>
            {company.logoUrl && <img src={company.logoUrl} alt="companylogo" />}
        </Link>
    );
}

export default Company;