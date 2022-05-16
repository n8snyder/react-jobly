import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./userContext";
import "./Jobly.css"

/** Jobly welcome page
 * 
 * Routes -> Jobly
 */

function Jobly() {
  const { user } = useContext(UserContext);
  return (
    <div className="Jobly container text-center">
      <h1 className="mb-4 fw-bold">Jobly</h1>
      <p className="lead">All the jobs in one, convenient place.</p>
      {user &&
        <p className="lead">{`Welcome back ${user.firstName}!`}</p>}
      {!user &&
        <p>
          <Link to="/login" className="btn btn-primary border-dark mx-2">
            Login
          </Link>
          <Link to="/signup" className="btn btn-primary border-dark mx-2">
            Sign Up
          </Link>
        </p>}
    </div>
  );
}

export default Jobly;