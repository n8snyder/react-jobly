import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./userContext";

/** Jobly welcome page
 * 
 * Routes -> Jobly
 */

function Jobly() {
  const { user } = useContext(UserContext);
  return (
    <div className="Jobly">
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {user &&
        <p>{`Welcome back ${user.firstName}!`}</p>}
      {!user &&
        <p>
          <Link to="/login">
            Login
          </Link>
          <Link to="/signup">
            Sign Up
          </Link>
        </p>}
    </div>
  );
}

export default Jobly;