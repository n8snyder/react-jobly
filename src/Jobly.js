import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap"
import UserContext from "./userContext";
import "./Jobly.css"

/** Jobly welcome page
 * 
 * Routes -> Jobly
 */

function Jobly({ loginUser }) {
  const { user } = useContext(UserContext);

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await loginUser({ "username": "demo", "password": "password" });
    } catch (err) {
    }
  }

  return (
    <div className="Jobly container text-center">
      <h1 className="mb-4 fw-bold">Jobly</h1>
      <p className="lead">All the jobs in one, convenient place.</p>
      {user &&
        <p className="lead">{`Welcome back ${user.firstName}!`}</p>}
      {!user &&
        <div>
          <p>
            <Link to="/login" className="btn btn-primary border-dark mx-2">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary border-dark mx-2">
              Sign Up
            </Link>
          </p>
          <p>
            <Button onClick={handleSubmit} className="border-dark" color="success">
              Login as demo
            </Button>
          </p>
        </div>
      }
    </div>
  );
}

export default Jobly;