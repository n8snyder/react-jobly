import { Link } from "react-router-dom";
import { Card, CardText, CardTitle } from "reactstrap";

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
    <Link to={`/companies/${company.handle}`} className="text-decoration-none text-reset">
      <Card className="Company p-4 my-4">
        <CardTitle tag="h5">
          {company.name}
          {company.logoUrl && 
            <img 
              src={company.logoUrl} 
              alt="companylogo" 
              className="position-absolute top-0 end-0 me-3 mt-2" 
              width={70} />}
        </CardTitle>
        <CardText className="pt-1">
          {company.description}
        </CardText>
      </Card>
    </Link>
  );
}

export default Company;