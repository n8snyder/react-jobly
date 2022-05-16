import { useContext } from "react";
import { Link } from "react-router-dom";
// import "./JoblyNavBar.css";
import UserContext from "./userContext";
import { Navbar, Nav, NavLink, NavbarBrand } from 'reactstrap';

/** Show Nav bar, which has returning to Jobly, going to list of companies, and
 * list of jobs
 * 
 * props: 
 * - logOut: function to log out user
 * 
 * state: none
 * 
 * App -> JoblyNavBar 
 */

function JoblyNavBar({ logOut }) {
  const { user } = useContext(UserContext);
  return (
    <div className="JoblyNavBar">
      <Navbar
        color="light"
        expand="md"
        light
        className="border-bottom"
      >
        <NavbarBrand tag={Link} to="/">Jobly</NavbarBrand>
        
        {user &&
          <Nav className="justify-content-end">
            <NavLink tag={Link} exact to="/companies">
              Companies
            </NavLink>
            <NavLink tag={Link} exact to="/jobs">
              Jobs
            </NavLink>
            <NavLink tag={Link} exact to="/profile">
              Profile
            </NavLink>
            <NavLink tag={Link} to="/" onClick={logOut}>
              {`Log out ${user.username}`}
            </NavLink>
          </Nav>}
        {!user &&
          <Nav className="justify-content-end">
            <NavLink tag={Link} exact to="/login">
              Login
            </NavLink>
            <NavLink tag={Link} exact to="/signup">
              Sign Up
            </NavLink>
          </Nav>}
      </Navbar>
    </div>
  );
}

export default JoblyNavBar;