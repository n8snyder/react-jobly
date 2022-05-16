/** Job: One job component
 * 
 * Props: job object
 * 
 * State: none
 * 
 * Jobs -> Job
 */

import { Card, CardTitle, CardText } from "reactstrap";


function Job({ job }) {
  return (
    <Card className="job p-4 my-4 shadow-sm">
      <CardTitle tag="h5">
        {job.title}
      </CardTitle>
      <CardText className="pt-1">
        {job.companyName}<br/>
        Equity: {job.equity}<br/>
        Salary: {job.salary}
      </CardText>
    </Card>
  );
}

export default Job;