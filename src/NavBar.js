import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import UserContext from "./userContext";

/** Show Nav bar, which has returning to Jobly, going to list of companies, and
 * list of jobs
 * 
 * props: 
 * - logOut: function to log out user
 * 
 * state: none
 * 
 * App -> NavBar 
 */

function NavBar({ logOut }) {
    const { user } = useContext(UserContext);
    return (
        <nav className="NavBar">
            <div className="jobly-nav">
                <Link to="/">
                    Jobly
                </Link>
            </div>
            {user &&
                <div className="main-nav">
                    <NavLink exact to="/companies">
                        Companies
                    </NavLink>
                    <NavLink exact to="/jobs">
                        Jobs
                    </NavLink>
                    <NavLink exact to="/profile">
                        Profile
                    </NavLink>
                    <Link to="/" onClick={logOut}>
                        {`Log out ${user.username}`}
                    </Link>
                </div>}
            {!user &&
                <div className="main-nav">
                    <NavLink exact to="/login">
                        Login
                    </NavLink>
                    <NavLink exact to="/signup">
                        Sign Up
                    </NavLink>
                </div>}
        </nav>
    );
}

export default NavBar;