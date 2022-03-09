import { NavLink } from "react-router-dom";

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
            <NavLink exact to="/">
                Jobly
            </NavLink>
            <NavLink exact to="/companies">
                Companies
            </NavLink>
            <NavLink exact to="/jobs">
                Jobs
            </NavLink>
        </nav>
    );
}

export default NavBar;