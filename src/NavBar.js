import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

/** Show Nav bar, which has returning to Jobly, going to list of companies, and
 * list of jobs
 * 
 * props: none
 * 
 * state: none
 * 
 * App -> NavBar 
 */

function NavBar() {

    return (
        <nav className="NavBar">
            <div className="jobly-nav">
                <Link to="/">
                    Jobly
                </Link>
            </div>
            <div className="main-nav">
                <NavLink exact to="/companies">
                    Companies
                </NavLink>
                <NavLink exact to="/jobs">
                    Jobs
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar;